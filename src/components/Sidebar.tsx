import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../types';
import { Icon } from './Icon';
import { 
  Home, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Moon, 
  Sun, 
  RotateCcw,
  X,
  Type,
  Zap,
  ZapOff
} from 'lucide-react';

interface SidebarProps {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  view: 'hq' | 'handbook';
  setView: (view: 'hq' | 'handbook') => void;
  onReset: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ userProfile, setUserProfile, view, setView, onReset, isOpen, setIsOpen }: SidebarProps) {
  const toggleTheme = () => {
    setUserProfile(prev => prev ? ({
      ...prev,
      settings: { ...prev.settings, theme: prev.settings.theme === 'dark' ? 'light' : 'dark' }
    }) : null);
  };

  const toggleSound = () => {
    setUserProfile(prev => prev ? ({
      ...prev,
      settings: { ...prev.settings, sound: !prev.settings.sound }
    }) : null);
  };

  const toggleAnimations = () => {
    setUserProfile(prev => prev ? ({
      ...prev,
      settings: { ...prev.settings, animations: prev.settings.animations === false ? true : false }
    }) : null);
  };

  const cycleFontSize = () => {
    const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(userProfile.settings.fontSize || 'medium');
    const nextIndex = (currentIndex + 1) % sizes.length;
    setUserProfile(prev => prev ? ({
      ...prev,
      settings: { ...prev.settings, fontSize: sizes[nextIndex] }
    }) : null);
  };

  const NavItem = ({ id, label, icon }: { id: 'hq' | 'handbook', label: string, icon: string }) => {
    const isActive = view === id;
    return (
      <button
        onClick={() => { setView(id); setIsOpen(false); }}
        className={`group relative flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 ${
          isActive 
            ? 'bg-green-600 text-white shadow-lg shadow-green-500/30' 
            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
          <Icon name={icon} size={24} />
        </div>
        <span className="font-bold tracking-tight">{label}</span>
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className="absolute left-0 w-1.5 h-8 bg-white rounded-r-full"
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          />
        )}
      </button>
    );
  };

  const sidebarContent = useMemo(() => (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="p-8 border-b border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-600 rounded-xl shadow-lg shadow-green-500/20">
            <Zap className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter dark:text-white text-slate-900 leading-none">ECO SMART</h1>
            <p className="text-[10px] font-bold text-green-600 dark:text-green-400 tracking-[0.2em] uppercase mt-1">Digital Warrior</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 scrollbar-none">
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <h2 className="text-xl font-bold dark:text-white text-slate-900">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">Navigation</h3>
          <NavItem id="hq" label="Training Ground" icon="Home" />
          <NavItem id="handbook" label="Field Guide" icon="BookOpen" />
        </div>

        <div className="mt-10 space-y-2">
          <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">System Configuration</h3>
          
          <div className="grid gap-1">
            <button onClick={toggleSound} className="flex items-center justify-between w-full p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                  {userProfile.settings.sound ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </div>
                <span className="text-sm font-bold">Sound Effects</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors relative ${userProfile.settings.sound ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${userProfile.settings.sound ? 'left-6' : 'left-1'}`} />
              </div>
            </button>

            <button onClick={toggleAnimations} className="flex items-center justify-between w-full p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                  {userProfile.settings.animations !== false ? <Zap size={16} /> : <ZapOff size={16} />}
                </div>
                <span className="text-sm font-bold">Visual FX</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors relative ${userProfile.settings.animations !== false ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${userProfile.settings.animations !== false ? 'left-6' : 'left-1'}`} />
              </div>
            </button>

            <button onClick={cycleFontSize} className="flex items-center justify-between w-full p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                  <Type size={16} />
                </div>
                <span className="text-sm font-bold">Text Scale</span>
              </div>
              <span className="text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{userProfile.settings.fontSize || 'medium'}</span>
            </button>
            
            <button onClick={toggleTheme} className="flex items-center justify-between w-full p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                  {userProfile.settings.theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </div>
                <span className="text-sm font-bold">{userProfile.settings.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </div>
              <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-md">
                {userProfile.settings.theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* User Profile Summary */}
      <div className="p-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 shadow-sm" 
            style={{ color: userProfile.avatar.color }}
            dangerouslySetInnerHTML={{ __html: userProfile.avatar.svg.replace('width="100"', 'width="100%"').replace('height="100"', 'height="100%"') }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black dark:text-white text-slate-900 truncate">{userProfile.username}</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Level 1 Recruit</p>
          </div>
        </div>

        <button onClick={onReset} className="flex items-center justify-center gap-2 w-full p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all group">
          <RotateCcw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-xs font-black uppercase tracking-widest">Reset Progress</span>
        </button>
      </div>
    </div>
  ), [
    userProfile,
    view,
    setView,
    setIsOpen,
    toggleSound,
    toggleAnimations,
    cycleFontSize,
    toggleTheme,
    onReset,
  ]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 bg-white dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800/50 backdrop-blur-xl">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full sm:w-72 bg-white dark:bg-slate-900 z-50 lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
