import { lazy, Suspense, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf } from 'lucide-react';
import { loadProfile, saveProfile, clearProfile, buildUserProfile, DEFAULT_SETTINGS } from './lib/profile';
import { UserProfile } from './types';
import ConfirmDialog from './components/ConfirmDialog';

const SplashScreen = lazy(() => import('./screens/SplashScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
const AvatarScreen = lazy(() => import('./screens/AvatarScreen'));
const Dashboard = lazy(() => import('./screens/Dashboard'));
const CertificateScreen = lazy(() => import('./screens/CertificateScreen'));

type Screen = 'splash' | 'login' | 'avatar' | 'dashboard' | 'certificate';

function getInitialSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS.theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: 'dark' | 'light') {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.setAttribute('data-theme', theme);
  document.body.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = theme;
  document.body.style.backgroundColor = isDark ? '#0f172a' : '#f8fafc';
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="p-4 bg-green-100 dark:bg-green-500/10 rounded-2xl mb-4"
      >
        <Leaf size={40} className="text-green-600 dark:text-green-400" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl font-black text-slate-900 dark:text-white tracking-widest"
      >
        ECO<span className="text-green-600 dark:text-green-400">SMART</span>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(getInitialSystemTheme);

  useEffect(() => {
    const profile = loadProfile();
    if (profile) {
      setUserProfile(profile);
      setScreen('dashboard');
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    if (media.matches !== (systemTheme === 'dark')) {
      setSystemTheme(media.matches ? 'dark' : 'light');
    }

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [systemTheme]);

  useEffect(() => {
    const activeTheme = userProfile?.settings.theme ?? systemTheme;
    applyTheme(activeTheme);

    if (userProfile) {
      saveProfile(userProfile);
    }
  }, [userProfile, systemTheme]);

  const handleStart = useCallback(() => setScreen('login'), []);

  const handleLogin = useCallback((username: string) => {
    const newProfile = buildUserProfile(username);
    newProfile.settings.theme = systemTheme;
    setUserProfile(newProfile);
    setScreen('avatar');
  }, [systemTheme]);

  const handleAvatarConfirm = useCallback((avatar: { id: string; svg: string }, color: string) => {
    setUserProfile(prev => prev ? ({
      ...prev,
      avatar: { ...avatar, color }
    }) : null);
    setScreen('dashboard');
  }, []);

  const handleReset = useCallback(() => {
    setShowResetDialog(true);
  }, []);

  const confirmReset = useCallback(() => {
    clearProfile();
    setUserProfile(null);
    setScreen('splash');
    setShowResetDialog(false);
    applyTheme(systemTheme);
  }, [systemTheme]);

  const cancelReset = useCallback(() => setShowResetDialog(false), []);

  const fontSizeClass = useMemo(() => {
    const size = userProfile?.settings.fontSize ?? 'medium';
    return size === 'small' ? 'text-sm' : size === 'large' ? 'text-xl' : 'text-base';
  }, [userProfile?.settings.fontSize]);

  const activeTheme = userProfile?.settings.theme ?? systemTheme;

  const isDark = activeTheme === 'dark';
  const appThemeClass = isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900';

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div data-theme={activeTheme} className="theme-transition" style={{ height: '100%', minHeight: '100dvh' }}>
      <div className={`h-full min-h-[100dvh] ${fontSizeClass} ${appThemeClass}`}>
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            {screen === 'splash' && (
              <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <SplashScreen onStart={handleStart} />
              </motion.div>
            )}
            {screen === 'login' && (
              <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <LoginScreen onLogin={handleLogin} />
              </motion.div>
            )}
            {screen === 'avatar' && (
              <motion.div key="avatar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <AvatarScreen onConfirm={handleAvatarConfirm} onBack={() => setScreen('login')} />
              </motion.div>
            )}
            {screen === 'dashboard' && userProfile && (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <Dashboard
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  onReset={handleReset}
                  onCompleteAll={() => setScreen('certificate')}
                />
              </motion.div>
            )}
            {screen === 'certificate' && userProfile && (
              <motion.div key="certificate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <CertificateScreen userProfile={userProfile} onRestart={confirmReset} />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
      </div>

      {showResetDialog && (
        <ConfirmDialog
          title="Reset training profile"
          message="This will clear your stored progress and return you to the start screen."
          confirmText="Reset"
          cancelText="Keep progress"
          onConfirm={confirmReset}
          onCancel={cancelReset}
        />
      )}
    </div>
  );
}