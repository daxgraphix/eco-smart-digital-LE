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
      className="fixed inset-0 flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto bg-slate-50 dark:bg-slate-950"
    >
      <div className="w-full max-w-4xl p-8 sm:p-12 bg-white dark:bg-slate-900/50 backdrop-blur-2xl rounded-[3.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full -ml-32 -mt-32 blur-3xl" />
        
        <div className="relative z-10">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors mb-10 font-bold uppercase tracking-widest text-xs">
            <ChevronLeft size={16} /> Back to Login
          </button>
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 dark:text-white text-slate-900 tracking-tight">Design Your <span className="text-green-600 dark:text-green-400">Eco-Bot</span></h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Customize your digital companion for the journey ahead.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-black">1</div>
                <h3 className="text-xl font-black dark:text-white text-slate-900 uppercase tracking-tight">Choose a Chassis</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {AVATARS.map(avatar => (
                  <button
                    key={avatar.id}
                    onClick={() => setSelectedId(avatar.id)}
                    className={`p-6 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border-4 transition-all duration-300 ${selectedId === avatar.id ? 'border-green-500 scale-105 shadow-2xl shadow-green-500/20' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                    style={{ color: selectedId === avatar.id ? selectedColor : '#94a3b8' }}
                    dangerouslySetInnerHTML={{ __html: avatar.svg }}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-black">2</div>
                <h3 className="text-xl font-black dark:text-white text-slate-900 uppercase tracking-tight">Choose a Color</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {AVATAR_COLORS.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`aspect-square rounded-2xl border-4 transition-all duration-300 ${selectedColor === color ? 'border-slate-900 dark:border-white scale-110 shadow-xl' : 'border-transparent hover:scale-105'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              <div className="pt-12">
                <button
                  onClick={handleConfirm}
                  className="w-full bg-slate-900 dark:bg-green-600 hover:bg-slate-800 dark:hover:bg-green-700 text-white font-black py-6 rounded-3xl text-2xl transition-all shadow-2xl shadow-green-500/20 flex items-center justify-center gap-4 group"
                >
                  <span>ASSEMBLE BOT</span>
                  <div className="p-1 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform">
                    <Icon name="Zap" size={20} />
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
