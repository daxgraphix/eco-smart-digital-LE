import { motion } from 'motion/react';
import { Mission, MissionProgress } from '../types';
import { Icon } from './Icon';
import { ChevronLeft, CheckCircle2, Lock } from 'lucide-react';

interface MissionViewProps {
  mission: Mission;
  progress: MissionProgress;
  onBack: () => void;
  onStartKnowledge: () => void;
  onStartLearn: () => void;
  onStartChallenge: () => void;
}

export default function MissionView({ mission, progress, onBack, onStartKnowledge, onStartLearn, onStartChallenge }: MissionViewProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Stage 1: Knowledge */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white dark:bg-slate-900/40 border-2 border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm dark:shadow-none">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${progress.knowledge ? 'bg-green-500 text-white' : 'bg-blue-600 text-white'}`}>
            {progress.knowledge ? <CheckCircle2 size={24} className="sm:w-8 sm:h-8" /> : '1'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white text-slate-900">Knowledge</h3>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-5 sm:mb-8 flex-1">Review the briefing to understand the core concepts.</p>
          <button 
            onClick={onStartKnowledge}
            className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 ${progress.knowledge ? 'bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-green-500/30' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'}`}
          >
            {progress.knowledge ? 'Review Briefing' : 'Start Briefing'}
          </button>
        </div>

        {/* Stage 2: Learn (Flipcards) */}
        <div className={`p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border-2 flex flex-col items-center text-center transition-all shadow-sm dark:shadow-none ${progress.knowledge ? 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800' : 'bg-slate-50 dark:bg-slate-900/10 border-slate-100 dark:border-slate-900 opacity-50'}`}>
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${progress.learn ? 'bg-green-500 text-white' : progress.knowledge ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'}`}>
            {progress.learn ? <CheckCircle2 size={24} className="sm:w-8 sm:h-8" /> : !progress.knowledge ? <Lock size={20} className="sm:w-6 sm:h-6" /> : '2'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white text-slate-900">Learn</h3>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-5 sm:mb-8 flex-1">Master key terms with interactive flipcards.</p>
          <button 
            disabled={!progress.knowledge}
            onClick={onStartLearn}
            className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 ${progress.learn ? 'bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-green-500/30' : progress.knowledge ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
          >
            {progress.learn ? 'Review Cards' : 'Start Learning'}
          </button>
        </div>

        {/* Stage 3: Challenge */}
        <div className={`p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border-2 flex flex-col items-center text-center transition-all shadow-sm dark:shadow-none ${progress.learn ? 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800' : 'bg-slate-50 dark:bg-slate-900/10 border-slate-100 dark:border-slate-900 opacity-50'}`}>
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${progress.challenge ? 'bg-green-500 text-white' : progress.learn ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'}`}>
            {progress.challenge ? <CheckCircle2 size={24} className="sm:w-8 sm:h-8" /> : !progress.learn ? <Lock size={20} className="sm:w-6 sm:h-6" /> : '3'}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white text-slate-900">Challenge</h3>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-5 sm:mb-8 flex-1">Apply what you've learned in the field.</p>
          <button 
            disabled={!progress.learn}
            onClick={onStartChallenge}
            className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 ${progress.challenge ? 'bg-slate-100 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-green-500/30' : progress.learn ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
          >
            {progress.challenge ? 'Retry Challenge' : 'Start Challenge'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
