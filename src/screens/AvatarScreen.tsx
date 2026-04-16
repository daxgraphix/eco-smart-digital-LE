import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Icon } from '../components/Icon';
import { AVATARS, AVATAR_COLORS } from '../data/avatars';
import type { AvatarDefinition } from '../types';

export default function AvatarScreen({ onConfirm, onBack }: { onConfirm: (avatar: AvatarDefinition, color: string) => void; onBack: () => void }) {
  const [selectedId, setSelectedId] = useState(AVATARS[0].id);
  const [selectedColor, setSelectedColor] = useState(AVATAR_COLORS[0]);

  const handleConfirm = () => {
    const avatar = AVATARS.find(a => a.id === selectedId);
    if (avatar) {
      onConfirm(avatar, selectedColor);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 flex flex-col items-center justify-center p-2 sm:p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950"
    >
      <div className="w-full max-w-4xl p-3 sm:p-6 lg:p-10 bg-white dark:bg-slate-900/50 backdrop-blur-2xl rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-20 sm:w-40 h-20 sm:h-40 bg-green-500/5 rounded-full -ml-10 sm:-ml-20 -mt-10 sm:-mt-20 blur-2xl" />
        
        <div className="relative z-10">
          <button onClick={onBack} className="flex items-center gap-1 sm:gap-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors mb-3 sm:mb-8 font-bold uppercase tracking-widest text-[8px] sm:text-xs">
            <ChevronLeft size={12} className="sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Back to Login</span>
          </button>
          
          <div className="text-center mb-4 sm:mb-10">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-3 dark:text-white text-slate-900 tracking-tight">Design Your <span className="text-green-600 dark:text-green-400">Eco-Bot</span></h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Customize your digital companion.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-3 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-5 sm:w-8 h-5 sm:h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-black text-[10px] sm:text-sm">1</div>
                <h3 className="text-xs sm:text-xl font-black dark:text-white text-slate-900 uppercase tracking-tight">Choose a Chassis</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {AVATARS.map(avatar => (
                  <button
                    key={avatar.id}
                    onClick={() => setSelectedId(avatar.id)}
                    className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 sm:border-4 transition-all duration-300 ${selectedId === avatar.id ? 'border-green-500 scale-105 shadow-lg shadow-green-500/20' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                    style={{ color: selectedId === avatar.id ? selectedColor : '#94a3b8' }}
                    dangerouslySetInnerHTML={{ __html: avatar.svg }}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-5 sm:w-8 h-5 sm:h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-black text-[10px] sm:text-sm">2</div>
                <h3 className="text-xs sm:text-xl font-black dark:text-white text-slate-900 uppercase tracking-tight">Choose a Color</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {AVATAR_COLORS.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`aspect-square rounded-lg sm:rounded-xl border-2 sm:border-4 transition-all duration-300 ${selectedColor === color ? 'border-slate-900 dark:border-white scale-110 shadow-xl' : 'border-transparent hover:scale-105'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              <div className="pt-4 sm:pt-10">
                <button
                  onClick={handleConfirm}
                  className="w-full bg-slate-900 dark:bg-green-600 hover:bg-slate-800 dark:hover:bg-green-700 text-white font-black py-3 sm:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-xl transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2 sm:gap-3 group"
                >
                  <span>ASSEMBLE</span>
                  <div className="p-0.5 bg-white/20 rounded-md group-hover:rotate-12 transition-transform">
                    <Icon name="Zap" size={12} className="sm:w-5 sm:h-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
