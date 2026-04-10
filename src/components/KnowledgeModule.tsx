import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mission } from '../types';
import { Icon } from './Icon';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { renderRichText } from '../lib/markup';

interface KnowledgeModuleProps {
  mission: Mission;
  onComplete: () => void;
}

const KnowledgeModule = React.memo(({ mission, onComplete }: KnowledgeModuleProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = mission.knowledge.pages;

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(p => p + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-green-600 dark:text-green-400">
          <Icon name={mission.icon} size={24} />
        </div>
        <h3 className="text-2xl font-bold dark:text-white text-slate-900">{mission.knowledge.title}</h3>
      </div>

      <div className="flex-1 flex flex-col justify-center min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-xl sm:text-2xl leading-relaxed dark:text-slate-200 text-slate-700"
          >
            {renderRichText(pages[currentPage].text)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 space-y-6">
        <div className="flex justify-center gap-2">
          {pages.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all ${i === currentPage ? 'w-8 bg-green-500' : 'w-2 bg-slate-200 dark:bg-slate-800'}`} 
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={currentPage === 0}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-0 transition-all"
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <button
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all flex items-center gap-2"
          >
            {currentPage === pages.length - 1 ? 'Finish Briefing' : 'Next'}
            {currentPage !== pages.length - 1 && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
});

export default KnowledgeModule;
