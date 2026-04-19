import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings2, Play, CircleStop, Delete, Calculator, X, BatteryMedium, Droplet } from 'lucide-react';

interface PumpCase {
  substance: string;
  volume: number; // in mL
  timeInHours: number; 
  targetRate: number; // calculated mL/h
  description: string;
}

const generateCase = (): PumpCase => {
  const cases = [
    { sub: "SF 0.9%", vol: 500, time: 8, text: "Soro Fisiológico 0.9% 500mL para correr em 8 horas." },
    { sub: "Ringer Lactato", vol: 1000, time: 12, text: "Ringer Lactato 1000mL para correr em 12 horas." },
    { sub: "Amiodarona (Ataque)", vol: 250, time: 0.5, text: "Amiodarona 150mg (3 amp) + SG 5% 241mL (Volume total 250mL) em 30 minutos." },
    { sub: "Vancomicina", vol: 250, time: 1, text: "Vancomicina 1g diluída em 250mL de SF 0.9% para correr em 1 hora." },
    { sub: "Plasmalyte", vol: 1000, time: 24, text: "Manutenção: Plasmalyte 1000mL correr em 24h." },
    { sub: "Hemoglobina", vol: 300, time: 2, text: "Concentrado de Hemácias 300mL para correr em 2 horas." }
  ];

  const c = cases[Math.floor(Math.random() * cases.length)];
  const rate = c.vol / c.time;

  return {
    substance: c.sub,
    volume: c.vol,
    timeInHours: c.time,
    targetRate: Number(rate.toFixed(1)),
    description: c.text
  };
};

export default function PumpSim({ onClose, onComplete, playSound, triggerHaptic }: { onClose: () => void, onComplete: (xp: number) => void, playSound: (type: any) => void, triggerHaptic: (type: any) => void }) {
  const [currentCase, setCurrentCase] = useState<PumpCase | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [activeSegment, setActiveSegment] = useState<'rate' | 'vtbi'>('rate'); // Rate = mL/h, VTBI = Volume To Be Infused
  const [vtbiInput, setVtbiInput] = useState('');
  
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean, text: string } | null>(null);

  useEffect(() => {
    handleNextCase();
  }, []);

  const handleNextCase = () => {
    setCurrentCase(generateCase());
    setInputVal('');
    setVtbiInput('');
    setActiveSegment('rate');
    setFeedback(null);
  };

  const handleKeyPress = (key: string) => {
    if (feedback) return;
    triggerHaptic('light');

    if (key === 'C') {
        if (activeSegment === 'rate') setInputVal('');
        else setVtbiInput('');
        return;
    }

    if (key === 'DEL') {
        if (activeSegment === 'rate') setInputVal(prev => prev.slice(0, -1));
        else setVtbiInput(prev => prev.slice(0, -1));
        return;
    }

    if (key === '.') {
      if (activeSegment === 'rate' && !inputVal.includes('.')) setInputVal(prev => prev + key);
      if (activeSegment === 'vtbi' && !vtbiInput.includes('.')) setVtbiInput(prev => prev + key);
      return;
    }

    // Number keys limit length to 6
    if (activeSegment === 'rate' && inputVal.length < 6) setInputVal(prev => prev + key);
    if (activeSegment === 'vtbi' && vtbiInput.length < 6) setVtbiInput(prev => prev + key);
  };

  const checkInfusion = () => {
    if (!currentCase) return;

    const rateNum = parseFloat(inputVal);
    const vtbiNum = parseFloat(vtbiInput);

    if (isNaN(rateNum) || isNaN(vtbiNum)) {
       setFeedback({ isCorrect: false, text: "Preencha Volume (VTBI) e Velocidade (mL/h) antes de iniciar a infusão." });
       return;
    }

    const isRateCorrect = Math.abs(rateNum - currentCase.targetRate) <= 0.1;
    const isVtbiCorrect = Math.abs(vtbiNum - currentCase.volume) <= 0.1;

    if (isRateCorrect && isVtbiCorrect) {
      setScore(s => s + 20);
      playSound('CORRECT');
      triggerHaptic('success');
      setFeedback({ isCorrect: true, text: "Bomba programada com sucesso! Infusão rolando segura." });
    } else {
      setLives(l => l - 1);
      playSound('WRONG');
      triggerHaptic('error');
      setFeedback({ 
        isCorrect: false, 
        text: 'Alarme de Infusão! Erro crítico de dosagem detectado. Retorne ao menu e revise a "Pílula de Cálculo de Gotejamento e BIC" na aba de Farmacologia.' 
      });
    }
  };

  if (!currentCase) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-900 flex flex-col">
      <div className="p-6 pb-2 flex justify-between items-center border-b border-white/10 bg-zinc-800">
         <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Prescrição e Cálculo</span>
            <h2 className="text-xl font-bold text-white">Bomba Contínua</h2>
         </div>
         <button onClick={() => onComplete(score)} className="p-2 bg-zinc-700/50 rounded-full text-zinc-400 hover:text-white transition-colors">
           <X className="w-5 h-5" />
         </button>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
         
         {/* Top Prescriçao */}
         <div className="bg-white p-4 rounded-2xl shadow-xl border-l-4 border-l-blue-500 flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Prescrição Médica</span>
            <p className="text-sm font-bold text-zinc-800 leading-relaxed">{currentCase.description}</p>
         </div>

         {/* Painel da Bomba (HUD) */}
         <div className="bg-[#1e2a35] border border-[#2d3f50] rounded-[2rem] p-4 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden flex-1 shrink-0">
             
             {/* Screen header */}
             <div className="flex justify-between items-center text-[#4a90e2] mb-4 border-b border-[#4a90e2]/30 pb-2">
                 <div className="flex items-center gap-2">
                     <Droplet className="w-4 h-4 fill-current" />
                     <span className="text-xs font-bold font-mono uppercase tracking-widest">INFUSÃO</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono">Lives: {lives}</span>
                    <BatteryMedium className="w-5 h-5 fill-current" />
                 </div>
             </div>

             {/* Screen Displays */}
             <div className="bg-[#e0f7fa] inset-shadow-sm rounded-xl p-3 flex flex-col gap-3 font-mono border-4 border-[#3e4a56]">
                <div 
                  onClick={() => setActiveSegment('vtbi')}
                  className={`p-2 rounded flex justify-between items-center cursor-pointer transition-colors ${activeSegment === 'vtbi' ? 'bg-blue-200' : 'hover:bg-blue-100'}`}
                >
                   <span className="text-sm font-bold text-zinc-700">VTBI (mL)</span>
                   <span className="text-2xl font-black text-blue-900 tracking-wider tabular-nums">{vtbiInput || '0.0'}</span>
                </div>
                <div 
                  onClick={() => setActiveSegment('rate')}
                  className={`p-2 rounded flex justify-between items-center cursor-pointer transition-colors ${activeSegment === 'rate' ? 'bg-blue-200' : 'hover:bg-blue-100'}`}
                >
                   <span className="text-sm font-bold text-zinc-700">Taxa (mL/h)</span>
                   <span className="text-2xl font-black text-blue-900 tracking-wider tabular-nums">{inputVal || '0.0'}</span>
                </div>
             </div>

             {/* Feedback Overlay on the screen */}
             <AnimatePresence>
                {feedback && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                     className={`absolute inset-0 z-20 p-6 flex flex-col justify-center items-center text-center backdrop-blur-md bg-zinc-900/90 ${feedback.isCorrect ? 'text-green-400' : 'text-red-400'}`}
                   >
                     <p className="font-bold text-sm mb-4">{feedback.text}</p>
                     <button
                        onClick={lives <= 0 ? () => onComplete(score) : handleNextCase}
                        className="bg-zinc-800 text-white font-bold py-3 px-6 rounded-xl w-full border border-zinc-700"
                     >
                       {lives <= 0 ? 'FIM DA SIMULAÇÃO (VER XP)' : 'PRÓXIMA PRESCRIÇÃO'}
                     </button>
                   </motion.div>
                )}
             </AnimatePresence>

             <div className="flex-1"></div>
             
             {/* Keypad */}
             <div className="mt-4 bg-[#233240] p-3 rounded-2xl">
                 <div className="grid grid-cols-3 gap-2 mb-2">
                    {['1','2','3','4','5','6','7','8','9','C','0','.'].map(key => (
                       <button 
                         key={key}
                         onClick={() => handleKeyPress(key)}
                         disabled={!!feedback}
                         className={`py-3 rounded-xl font-black text-lg shadow-sm active:translate-y-1 transition-transform
                            ${key === 'C' ? 'bg-orange-500 text-white' : 'bg-[#e4e9f2] text-[#2c3e50]'}`}
                       >
                          {key}
                       </button>
                    ))}
                 </div>
                 <div className="grid grid-cols-2 gap-2 mt-4">
                     <button 
                       onClick={() => handleKeyPress('DEL')}
                       disabled={!!feedback}
                       className="py-4 rounded-xl font-black bg-zinc-600 text-white flex justify-center items-center gap-2 active:translate-y-1 shadow-sm"
                     >
                        <Delete className="w-5 h-5" />
                        Apagar
                     </button>
                     <button 
                       onClick={checkInfusion}
                       disabled={!!feedback}
                       className="py-4 rounded-xl font-black bg-green-500 text-white flex justify-center items-center gap-2 active:translate-y-1 shadow-sm shadow-green-900"
                     >
                        <Play className="w-5 h-5" fill="currentColor" />
                        START
                     </button>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
}
