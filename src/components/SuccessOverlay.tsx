import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, ArrowUp, Zap } from 'lucide-react';

interface SuccessOverlayProps {
  show: boolean;
  type: 'level' | 'badge' | 'lesson';
  title: string;
  subtitle: string;
  onClose: () => void;
}

export function SuccessOverlay({ show, type, title, subtitle, onClose }: SuccessOverlayProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full -z-10" />

            {/* Icon Decoration */}
            <div className="mb-6 relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center -z-10"
              >
                <div className="w-24 h-24 border border-zinc-700/50 rounded-full border-dashed" />
              </motion.div>
              
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                {type === 'level' && <Zap className="w-10 h-10 text-white fill-current" />}
                {type === 'badge' && <Trophy className="w-10 h-10 text-white fill-current" />}
                {type === 'lesson' && <Star className="w-10 h-10 text-white fill-current" />}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
              {title}
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                {type === 'level' ? 'Continuar Evoluindo' : 'Excelente!'}
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>

            {/* Micro-animations: Floating Particles */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-10 right-10"
            >
                <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
