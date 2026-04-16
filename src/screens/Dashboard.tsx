import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, Mission } from '../types';
import { MISSIONS } from '../data/missions';
import { HANDBOOK_DATA } from '../data/handbook';
import { Icon } from '../components/Icon';
import Sidebar from '../components/Sidebar';
import MissionHQ from '../components/MissionHQ';
import Handbook from '../components/Handbook';
import MissionView from '../components/MissionView';
import Modal from '../components/Modal';
import KnowledgeModule from '../components/KnowledgeModule';
import LearnModule from '../components/LearnModule';
import ChallengeModule from '../components/ChallengeModule';

interface DashboardProps {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  onReset: () => void;
  onCompleteAll: () => void;
}

const Dashboard = React.memo(({ userProfile, setUserProfile, onReset, onCompleteAll }: DashboardProps) => {
  const [view, setView] = useState<'hq' | 'handbook'>('hq');
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'knowledge' | 'learn' | 'challenge' | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectMission = useCallback((id: string) => {
    setSelectedMissionId(id);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedMissionId(null);
  }, []);

  const updateProgress = useCallback((missionId: string, part: 'knowledge' | 'learn' | 'challenge', value: boolean) => {
    setUserProfile(prev => {
      if (!prev) return null;
      const newProgress = { ...prev.progress };
      const currentMissionProgress = newProgress[missionId] || { status: 'unlocked', knowledge: false, learn: false, challenge: false };
      const missionProgress = { ...currentMissionProgress, [part]: value };
      
      if (missionProgress.knowledge && missionProgress.learn && missionProgress.challenge) {
        missionProgress.status = 'completed';
      }
      
      newProgress[missionId] = missionProgress;
      return { ...prev, progress: newProgress };
    });
  }, [setUserProfile]);

  const allMissionsComplete = useMemo(
    () => Object.values(userProfile.progress).every(progress => progress.status === 'completed'),
    [userProfile.progress]
  );

  const currentMission = useMemo(() => 
    selectedMissionId ? MISSIONS[selectedMissionId] : null
  , [selectedMissionId]);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      <Sidebar 
        userProfile={userProfile} 
        setUserProfile={setUserProfile}
        view={view} 
        setView={setView} 
        onReset={onReset}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden relative bg-slate-50 dark:bg-slate-950">
        <header className="px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl z-20 shrink-0">
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden p-2 sm:p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Icon name="Menu" size={18} className="sm:w-5 sm:h-5" />
            </button>
            
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-black dark:text-white text-slate-900 tracking-tight leading-none">
                {selectedMissionId ? MISSIONS[selectedMissionId].title : view === 'hq' ? 'Mission HQ' : 'Field Guide'}
              </h1>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mt-0.5 sm:mt-1">
                {selectedMissionId ? 'Active Mission' : 'Command Center'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <p className="text-xs font-black dark:text-white text-slate-900">{userProfile.username}</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Online</p>
              </div>
            </div>
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 shadow-sm" 
              style={{ color: userProfile.avatar.color }}
              dangerouslySetInnerHTML={{ __html: userProfile.avatar.svg.replace('width="100"', 'width="100%"').replace('height="100"', 'height="100%"') }}
            />
          </div>
        </header>

        {allMissionsComplete && (
          <div className="bg-emerald-500/10 border-y border-emerald-500/20 text-emerald-900 dark:text-emerald-200 dark:bg-emerald-500/10 py-4 px-6 text-sm font-semibold">
            All missions complete. Ready for the final certificate? 
            <button onClick={onCompleteAll} className="ml-3 underline underline-offset-4 font-black text-emerald-900 dark:text-emerald-100">View certificate</button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-10 scrollbar-none">
          <AnimatePresence mode="wait">
            {selectedMissionId ? (
              <motion.div key="mission-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MissionView 
                  mission={currentMission!}
                  progress={userProfile.progress[selectedMissionId]}
                  onBack={handleBack}
                  onStartKnowledge={() => setActiveModal('knowledge')}
                  onStartLearn={() => setActiveModal('learn')}
                  onStartChallenge={() => setActiveModal('challenge')}
                />
              </motion.div>
            ) : view === 'hq' ? (
              <motion.div key="hq" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MissionHQ 
                  userProfile={userProfile}
                  onSelectMission={handleSelectMission}
                />
              </motion.div>
            ) : (
              <motion.div key="handbook" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Handbook 
                  userProfile={userProfile}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'knowledge' && currentMission && (
          <motion.div key="knowledge-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Modal onClose={() => setActiveModal(null)}>
              <KnowledgeModule 
                mission={currentMission} 
                onComplete={() => {
                  updateProgress(currentMission.id, 'knowledge', true);
                  setActiveModal(null);
                }} 
              />
            </Modal>
          </motion.div>
        )}
        {activeModal === 'learn' && currentMission && (
          <motion.div key="learn-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Modal onClose={() => setActiveModal(null)}>
              <LearnModule 
                mission={currentMission} 
                onComplete={() => {
                  updateProgress(currentMission.id, 'learn', true);
                  setActiveModal(null);
                }} 
              />
            </Modal>
          </motion.div>
        )}
        {activeModal === 'challenge' && currentMission && (
          <motion.div key="challenge-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Modal onClose={() => setActiveModal(null)}>
              <ChallengeModule 
                mission={currentMission} 
                onComplete={() => {
                  updateProgress(currentMission.id, 'challenge', true);
                  setActiveModal(null);
                }} 
              />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Dashboard;
