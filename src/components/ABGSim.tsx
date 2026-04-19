import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Beaker, Shield, Activity, Timer, Zap, X, AlertCircle } from 'lucide-react';

type ABGDiagnosis = 'normal' | 'acidose_metabolica' | 'acidose_respiratoria' | 'alcalose_metabolica' | 'alcalose_respiratoria';
type ABGCompensation = 'descompensada' | 'parcialmente' | 'compensada';

interface ABGCase {
  pH: number;
  pCO2: number;
  HCO3: number;
  primaryDiag: ABGDiagnosis;
  comp: ABGCompensation;
}

const generateCase = (): ABGCase => {
  const types: ABGDiagnosis[] = ['acidose_metabolica', 'acidose_respiratoria', 'alcalose_metabolica', 'alcalose_respiratoria'];
  const type = types[Math.floor(Math.random() * types.length)];
  const isCompensated = Math.random() > 0.6;
  const isPartial = Math.random() > 0.5 && !isCompensated;

  let pH = 7.40, pCO2 = 40, HCO3 = 24;

  if (type === 'acidose_metabolica') {
    HCO3 = 10 + Math.random() * 8; // 10 to 18
    if (isCompensated) {
      pH = 7.36 + Math.random() * 0.04; // 7.36 to 7.40
      pCO2 = 20 + Math.random() * 10; // Low
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'compensada' };
    } else if (isPartial) {
      pH = 7.20 + Math.random() * 0.14; // 7.20 to 7.34
      pCO2 = 25 + Math.random() * 8; // Low but not enough
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'parcialmente' };
    } else {
      pH = 7.15 + Math.random() * 0.15; // 7.15 to 7.30
      pCO2 = 38 + Math.random() * 5; // Normal
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'descompensada' };
    }
  }

  if (type === 'alcalose_metabolica') {
    HCO3 = 28 + Math.random() * 10; // 28 to 38
    if (isCompensated) {
      pH = 7.40 + Math.random() * 0.04; // 7.40 to 7.44
      pCO2 = 48 + Math.random() * 10; // High
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'compensada' };
    } else if (isPartial) {
      pH = 7.46 + Math.random() * 0.08; // 7.46 to 7.54
      pCO2 = 46 + Math.random() * 5; // High but not enough
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'parcialmente' };
    } else {
      pH = 7.48 + Math.random() * 0.10; // 7.48 to 7.58
      pCO2 = 38 + Math.random() * 5; // Normal
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'descompensada' };
    }
  }

  if (type === 'acidose_respiratoria') {
    pCO2 = 50 + Math.random() * 15; // 50 to 65
    if (isCompensated) {
      pH = 7.36 + Math.random() * 0.04;
      HCO3 = 30 + Math.random() * 8; // High
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'compensada' };
    } else if (isPartial) {
      pH = 7.25 + Math.random() * 0.09;
      HCO3 = 28 + Math.random() * 4; // High but not enough
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'parcialmente' };
    } else {
      pH = 7.20 + Math.random() * 0.14;
      HCO3 = 22 + Math.random() * 4; // Normal
      return { pH, pCO2, HCO3, primaryDiag: type, comp: 'descompensada' };
    }
  }

  // alcalose respiratoria
  pCO2 = 20 + Math.random() * 10; // 20 to 30
  if (isCompensated) {
    pH = 7.40 + Math.random() * 0.04;
    HCO3 = 15 + Math.random() * 5; // Low
    return { pH, pCO2, HCO3, primaryDiag: type, comp: 'compensada' };
  } else if (isPartial) {
    pH = 7.46 + Math.random() * 0.08;
    HCO3 = 18 + Math.random() * 3; // Low but not enough
    return { pH, pCO2, HCO3, primaryDiag: type, comp: 'parcialmente' };
  } else {
    pH = 7.48 + Math.random() * 0.10;
    HCO3 = 22 + Math.random() * 4; // Normal
    return { pH, pCO2, HCO3, primaryDiag: type, comp: 'descompensada' };
  }
};

export default function ABGSim({ onClose, onComplete, playSound, triggerHaptic }: { onClose: () => void, onComplete: (xp: number) => void, playSound: (type: any) => void, triggerHaptic: (type: any) => void }) {
  const [currentCase, setCurrentCase] = useState<ABGCase | null>(null);
  const [timer, setTimer] = useState(30);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean, text: string } | null>(null);

  useEffect(() => {
    setCurrentCase(generateCase());
  }, []);

  useEffect(() => {
    if (lives <= 0 || !currentCase || feedback) return;

    const interval = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          handleFailure("Tempo Esgotado! O paciente piorou.");
          return 30;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [lives, currentCase, feedback]);

  const handleFailure = (msg: string) => {
    setLives(l => l - 1);
    setCombo(1);
    playSound('WRONG');
    triggerHaptic('error');
    setFeedback({ isCorrect: false, text: msg });
  };

  const handleGuess = (diag: ABGDiagnosis) => {
    if (!currentCase || feedback) return;

    if (diag === currentCase.primaryDiag) {
      const earnedXP = 10 * combo;
      setScore(s => s + earnedXP);
      setCombo(c => Math.min(c + 1, 5));
      playSound('CORRECT');
      triggerHaptic('success');
      setFeedback({ isCorrect: true, text: `Correto! +${earnedXP} XP. Distúrbio ${currentCase.comp.toUpperCase()}.` });
    } else {
      handleFailure(`Diagnóstico laboratorial letal! Interpretação trocada causou iatrogenia aguda. Revise a "Pílula de Gasometria" antes de assumir novos plantões.`);
    }
  };

  const formatDiag = (d: string) => {
    return d.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const handleNext = () => {
    if (lives <= 0) {
      onComplete(score);
      return;
    }
    setFeedback(null);
    setCurrentCase(generateCase());
    setTimer(30);
  };

  if (!currentCase) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-bg flex flex-col">
      <div className="p-6 pb-2 flex justify-between items-center bg-surface border-b border-border shadow-sm">
         <div>
            <span className="text-[10px] font-black uppercase text-accent tracking-widest">Lab Simulator</span>
            <h2 className="text-xl font-bold text-text-primary">Gasometria Arterial</h2>
         </div>
         <button onClick={() => onComplete(score)} className="p-2 bg-bg rounded-full text-text-secondary">
           <X className="w-5 h-5" />
         </button>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
         {/* HUD */}
         <div className="flex justify-between items-end">
            <div className="flex items-center gap-1">
               {[...Array(3)].map((_, i) => (
                  <Activity key={i} className={`w-6 h-6 ${i < lives ? 'text-red-500' : 'text-border opacity-30'} transition-colors`} />
               ))}
            </div>
            <div className="text-right">
               <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">XP Ganho</div>
               <div className="text-3xl font-black text-accent">{score}</div>
               {combo > 1 && <div className="text-[10px] font-black text-warning">COMBO x{combo}</div>}
            </div>
         </div>

         {/* Laudo Visual */}
         <motion.div 
           key={currentCase.pH}
           initial={{ scale: 0.95, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-surface rounded-3xl p-6 shadow-2xl relative overflow-hidden"
         >
            <div className="absolute top-0 left-0 right-0 h-1 bg-border overflow-hidden">
               <motion.div 
                 initial={{ width: '100%' }}
                 animate={{ width: `${(timer / 30) * 100}%` }}
                 transition={{ ease: 'linear' }}
                 className={`h-full ${timer > 10 ? 'bg-accent' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'}`}
               />
            </div>

            <div className="flex items-center gap-3 mb-6 mix-blend-luminosity opacity-50">
               <Beaker className="w-6 h-6" />
               <span className="text-sm font-black uppercase tracking-widest border-b border-dashed border-current pb-1 flex-1">LAUDO LABORATORIAL (UTI)</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
               <div className="bg-bg p-3 rounded-2xl flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold text-text-secondary">pH</span>
                  <span className="text-2xl font-black text-text-primary">{currentCase.pH.toFixed(2)}</span>
               </div>
               <div className="bg-bg p-3 rounded-2xl flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold text-text-secondary">pCO2</span>
                  <span className="text-2xl font-black text-text-primary">{currentCase.pCO2.toFixed(1)}</span>
               </div>
               <div className="bg-bg p-3 rounded-2xl flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold text-text-secondary">HCO3</span>
                  <span className="text-2xl font-black text-text-primary">{currentCase.HCO3.toFixed(1)}</span>
               </div>
            </div>
         </motion.div>

         {/* Controles / Feedback */}
         <div className="flex-1 flex flex-col justify-end pb-8">
            <AnimatePresence mode="wait">
               {feedback ? (
                  <motion.div 
                    key="feedback"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-6 rounded-3xl shadow-xl flex flex-col items-center text-center gap-4 ${feedback.isCorrect ? 'bg-success/10 border border-success/30' : 'bg-red-500/10 border border-red-500/30'}`}
                  >
                     {feedback.isCorrect ? <Zap className="w-12 h-12 text-success" /> : <AlertCircle className="w-12 h-12 text-red-500" />}
                     <p className={`font-bold ${feedback.isCorrect ? 'text-success' : 'text-red-500'}`}>{feedback.text}</p>
                     
                     <button 
                       onClick={handleNext}
                       className={`w-full py-4 rounded-2xl font-bold text-white shadow-xl max-w-xs ${lives <= 0 ? 'bg-text-secondary' : 'bg-accent'}`}
                     >
                       {lives <= 0 ? 'Finalizar e Ver XP' : 'Próximo Caso'}
                     </button>
                  </motion.div>
               ) : (
                  <motion.div 
                    key="controls"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 gap-3"
                  >
                     {(['acidose_metabolica', 'acidose_respiratoria', 'alcalose_metabolica', 'alcalose_respiratoria'] as ABGDiagnosis[]).map((d) => (
                        <button
                          key={d}
                          onClick={() => handleGuess(d)}
                          className="bg-surface border border-border p-4 rounded-2xl text-left font-bold text-sm text-text-primary hover:border-accent active:scale-95 transition-all outline-none"
                        >
                           {formatDiag(d)}
                        </button>
                     ))}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
}
