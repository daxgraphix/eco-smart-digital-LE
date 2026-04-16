import React from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../types';
import { MISSIONS } from '../data/missions';
import { Icon } from './Icon';
import { CheckCircle2 } from 'lucide-react';

interface MissionHQProps {
  userProfile: UserProfile;
  onSelectMission: (id: string) => void;
}

const MissionHQ = React.memo(({ userProfile, onSelectMission }: MissionHQProps) => {
  const animationsEnabled = userProfile.settings.animations !== false;
  const transition = { duration: animationsEnabled ? 0.3 : 0 };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-6 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 dark:text-white text-slate-900">Training Ground</h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 px-4">
          Welcome, Recruit <span className="text-green-500 dark:text-green-400 font-bold">{userProfile.username}</span>! 
          Complete these missions to become a certified Eco-Warrior.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {Object.values(MISSIONS).map((mission, index) => {
          const progress = userProfile.progress[mission.id] || { status: 'locked', knowledge: false, learn: false, challenge: false };
          const isCompleted = progress.status === 'completed';
          const progressValue = Math.round((progress.knowledge ? 33.3 : 0) + (progress.learn ? 33.3 : 0) + (progress.challenge ? 33.4 : 0));

          return (
            <motion.button
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: animationsEnabled ? index * 0.1 : 0 }}
              whileHover={animationsEnabled ? { y: -8 } : {}}
              onClick={() => onSelectMission(mission.id)}
              className={`relative flex flex-col p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900/40 border-2 transition-all text-left group ${isCompleted ? 'border-green-500/50 shadow-lg shadow-green-500/10' : 'border-slate-200 dark:border-slate-800 hover:border-green-500/30 shadow-sm dark:shadow-none'}`}
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1.5 sm:gap-2">
                {progress.knowledge && (
                  <div className="p-1 sm:p-1.5 bg-blue-500/20 rounded-full text-blue-400" title="Knowledge Complete">
                    <Icon name="BookOpen" size={14} className="sm:w-4 sm:h-4" />
                  </div>
                )}
                {progress.learn && (
                  <div className="p-1 sm:p-1.5 bg-purple-500/20 rounded-full text-purple-400" title="Learning Complete">
                    <Icon name="Zap" size={14} className="sm:w-4 sm:h-4" />
                  </div>
                )}
                {progress.challenge && (
                  <div className="p-1 sm:p-1.5 bg-yellow-500/20 rounded-full text-yellow-400" title="Challenge Complete">
                    <Icon name="Trophy" size={14} className="sm:w-4 sm:h-4" />
                  </div>
                )}
                {isCompleted && (
                  <div className="p-1 sm:p-1.5 bg-green-500/20 rounded-full text-green-400" title="Mission Accomplished">
                    <CheckCircle2 size={14} className="sm:w-4 sm:h-4" />
                  </div>
                )}
              </div>
              
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-slate-100 dark:bg-slate-800 rounded-xl sm:rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Icon name={mission.icon} size={24} className="sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 dark:text-white text-slate-900">{mission.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6 flex-1 line-clamp-2">{mission.description}</p>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className={isCompleted ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'}>
                    {isCompleted ? 'Mission Accomplished' : 'Mission Progress'}
                  </span>
                  <span className={isCompleted ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}>{progressValue}%</span>
                </div>
                
                {/* Segmented Progress Bar */}
                <div className="flex gap-1 sm:gap-1.5 h-2">
                  <div className={`flex-1 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: progress.knowledge ? '100%' : '0%' }}
                      transition={transition}
                      className="h-full bg-blue-500"
                    />
                  </div>
                  <div className={`flex-1 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: progress.learn ? '100%' : '0%' }}
                      transition={transition}
                      className="h-full bg-purple-500"
                    />
                  </div>
                  <div className={`flex-1 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: progress.challenge ? '100%' : '0%' }}
                      transition={transition}
                      className="h-full bg-yellow-500"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-600">
                  <span>Briefing</span>
                  <span>Learn</span>
                  <span>Field</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
});

export default MissionHQ;
