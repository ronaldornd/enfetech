import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartPulse, Activity, Zap, X, AlertCircle } from 'lucide-react';

type ECGRhythm = 'sinusal' | 'fibrilacao_ventricular' | 'taquicardia_ventricular' | 'assistolia' | 'fibrilacao_atrial';

interface ECGCase {
  rhythm: ECGRhythm;
  hr: number; // Heart Rate
}

// Generates SVG paths for different rhythms
const generatePath = (rhythm: ECGRhythm): string => {
  if (rhythm === 'assistolia') {
    return 'M 0,50 L 100,50 L 200,50 L 300,50 L 400,50 L 500,50 L 600,50 L 700,50 L 800,50 L 900,50 L 1000,50'; // Straight line
  }

  if (rhythm === 'fibrilacao_ventricular') {
    // Chaotic waves
    let path = 'M 0,50';
    for (let i = 10; i <= 1000; i += 15) {
      path += ` L ${i},${50 + (Math.random() * 80 - 40)}`;
    }
    return path;
  }

  if (rhythm === 'taquicardia_ventricular') {
    // Wide and uniform zig zag
    let path = 'M 0,50';
    for (let i = 20; i <= 1000; i += 40) {
      path += ` L ${i},20 L ${i+20},80`;
    }
    return path;
  }

  // Normal Sinus / Atrial Fibrillation (Irregular QRS)
  let path = 'M 0,50';
  let x = 0;
  
  while (x < 1000) {
    const isAfib = rhythm === 'fibrilacao_atrial';
    
    // Interval between complexes
    const interval = isAfib ? 60 + Math.random() * 80 : 100;
    
    // Baseline noise / Atrial fibrillation f-waves
    if (isAfib) {
      const segments = interval / 5;
      for(let i=0; i<segments; i++) {
        x += 5;
        path += ` L ${x},${50 + (Math.random() * 8 - 4)}`;
      }
    } else {
      x += interval * 0.6; // flat line
      path += ` L ${x},50`;
      
      // P wave
      x += 10; path += ` Q ${x-5},40 ${x},50`;
      x += 10; path += ` L ${x},50`; // PR segment
    }

    // QRS Complex
    x += 5; path += ` L ${x},60`; // Q
    x += 10; path += ` L ${x},10`; // R
    x += 5; path += ` L ${x},65`; // S
    x += 5; path += ` L ${x},50`; // ST segment

    // T wave
    x += 10; path += ` L ${x},50`;
    x += 15; path += ` Q ${x-7.5},35 ${x},50`; // T
    
    if(!isAfib) {
      path += ` L ${x + interval*0.2},50`;
    }
  }

  return path;
};

const generateCase = (): ECGCase => {
  const rhythms: ECGRhythm[] = ['sinusal', 'fibrilacao_ventricular', 'taquicardia_ventricular', 'assistolia', 'fibrilacao_atrial'];
  const r = rhythms[Math.floor(Math.random() * rhythms.length)];
  
  let hr = 75;
  if (r === 'fibrilacao_ventricular') hr = 0; // usually no readable HR on standard monitor
  if (r === 'assistolia') hr = 0;
  if (r === 'taquicardia_ventricular') hr = 160 + Math.random() * 60;
  if (r === 'fibrilacao_atrial') hr = 90 + Math.random() * 60; // Usually tachy unless controlled
  if (r === 'sinusal') hr = 60 + Math.random() * 40;

  return { rhythm: r, hr: Math.round(hr) };
};

const formatRhythm = (r: string) => r.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());

export default function ECGSim({ onClose, onComplete, playSound, triggerHaptic }: { onClose: () => void, onComplete: (xp: number) => void, playSound: (type: any) => void, triggerHaptic: (type: any) => void }) {
  const [currentCase, setCurrentCase] = useState<ECGCase | null>(null);
  const [path, setPath] = useState('');
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean, text: string } | null>(null);

  useEffect(() => {
    handleNextCase();
  }, []);

  const handleNextCase = () => {
    const c = generateCase();
    setCurrentCase(c);
    setPath(generatePath(c.rhythm));
    setFeedback(null);
  };

  const handleGuess = (guess: ECGRhythm) => {
    if (!currentCase || feedback) return;

    if (guess === currentCase.rhythm) {
      const earnedXP = 15 * combo;
      setScore(s => s + earnedXP);
      setCombo(c => Math.min(c + 1, 5));
      playSound('CORRECT');
      triggerHaptic('success');
      setFeedback({ isCorrect: true, text: `Preciso! +${earnedXP} XP. Ritmo: ${formatRhythm(currentCase.rhythm)}` });
    } else {
      setLives(l => l - 1);
      setCombo(1);
      playSound('WRONG');
      triggerHaptic('error');
      setFeedback({ isCorrect: false, text: "Interpretação vetorial letal! Conduta equivocada. Revise a seção 'Arritmias Cardíacas' na sua biblioteca de Flashcards." });
    }
  };

  if (!currentCase) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0f12] flex flex-col text-green-500">
      <div className="p-6 pb-2 flex justify-between items-center border-b border-green-500/20 bg-black/40">
         <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-green-700">Monitor Multiparamétrico</span>
            <h2 className="text-xl font-bold text-green-400">ECG Lab</h2>
         </div>
         <button onClick={() => onComplete(score)} className="p-2 rounded-full text-green-700 hover:text-green-400 transition-colors">
           <X className="w-6 h-6" />
         </button>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
         {/* Monitor Header */}
         <div className="flex justify-between items-end">
            <div className="flex items-center gap-1">
               {[...Array(3)].map((_, i) => (
                  <HeartPulse key={i} className={`w-8 h-8 ${i < lives ? 'text-red-600' : 'text-red-900 opacity-30 drop-shadow-none'} drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300`} />
               ))}
            </div>
            <div className="text-right">
               <div className="text-xs font-bold uppercase tracking-widest text-green-800">XP Streak</div>
               <div className="text-3xl font-black drop-shadow-[0_0_5px_#22c55e]">{score}</div>
               {combo > 1 && <div className="text-[10px] font-black text-yellow-400 drop-shadow-[0_0_5px_#facc15]">COMBO x{combo}</div>}
            </div>
         </div>

         {/* Monitor Display */}
         <div className="bg-[#050809] border-2 border-green-900 rounded-[2rem] p-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] flex-1 flex flex-col relative overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            {/* Vitals Sidebar */}
            <div className="absolute top-4 right-6 text-right z-10 flex flex-col gap-6">
                <div>
                   <div className="text-green-700 text-xs font-black tracking-widest">FC (bpm)</div>
                   <motion.div 
                     key={currentCase.hr}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="text-5xl font-black text-green-400 tabular-nums drop-shadow-[0_0_10px_#4ade80]"
                   >
                     {currentCase.hr === 0 ? '- - -' : currentCase.hr}
                   </motion.div>
                </div>
            </div>

            {/* Sweep ECG Line */}
            <div className="flex-1 relative flex items-center overflow-hidden">
                <svg viewBox="0 0 1000 100" className="w-[200%] h-full absolute left-0" preserveAspectRatio="none">
                   <motion.path 
                     d={path}
                     fill="none"
                     stroke="#4ade80"
                     strokeWidth="3"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     style={{ filter: 'drop-shadow(0px 0px 4px #4ade80)' }}
                     initial={{ x: 0 }}
                     animate={{ x: "-50%" }}
                     transition={{ duration: currentCase.rhythm === 'taquicardia_ventricular' ? 1.5 : currentCase.rhythm === 'fibrilacao_ventricular' ? 2 : 4, ease: "linear", repeat: Infinity }}
                   />
                   <motion.path 
                     d={path}
                     fill="none"
                     stroke="#4ade80"
                     strokeWidth="3"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     style={{ filter: 'drop-shadow(0px 0px 4px #4ade80)' }}
                     initial={{ x: "100%" }}
                     animate={{ x: "50%" }}
                     transition={{ duration: currentCase.rhythm === 'taquicardia_ventricular' ? 1.5 : currentCase.rhythm === 'fibrilacao_ventricular' ? 2 : 4, ease: "linear", repeat: Infinity }}
                   />
                </svg>
            </div>
         </div>

         {/* Controles */}
         <div className="flex flex-col justify-end min-h-[140px]">
            <AnimatePresence mode="wait">
               {feedback ? (
                  <motion.div 
                    key="feedback"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-3xl flex flex-col items-center text-center gap-3 ${feedback.isCorrect ? 'bg-green-900/30 border border-green-500/30' : 'bg-red-900/30 border border-red-500/30 text-red-400'}`}
                  >
                     <p className="font-bold">{feedback.text}</p>
                     
                     <button 
                       onClick={lives <= 0 ? () => onComplete(score) : handleNextCase}
                       className="w-full py-3 bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 rounded-xl font-black"
                     >
                       {lives <= 0 ? 'FIM DA SIMULAÇÃO (VER XP)' : 'PRÓXIMO PACIENTE'}
                     </button>
                  </motion.div>
               ) : (
                  <motion.div 
                    key="controls"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 gap-2"
                  >
                     {(['sinusal', 'fibrilacao_atrial', 'taquicardia_ventricular', 'fibrilacao_ventricular', 'assistolia'] as ECGRhythm[]).map((d) => (
                        <button
                          key={d}
                          onClick={() => handleGuess(d)}
                          className="bg-green-900/10 border border-green-800 p-3 rounded-xl text-center font-bold text-xs hover:border-green-400 hover:bg-green-900/30 active:scale-95 transition-all text-green-500"
                        >
                           {formatRhythm(d)}
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
