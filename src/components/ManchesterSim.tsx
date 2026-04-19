import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Shield, Zap, Timer, AlertCircle, ArrowRight, Trophy } from 'lucide-react';
import { MANCHESTER_CASES, ManchesterCase } from '../data/manchester';
import { haptics } from '../utils/haptics';

interface ManchesterSimProps {
  onClose: () => void;
  onComplete: (xp: number) => void;
  playSound: (type: any) => void;
  triggerHaptic: (type: any) => void;
}

const COLORS = [
  { id: 'red', label: 'Emergência', color: '#ef4444', text: 'white' },
  { id: 'orange', label: 'Muito Urgente', color: '#f97316', text: 'white' },
  { id: 'yellow', label: 'Urgente', color: '#eab308', text: 'black' },
  { id: 'green', label: 'Pouco Urgente', color: '#22c55e', text: 'white' },
  { id: 'blue', label: 'Não Urgente', color: '#3b82f6', text: 'white' }
];

export default function ManchesterSim({ onClose, onComplete, playSound, triggerHaptic }: ManchesterSimProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [showFeedback, setShowFeedback] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [cases, setCases] = useState<ManchesterCase[]>([]);

  // Shuffle cases on start
  useEffect(() => {
    const shuffled = [...MANCHESTER_CASES].sort(() => Math.random() - 0.5);
    setCases(shuffled);
  }, []);

  const currentCase = cases[currentIdx];

  // Timer logic
  useEffect(() => {
    if (gameOver || showFeedback !== null || !currentCase) return;

    if (timeLeft <= 0) {
      handleAnswer('none' as any);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver, showFeedback, currentIdx]);

  const handleAnswer = (colorId: string) => {
    const isCorrect = colorId === currentCase.correctColor;
    setShowFeedback(isCorrect);

    if (isCorrect) {
      triggerHaptic('success');
      playSound('SUCCESS');
      const baseXP = 50;
      const comboBonus = combo * 10;
      setScore(prev => prev + baseXP + comboBonus);
      setCombo(prev => prev + 1);
    } else {
      triggerHaptic('error');
      playSound('ERROR');
      setLives(prev => prev - 1);
      setCombo(0);
      if (lives <= 1) {
        setTimeout(() => setGameOver(true), 1500);
      }
    }

    // Auto next after feedback
    setTimeout(() => {
      if (currentIdx + 1 >= cases.length) {
        setGameOver(true);
      } else {
        setShowFeedback(null);
        setCurrentIdx(prev => prev + 1);
        setTimeLeft(20);
      }
    }, 2000);
  };

  if (!currentCase && !gameOver) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bg flex flex-col font-sans"
    >
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-bg to-transparent z-10">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart 
                key={i} 
                className={`w-5 h-5 ${i < lives ? 'text-red-500 fill-red-500' : 'text-border fill-border'}`} 
              />
            ))}
          </div>
          <div className="bg-surface/80 backdrop-blur border border-border px-3 py-1 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-black text-text-primary">Combo x{combo}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${timeLeft < 5 ? 'border-red-500 bg-red-500/10 text-red-500' : 'border-border bg-surface/80 text-text-primary'}`}>
            <Timer className="w-4 h-4" />
            <span className="text-sm font-mono font-bold">{timeLeft}s</span>
          </div>
          <button onClick={onClose} className="p-2 bg-surface rounded-full border border-border">
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!gameOver ? (
          <motion.div 
            key={currentCase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col px-6 pt-24 pb-48 overflow-y-auto"
          >
            <div className="max-w-md mx-auto w-full space-y-8">
              {/* Question Area */}
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Caso Clínico {currentIdx + 1} / {cases.length}</span>
                <div className="bg-surface border border-border p-6 rounded-[32px] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <AlertCircle className="w-20 h-20" />
                  </div>
                  <h2 className="text-lg font-bold text-text-primary mb-2">{currentCase.patient}</h2>
                  <p className="text-text-secondary leading-relaxed">{currentCase.complaint}</p>
                </div>
              </div>

              {/* Vitals Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(currentCase.vitals).map(([key, val]) => (
                  <div key={key} className="bg-surface/50 border border-border/50 p-3 rounded-2xl flex items-center gap-3">
                    <div className="text-[10px] font-black uppercase text-accent/60 w-8">{key}</div>
                    <div className="font-mono font-bold text-text-primary">{val}</div>
                  </div>
                ))}
              </div>

              {/* Action Area */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <p className="text-center text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Selecione a Classificação</p>
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => showFeedback === null && handleAnswer(c.id)}
                    disabled={showFeedback !== null}
                    style={{ backgroundColor: c.color, color: c.text }}
                    className={`group relative py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-sm flex justify-between items-center transition-all active:scale-95 ${showFeedback !== null ? 'opacity-50' : 'hover:scale-[1.02] shadow-lg shadow-black/10'}`}
                  >
                    <span>{c.label}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    
                    {showFeedback !== null && currentCase.correctColor === c.id && (
                      <div className="absolute inset-0 border-4 border-white rounded-2xl animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Trophy className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl font-black text-text-primary mb-2">Simulação Finalizada!</h2>
            <p className="text-text-secondary mb-8">Sua triagem foi baseada no Protocolo de Manchester.</p>
            
            <div className="bg-surface border border-border p-8 rounded-[40px] w-full max-w-xs space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase text-text-secondary tracking-[0.2em] mb-1">XP Ganho</p>
                <p className="text-5xl font-black text-accent">+{score}</p>
              </div>
              <div className="flex justify-between border-t border-border pt-6">
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase text-text-secondary">Casos</p>
                  <p className="font-bold text-text-primary">{currentIdx + 1}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-text-secondary">Maior Combo</p>
                  <p className="font-bold text-text-primary">x{combo}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onComplete(score)}
              className="mt-12 w-full max-w-xs py-5 bg-accent text-white rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-accent/20 active:scale-95 transition-all"
            >
              Coletar Recompensa
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Overlay */}
      <AnimatePresence>
        {showFeedback !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className={`fixed bottom-0 left-0 right-0 p-8 pt-12 pb-12 z-[110] rounded-t-[48px] border-t border-border shadow-2xl ${showFeedback ? 'bg-success/95' : 'bg-red-500/95'}`}
          >
            <div className="max-w-md mx-auto text-center text-white">
              <div className="flex justify-center mb-4">
                {showFeedback ? <Shield className="w-12 h-12" /> : <X className="w-12 h-12" />}
              </div>
              <h3 className="text-2xl font-black mb-2">{showFeedback ? 'Classificação Correta!' : 'Falha na Triagem!'}</h3>
              <p className="text-white/80 leading-relaxed font-medium">{currentCase.feedback}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
