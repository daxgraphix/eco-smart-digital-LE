import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mission } from '../types';
import { Icon } from './Icon';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface LearnModuleProps {
  mission: Mission;
  onComplete: () => void;
}

const LearnModule = React.memo(({ mission, onComplete }: LearnModuleProps) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewedAll, setViewedAll] = useState(false);
  const cards = mission.learn.cards;

  const handleNext = () => {
    setFlipped(false);
    if (index < cards.length - 1) {
      setIndex(i => i + 1);
    } else {
      setViewedAll(true);
    }
  };

  const handlePrev = () => {
    setFlipped(false);
    if (index > 0) {
      setIndex(i => i - 1);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-purple-600 dark:text-purple-400">
          <Icon name="BookOpen" size={24} />
        </div>
        <h3 className="text-2xl font-bold dark:text-white text-slate-900">{mission.learn.title}</h3>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md aspect-[4/3] perspective-1000">
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            onClick={() => setFlipped(!flipped)}
            className="relative w-full h-full cursor-pointer preserve-3d"
          >
            {/* Front */}
            <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2.5rem] border-4 border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-8 backface-hidden shadow-xl dark:shadow-2xl">
              <span className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Term</span>
              <h4 className="text-3xl sm:text-4xl font-black text-center leading-tight dark:text-white text-slate-900">{cards[index].front}</h4>
              <div className="absolute bottom-6 text-purple-600 dark:text-purple-400 text-sm font-bold uppercase tracking-widest animate-pulse">Click to Flip</div>
            </div>
            
            {/* Back */}
            <div className="absolute inset-0 bg-purple-600 rounded-[2.5rem] border-4 border-purple-500 flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180 shadow-2xl">
              <span className="text-purple-200 text-sm font-bold uppercase tracking-widest mb-4">Definition</span>
              <p className="text-xl sm:text-2xl font-bold text-center leading-relaxed text-white">
                {cards[index].back}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 w-full max-w-md flex justify-between items-center px-4">
          <button 
            onClick={handlePrev}
            disabled={index === 0}
            className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white disabled:opacity-0 transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold text-slate-400 dark:text-slate-500">
              {index + 1} / {cards.length}
            </div>
            <div className="w-32 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
              <motion.div 
                className="h-full bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${((index + 1) / cards.length) * 100}%` }}
              />
            </div>
          </div>

          {viewedAll && index === cards.length - 1 ? (
            <button 
              onClick={onComplete} 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-2xl transition-all flex items-center gap-2 shadow-lg shadow-green-900/20"
            >
              Finish <CheckCircle2 size={20} />
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default LearnModule;
