
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, RotateCcw, BookOpen, Brain, Zap, BrainCircuit } from 'lucide-react';
import { FLASHCARDS } from '../data';
import { SRSData, SRSGrade, isCardDue, calculateNextReview } from '../utils/srs';

export default function FlashcardDeck({ onClose, moduleId, completedLessons, srsProgress, onUpdateSRS, onCorrect }: { onClose: () => void, moduleId?: string, completedLessons: string[], srsProgress: Record<string, SRSData>, onUpdateSRS: (cardId: string, data: SRSData) => void, onCorrect?: (card: any) => void }) {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const allCards = moduleId 
    ? FLASHCARDS.filter(c => c.moduleId === moduleId)
    : FLASHCARDS;

  const filteredCards = useMemo(() => {
    return allCards.filter(c => {
      // Regra 1: Tem que ter feito a lição
      if (c.requiredLessonId && !completedLessons.includes(c.requiredLessonId)) return false;
      // Regra 2: O card precisa estar "vencido" (data de revisão <= hoje)
      return isCardDue(srsProgress[c.id]);
    });
  }, [allCards, completedLessons, srsProgress]);

  const card = filteredCards[index];

  const handleGrade = (grade: SRSGrade) => {
    if (!card) return;
    
    // Calcula o novo espaçamento
    const currentData = srsProgress[card.id];
    const newData = calculateNextReview(grade, currentData);
    
    // Atualiza global
    onUpdateSRS(card.id, newData);
    
    // Bateu a meta (acerou bem)?
    if (onCorrect && grade !== 'again') {
        onCorrect(card);
    }
    
    if (index < filteredCards.length - 1) {
      setIndex(index + 1);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  if (filteredCards.length === 0) {
    return (
      <div className="fixed inset-0 z-[60] bg-bg p-8 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 bg-warning/10 text-warning rounded-full flex items-center justify-center">
          <BookOpen className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Ops!</h2>
        <p className="text-text-secondary">
          Tudo atualizado! Nenhuma revisão programada para os módulos que você escolheu no momento. Seus cartões estão sendo espaçados de forma eficiente!
        </p>
        <button 
          onClick={onClose}
          className="w-full max-w-xs bg-surface border border-border text-text-primary py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all"
        >
          Voltar
        </button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-[60] bg-bg p-8 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Revisão Concluída!</h2>
        <p className="text-text-secondary">Você revisou {filteredCards.length} cartões nesta sessão. Continue assim!</p>
        <button 
          onClick={onClose}
          className="w-full max-w-xs bg-accent text-white py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-bg p-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-black text-xl text-text-primary tracking-tight">Revisão Ativa</h2>
        <button onClick={onClose} className="p-2 bg-surface rounded-full text-text-secondary border border-border">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-8">
        <div className="text-center space-y-2">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{card.tags[0]}</span>
            <p className="text-xs text-text-secondary font-medium tracking-wide">Cartão {index + 1} de {filteredCards.length}</p>
        </div>

        <motion.div 
          layout
          onClick={() => setShowAnswer(!showAnswer)}
          className={`relative min-h-[300px] w-full bg-surface rounded-[40px] shadow-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer border-2 transition-colors ${showAnswer ? 'border-accent/40 bg-surface-hover' : 'border-border'}`}
        >
          <AnimatePresence mode="wait">
            {!showAnswer ? (
              <motion.div 
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-text-primary leading-tight">{card.question}</h3>
                <p className="text-sm text-text-secondary font-medium">Toque para ver a resposta</p>
              </motion.div>
            ) : (
              <motion.div 
                key="answer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <p className="text-[10px] font-black text-success uppercase tracking-widest">Resposta Correta</p>
                <h3 className="text-2xl font-bold text-text-primary leading-tight">{card.answer}</h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex gap-4">
          {!showAnswer ? (
             <button 
                onClick={() => setShowAnswer(true)}
                className="flex-1 bg-accent text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
             >
               Ver Resposta
             </button>
          ) : (
            <>
                <button 
                  onClick={() => handleGrade('again')}
                  className="flex-1 p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl active:scale-95 transition-all text-sm font-bold flex flex-col items-center gap-1"
                >
                  <RotateCcw className="w-5 h-5 mb-1" />
                  Errei
                  <span className="text-[10px] opacity-70">&lt; 1 min</span>
                </button>
                <button 
                  onClick={() => handleGrade('good')}
                  className="flex-1 p-3 bg-accent/10 border border-accent/20 text-accent rounded-2xl active:scale-95 transition-all text-sm font-bold flex flex-col items-center gap-1"
                >
                  <BrainCircuit className="w-5 h-5 mb-1" />
                  Lembrei
                  <span className="text-[10px] opacity-70">Bom</span>
                </button>
                <button 
                    onClick={() => handleGrade('easy')}
                    className="flex-1 p-3 bg-success/10 border border-success/20 text-success rounded-2xl active:scale-95 transition-all text-sm font-bold flex flex-col items-center gap-1"
                >
                    <Zap className="w-5 h-5 mb-1" />
                    Muito Fácil
                    <span className="text-[10px] opacity-70">Ótimo</span>
                </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
