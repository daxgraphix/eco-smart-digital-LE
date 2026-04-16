import { motion } from 'motion/react';
import { Mission, MissionProgress } from '../types';
import { Icon } from './Icon';
import { ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, Lock, BookOpen, Brain, Trophy } from 'lucide-react';
import { useState } from 'react';

interface MissionViewProps {
  mission: Mission;
  progress: MissionProgress;
  onBack: () => void;
  onStartKnowledge: () => void;
  onStartLearn: () => void;
  onStartChallenge: () => void;
}

type Area = 'knowledge' | 'learn' | 'challenge';

export default function MissionView({ mission, progress, onBack, onStartKnowledge, onStartLearn, onStartChallenge }: MissionViewProps) {
  const [activeArea, setActiveArea] = useState<Area>('knowledge');

  const cardCount = mission.learn.cards.length;
  const challengeCount = mission.challenge.questions ? mission.challenge.questions.length : 
                        mission.challenge.pairs ? mission.challenge.pairs.length :
                        mission.challenge.items ? mission.challenge.items.length : 0;

  const handleAreaChange = (area: Area) => {
    setActiveArea(area);
  };

  const startArea = (area: Area) => {
    if (area === 'knowledge') onStartKnowledge();
    else if (area === 'learn') onStartLearn();
    else onStartChallenge();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-5xl mx-auto"
    >
      <button onClick={onBack} className="flex items-center gap-1 sm:gap-2 text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors mb-4 sm:mb-8 group text-base sm:text-lg font-semibold">
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
        <span className="hidden sm:inline">Back to Training Ground</span>
        <span className="sm:hidden">Back</span>
      </button>

      <div className="text-center mb-6 sm:mb-12">
        <div className="inline-block p-4 sm:p-6 lg:p-8 bg-white dark:bg-slate-900/50 rounded-2xl sm:rounded-[3rem] mb-4 sm:mb-6 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
          <Icon name={mission.icon} size={48} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 tracking-tight dark:text-white text-slate-900">{mission.title}</h2>
        <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">{mission.description}</p>
      </div>

      {/* Area Tabs */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2">
          <button
            onClick={() => handleAreaChange('knowledge')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all ${activeArea === 'knowledge' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'}`}
          >
            <BookOpen size={14} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Knowledge</span>
            <span className="sm:hidden">Know</span>
            <span className="ml-1 text-[10px] bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 rounded-full">{mission.knowledge.pages.length}</span>
          </button>
          <button
            onClick={() => handleAreaChange('learn')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all ${activeArea === 'learn' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'}`}
          >
            <Brain size={14} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Learn</span>
            <span className="sm:hidden">Flip</span>
            <span className="ml-1 text-[10px] bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 rounded-full">{cardCount}</span>
          </button>
          <button
            onClick={() => handleAreaChange('challenge')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all ${activeArea === 'challenge' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'}`}
          >
            <Trophy size={14} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Challenge</span>
            <span className="sm:hidden">Quiz</span>
            <span className="ml-1 text-[10px] bg-slate-200 dark:bg-slate-600 px-1.5 py-0.5 rounded-full">{challengeCount}</span>
          </button>
        </div>
      </div>

      {/* Active Area Content */}
      <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white dark:bg-slate-900/40 border-2 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
        {activeArea === 'knowledge' && (
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 dark:text-white text-slate-900">{mission.knowledge.title}</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">Read through {mission.knowledge.pages.length} pages of essential briefing material.</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {mission.knowledge.pages.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i < mission.knowledge.pages.length - 1 ? 'bg-slate-300 dark:bg-slate-600' : ''}`} />
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">{mission.knowledge.pages.length} pages</p>
            <button 
              onClick={onStartKnowledge}
              className={`py-3 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 ${progress.knowledge ? 'bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-green-500/30' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'}`}
            >
              {progress.knowledge ? 'Review Briefing' : 'Start Briefing'}
            </button>
          </div>
        )}

        {activeArea === 'learn' && (
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 dark:text-white text-slate-900">{mission.learn.title}</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">Master key terms with {cardCount} interactive flipcards.</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {mission.learn.cards.slice(0, 12).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-purple-400/40" />
              ))}
              {mission.learn.cards.length > 12 && (
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600">+</div>
              )}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">{cardCount} flipcards</p>
            <button 
              disabled={!progress.knowledge}
              onClick={onStartLearn}
              className={`py-3 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 ${progress.learn ? 'bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-green-500/30' : progress.knowledge ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
            >
              {progress.learn ? 'Review Cards' : 'Start Learning'}
            </button>
          </div>
        )}

        {activeArea === 'challenge' && (
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 dark:text-white text-slate-900">{mission.challenge.title}</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">Test your knowledge with {challengeCount} challenges.</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {Array.from({ length: Math.min(challengeCount, 12) }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-yellow-400/40" />
              ))}
              {challengeCount > 12 && (
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 text-[8px] flex items-center justify-center">+</div>
              )}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">{challengeCount} questions</p>
            <button 
              disabled={!progress.learn}
              onClick={onStartChallenge}
              className={`py-3 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 ${progress.challenge ? 'bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-green-500/30' : progress.learn ? 'bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg shadow-yellow-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
            >
              {progress.challenge ? 'Retry Challenge' : 'Start Challenge'}
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 sm:mt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          <span>Mission List</span>
        </button>
        
        <button 
          onClick={() => {
            if (activeArea === 'knowledge') setActiveArea('learn');
            else if (activeArea === 'learn') setActiveArea('challenge');
            else onStartChallenge();
          }}
          className="flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base bg-green-600 hover:bg-green-700 text-white transition-colors"
        >
          {activeArea === 'challenge' ? 'Start' : 'Next'}
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </motion.div>
  );
}
