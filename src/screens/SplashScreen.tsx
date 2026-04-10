import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: 'spring', damping: 15 }}
        className="mb-10 p-8 bg-green-100 dark:bg-green-500/10 rounded-[2.5rem] relative"
      >
        <Leaf size={80} className="text-green-600 dark:text-green-400" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-green-400/20 dark:bg-green-400/10 rounded-[2.5rem] blur-xl"
        />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-6xl sm:text-8xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
          ECO<span className="text-green-600 dark:text-green-400">SMART</span>
        </h1>
        <div className="h-1.5 w-24 bg-gradient-to-r from-green-600 to-cyan-600 dark:from-green-400 dark:to-cyan-400 mx-auto rounded-full mb-8" />
      </motion.div>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-xl text-slate-600 dark:text-slate-400 text-lg sm:text-2xl font-medium mb-12 leading-relaxed"
      >
        Master the art of <span className="text-slate-900 dark:text-white font-bold">digital sustainability</span>.<br />
        Protect the planet through smarter technology habits.
      </motion.p>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="group relative bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black py-5 px-14 rounded-2xl text-xl sm:text-2xl transition-all shadow-2xl shadow-green-500/20 flex items-center gap-3 overflow-hidden"
      >
        <span className="relative z-10">INITIALIZE TRAINING</span>
        <div className="relative z-10 p-1 bg-green-500 rounded-lg group-hover:rotate-12 transition-transform">
          <Leaf size={20} className="text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600"
      >
        Protocol v1.0.4 • Global Deployment
      </motion.div>
    </motion.div>
  );
}
