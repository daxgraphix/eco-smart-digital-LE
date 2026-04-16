import { motion } from 'motion/react';
import { UserProfile } from '../types';
import { Trophy, Download, RotateCcw, CheckCircle2 } from 'lucide-react';

export default function CertificateScreen({ userProfile, onRestart }: { userProfile: UserProfile, onRestart: () => void }) {
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center p-3 sm:p-8 overflow-y-auto bg-slate-50 dark:bg-slate-950"
    >
      <div className="w-full max-w-4xl text-center py-6 sm:py-12">
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 20 }}
          className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 sm:p-8 lg:p-20 rounded-2xl sm:rounded-[3rem] shadow-2xl border-4 sm:border-[16px] border-green-500/20 dark:border-green-500/10 relative overflow-hidden"
        >
          {/* Certificate Border */}
          <div className="absolute inset-2 sm:inset-4 border border-2 sm:border-2 border-green-500/30 dark:border-green-500/20 rounded-xl sm:rounded-[2rem] pointer-events-none" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-48 sm:h-48 bg-green-500/5 rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-48 sm:h-48 bg-cyan-500/5 rounded-tl-full" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-4 sm:mb-10">
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="p-4 sm:p-8 bg-green-100 dark:bg-green-500/10 rounded-full shadow-inner"
              >
                <Trophy size={40} className="sm:w-20 sm:h-20 text-green-600 dark:text-green-400" />
              </motion.div>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-3 sm:mb-6 uppercase tracking-tighter leading-none">
              Certificate of <span className="text-green-600 dark:text-green-400">Mastery</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-slate-500 dark:text-slate-400 mb-8 sm:mb-16 font-medium">This prestigious award is presented to the digital pioneer</p>
            
            <div className="flex flex-col items-center gap-4 sm:gap-8 mb-8 sm:mb-16">
              <div 
                className="w-20 h-20 sm:w-32 sm:h-32 p-2 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[2.5rem] border-2 sm:border-4 border-green-500/20 shadow-xl"
                style={{ color: userProfile.avatar.color }}
                dangerouslySetInnerHTML={{ __html: userProfile.avatar.svg.replace('width="100"', 'width="100%"').replace('height="100"', 'height="100%"') }}
              />
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
                {userProfile.username}
              </h2>
              <div className="h-0.5 sm:h-1 w-24 sm:w-48 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            </div>
            
            <p className="text-sm sm:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-16 max-w-xl mx-auto leading-relaxed">
              For demonstrating exceptional dedication and skill in the <br />
              <span className="font-black text-slate-900 dark:text-white">ECO SMART DIGITAL PROTOCOL</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 pt-6 sm:pt-12 border-t border-slate-100 dark:border-slate-800">
              <div className="text-center sm:text-left">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black mb-1 sm:mb-2 text-slate-400 dark:text-slate-500">Date Issued</p>
                <p className="text-base sm:text-xl font-black dark:text-white text-slate-900">{date}</p>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4 bg-green-500/10 dark:bg-green-500/5 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-green-500/20">
                <div className="p-1.5 sm:p-2 bg-green-500 rounded-lg">
                  <CheckCircle2 size={16} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-green-600 dark:text-green-400">Status</p>
                  <p className="text-xs sm:text-sm font-black dark:text-white text-slate-900 uppercase">Verified Eco-Warrior</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-16 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6"
        >
          <button 
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 sm:gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black py-3 sm:py-5 px-6 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-xl transition-all shadow-2xl shadow-green-500/20 hover:scale-105 active:scale-95"
          >
            <Download size={20} className="sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">EXPORT CERTIFICATE</span>
            <span className="sm:hidden">EXPORT</span>
          </button>
          
          <button 
            onClick={onRestart}
            className="flex items-center justify-center gap-2 sm:gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 font-black py-3 sm:py-5 px-6 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 active:scale-95"
          >
            <RotateCcw size={20} className="sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">RESTART JOURNEY</span>
            <span className="sm:hidden">RESTART</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
