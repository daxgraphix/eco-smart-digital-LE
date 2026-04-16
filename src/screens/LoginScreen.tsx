import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { Icon } from '../components/Icon';

export default function LoginScreen({ onLogin }: { onLogin: (name: string) => void }) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length >= 2) {
      onLogin(name.trim());
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950"
    >
      <div className="w-full max-w-md p-6 sm:p-10 bg-white dark:bg-slate-900/50 backdrop-blur-2xl rounded-2xl sm:rounded-[3rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-500/10 dark:bg-green-500/5 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="p-4 sm:p-5 bg-green-100 dark:bg-green-500/10 rounded-[1.5rem] sm:rounded-[2rem] shadow-inner">
              <User size={36} className="sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-2 dark:text-white text-slate-900 tracking-tight">Recruit ID</h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-6 sm:mb-10 font-medium text-sm sm:text-base">Enter your name to initialize your profile.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name or Callsign"
                className="w-full p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white text-center text-xl sm:text-2xl font-bold focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                autoFocus
              />
            </div>
            
            <button
              type="submit"
              disabled={name.trim().length < 2}
              className="w-full bg-slate-900 dark:bg-green-600 hover:bg-slate-800 dark:hover:bg-green-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-black py-4 sm:py-5 rounded-2xl text-lg sm:text-xl transition-all shadow-xl shadow-green-500/10 flex items-center justify-center gap-3 group"
            >
              <span>CONTINUE</span>
              <Icon name="ChevronRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <p className="mt-6 sm:mt-8 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 px-4 text-center">
        Secure Encryption Active • Authorized Personnel Only
      </p>
    </motion.div>
  );
}
