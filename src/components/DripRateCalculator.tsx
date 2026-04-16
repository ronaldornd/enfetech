
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator as CalcIcon } from 'lucide-react';

export default function DripRateCalculator({ onClose }: { onClose: () => void }) {
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState<'macro' | 'micro'>('macro');

  const result = (() => {
    const v = parseFloat(volume);
    const t = parseFloat(time);
    if (!v || !t) return null;
    
    if (type === 'macro') {
      return Math.round(v / (t * 3));
    } else {
      return Math.round(v / t);
    }
  })();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-4"
    >
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="bg-surface w-full max-w-md rounded-t-[40px] p-8 pb-12 shadow-2xl space-y-6 border-t border-border"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-xl text-accent">
              <CalcIcon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-text-primary">Cálculo de Gotejamento</h2>
          </div>
          <button onClick={onClose} className="p-2 bg-bg rounded-full text-text-secondary hover:text-text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 p-1 bg-bg rounded-2xl border border-border">
            <button 
              onClick={() => setType('macro')}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${type === 'macro' ? 'bg-accent text-white shadow-sm' : 'text-text-secondary'}`}
            >
              Macrogotas
            </button>
            <button 
              onClick={() => setType('micro')}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${type === 'micro' ? 'bg-accent text-white shadow-sm' : 'text-text-secondary'}`}
            >
              Microgotas
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Volume (ml)</label>
            <input 
              type="number" 
              placeholder="Ex: 500" 
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full bg-bg border-2 border-border focus:border-accent focus:bg-surface p-4 rounded-2xl outline-none font-bold text-lg transition-all text-text-primary placeholder:text-text-secondary/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-1">Tempo (Horas)</label>
            <input 
              type="number" 
              placeholder="Ex: 8" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-bg border-2 border-border focus:border-accent focus:bg-surface p-4 rounded-2xl outline-none font-bold text-lg transition-all text-text-primary placeholder:text-text-secondary/30"
            />
          </div>
        </div>

        {result !== null && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 bg-accent text-white rounded-3xl text-center space-y-1 shadow-xl relative overflow-hidden"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Resultado</p>
            <p className="text-4xl font-black">{result}</p>
            <p className="text-xs font-medium text-white/50">{type === 'macro' ? 'gotas / minuto' : 'microgotas / minuto'}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
