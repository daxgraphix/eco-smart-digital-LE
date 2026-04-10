import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../types';
import { HANDBOOK_DATA } from '../data/handbook';
import { Icon } from './Icon';
import { ChevronDown, ChevronUp, Search, Hash } from 'lucide-react';
import { renderRichText } from '../lib/markup';

const Handbook = React.memo(({ userProfile }: { userProfile: UserProfile }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const animationsEnabled = userProfile.settings.animations !== false;
  const transition = { duration: animationsEnabled ? 0.3 : 0 };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handbookEntries = useMemo(() => Object.entries(HANDBOOK_DATA), []);

  const filteredEntries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return handbookEntries.filter(([, entry]) => {
      if (!query) return true;
      return (
        entry.title.toLowerCase().includes(query) ||
        entry.content.some(item => item.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, handbookEntries]);

  const scrollToEntry = (id: string) => {
    setExpandedId(id);
    setTimeout(() => {
      scrollRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="max-w-4xl mx-auto px-4 pb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 dark:text-white text-slate-900">Eco-Warrior Field Guide</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg">Master the concepts to save the digital world.</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-12">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search entries or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900/40 border-2 border-slate-200 dark:border-slate-800 rounded-3xl focus:border-green-500 outline-none transition-all text-lg shadow-sm dark:shadow-none"
        />
      </div>

      {/* Quick Links / Anchor Navigation */}
      {filteredEntries.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {filteredEntries.map(([id, entry]) => (
            <button
              key={`link-${id}`}
              onClick={() => scrollToEntry(id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 transition-all text-sm font-medium border border-slate-200 dark:border-slate-700"
            >
              <Hash size={14} />
              {entry.title}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-6">
        {filteredEntries.length === 0 ? (
          <div className="text-center py-20 bg-slate-100 dark:bg-slate-900/20 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 text-xl">No entries found matching your search.</p>
          </div>
        ) : (
          filteredEntries.map(([id, entry], index) => {
            const isExpanded = expandedId === id;

            return (
              <motion.div
                key={id}
                ref={el => scrollRefs.current[id] = el}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: animationsEnabled ? index * 0.05 : 0 }}
                className="rounded-[2.5rem] border-2 transition-all overflow-hidden bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
              >
                <div className="flex flex-col">
                  <button 
                    onClick={() => toggleExpand(id)}
                    className="w-full p-8 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl ${entry.color}`}>
                        <Icon name={entry.icon} size={32} />
                      </div>
                      <h3 className={`text-2xl sm:text-3xl font-bold ${entry.color}`}>{entry.title}</h3>
                    </div>
                    <div className="text-slate-400 dark:text-slate-500">
                      {isExpanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={transition}
                      >
                        <div className="px-8 pb-8 pt-2 grid gap-4">
                          {entry.content.map((item, i) => {
                            const isTip = item.includes('Actionable Tip') || item.includes('Pro Tip');
                            return (
                              <div 
                                key={i} 
                                className={`flex gap-4 items-start p-5 rounded-2xl ${
                                  isTip 
                                    ? 'bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20' 
                                    : 'bg-slate-50 dark:bg-slate-800/50'
                                }`}
                              >
                                <div className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${isTip ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {renderRichText(item)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
});

export default Handbook;
