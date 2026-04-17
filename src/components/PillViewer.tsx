import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Zap, BookOpen, ChevronRight, Share2 } from 'lucide-react';
import { Pill } from '../types';
import { PILLS } from '../data/index';

export default function PillViewer({ onClose, onPillRead }: { onClose: () => void, onPillRead?: (pill: Pill) => void }) {
  const [selectedPill, setSelectedPill] = useState<Pill | null>(null);

  const handleFinish = () => {
    if (selectedPill && onPillRead) {
      onPillRead(selectedPill);
    }
    setSelectedPill(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-bg flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-warning/10 text-warning">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-text-primary">Pílulas de Conhecimento</h2>
        </div>
        <button onClick={onClose} className="p-2 bg-surface rounded-full text-text-secondary border border-border">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {!selectedPill ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 grid gap-4"
            >
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-3xl mb-2">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Dica do Dia</p>
                <p className="text-sm text-text-primary font-medium">Revisar cálculos de diluição reduz erros de medicação em até 40%.</p>
              </div>

              {PILLS.map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedPill(pill)}
                  className="w-full p-5 bg-surface border border-border rounded-[32px] flex items-center justify-between group hover:border-accent hover:bg-surface-hover transition-all text-left"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-bg rounded-2xl flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{pill.category}</span>
                         <span className="text-[10px] text-text-secondary">•</span>
                         <div className="flex items-center gap-1 text-[10px] text-text-secondary">
                           <Clock className="w-3 h-3" />
                           {pill.duration} min
                         </div>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary leading-tight">{pill.title}</h3>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-6 space-y-8 min-h-full flex flex-col"
            >
               <div className="space-y-6 flex-1">
                  <div className="flex justify-between items-start">
                    <button 
                      onClick={() => setSelectedPill(null)}
                      className="p-2 bg-surface border border-border rounded-xl text-text-secondary"
                    >
                      Voltar
                    </button>
                    <button className="p-2 bg-surface border border-border rounded-xl text-text-secondary">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{selectedPill.category}</span>
                    <h1 className="text-3xl font-black text-text-primary leading-tight">{selectedPill.title}</h1>
                    <div className="flex items-center gap-2 text-text-secondary text-xs">
                      <Clock className="w-4 h-4" />
                      Leitura de {selectedPill.duration} minutos
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <div className="p-6 bg-surface border border-border rounded-[32px] text-text-primary leading-relaxed text-lg">
                      {selectedPill.content}
                    </div>
                  </div>
               </div>

               <div className="mt-8">
                  <button 
                    onClick={handleFinish}
                    className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 active:scale-95 transition-all"
                  >
                    Marcar como Lida
                  </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
