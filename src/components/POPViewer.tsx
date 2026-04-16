import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, BookOpen, AlertCircle, CheckCircle2, Search } from 'lucide-react';
import { POP } from '../types';
import { POPS } from '../data';

export default function POPViewer({ onClose }: { onClose: () => void }) {
  const [selectedPOP, setSelectedPOP] = useState<POP | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPOPS = POPS.filter(pop => 
    pop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pop.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="p-2 bg-accent/10 rounded-xl text-accent">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-text-primary">Biblioteca de POPs</h2>
        </div>
        <button onClick={onClose} className="p-2 bg-surface rounded-full text-text-secondary border border-border">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {!selectedPOP ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-6 space-y-6"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input 
                  type="text"
                  placeholder="Buscar procedimento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-surface border border-border rounded-2xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/50 focus:border-accent outline-none transition-all"
                />
              </div>

              <div className="space-y-3">
                {filteredPOPS.map((pop) => (
                  <button
                    key={pop.id}
                    onClick={() => setSelectedPOP(pop)}
                    className="w-full p-5 bg-surface border border-border rounded-[24px] flex items-center justify-between group hover:border-accent hover:bg-surface-hover transition-all text-left"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{pop.category}</span>
                      <h3 className="text-lg font-bold text-text-primary">{pop.title}</h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6 space-y-8"
            >
              <button 
                onClick={() => setSelectedPOP(null)}
                className="flex items-center gap-2 text-text-secondary hover:text-accent font-bold text-sm transition-colors"
              >
                <X className="w-4 h-4 rotate-45" /> {/* Primitive Back arrow style */}
                Voltar para lista
              </button>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{selectedPOP.category}</span>
                  <h1 className="text-3xl font-black text-text-primary leading-tight">{selectedPOP.title}</h1>
                </div>
                
                <div className="p-5 bg-surface/50 border border-border rounded-3xl">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <span className="font-bold text-text-primary mr-1">Objetivo:</span>
                    {selectedPOP.objective}
                  </p>
                </div>
              </div>

              {/* Materials */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-text-primary uppercase tracking-widest ml-1">Materiais Necessários</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedPOP.materials.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-surface border border-border rounded-2xl">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm text-text-secondary font-medium">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-text-primary uppercase tracking-widest ml-1">Execução e Fundamentação</h3>
                <div className="space-y-6">
                  {selectedPOP.steps.map((step, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-border/50 space-y-3">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
                        <span className="text-[10px] font-black text-accent">{idx + 1}</span>
                      </div>
                      <p className="text-text-primary font-bold leading-snug">{step.text}</p>
                      {step.rationale && (
                        <div className="p-3 bg-accent/5 rounded-xl border-l-4 border-accent">
                          <p className="text-xs italic text-text-secondary">
                            <span className="font-bold text-accent not-italic">Por que? </span>
                            {step.rationale}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Precautions */}
              <div className="p-6 bg-warning/10 border border-warning/20 rounded-[32px] space-y-3">
                <div className="flex items-center gap-2 text-warning">
                  <AlertCircle className="w-5 h-5" />
                  <h4 className="font-black text-xs uppercase tracking-widest">Cuidados Importantes</h4>
                </div>
                <ul className="space-y-2">
                  {selectedPOP.precautions.map((p, idx) => (
                    <li key={idx} className="text-sm text-text-secondary leading-snug flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
