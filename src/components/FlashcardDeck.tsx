
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, RotateCcw, BookOpen } from 'lucide-react';
import { FLASHCARDS } from '../data';

export default function FlashcardDeck({ onClose, moduleId }: { onClose: () => void, moduleId?: string }) {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const filteredCards = moduleId 
    ? FLASHCARDS.filter(c => c.moduleId === moduleId)
    : FLASHCARDS;

  const card = filteredCards[index];

  const handleNext = () => {
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
        <p className="text-text-secondary">Ainda não temos cartões preparados para este módulo específico. Tente a "Prática Geral".</p>
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
                  onClick={() => setShowAnswer(false)}
                  className="p-5 bg-surface border-2 border-border text-text-secondary rounded-2xl active:scale-95 transition-all"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
                <button 
                    onClick={handleNext}
                    className="flex-1 bg-accent text-white py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                    Próximo Cartão
                    <ArrowRight className="w-5 h-5" />
                </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
