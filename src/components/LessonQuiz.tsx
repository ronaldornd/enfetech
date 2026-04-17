import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Brain, Target, Award, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../types';
import { haptics } from '../utils/haptics';

interface LessonQuizProps {
  questions: QuizQuestion[];
  onComplete: (success: boolean) => void;
  onClose: () => void;
}

export default function LessonQuiz({ questions, onComplete, onClose }: LessonQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isShowingFeedback, setIsShowingFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentStep];
  const passScore = 4; // Exigência de 4/5

  const handleSelect = (index: number) => {
    if (isShowingFeedback) return;
    setSelectedOption(index);
    setIsShowingFeedback(true);

    const isCorrect = index === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
      haptics.success();
    } else {
      haptics.error();
    }

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
        setSelectedOption(null);
        setIsShowingFeedback(false);
      } else {
        setQuizFinished(true);
      }
    }, 1500);
  };

  if (quizFinished) {
    const passed = score >= passScore;
    return (
      <div className="fixed inset-0 z-[120] bg-bg flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm text-center space-y-8"
        >
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${passed ? 'bg-success/20 text-success' : 'bg-red-500/20 text-red-500'}`}>
            {passed ? <Award className="w-12 h-12" /> : <Target className="w-12 h-12" />}
          </div>
          
          <div>
            <h2 className="text-3xl font-black text-text-primary mb-2">
              {passed ? 'Aprovado!' : 'Continue Estudando'}
            </h2>
            <p className="text-text-secondary font-medium">
              Você acertou <span className="text-text-primary font-bold">{score}</span> de {questions.length} questões.
              {!passed && `\nNecessário 4 acertos para concluir.`}
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2 px-4">
            {Array.from({ length: questions.length }).map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full ${i < score ? 'bg-success' : 'bg-border'}`} 
              />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => onComplete(passed)}
              className={`w-full py-4 rounded-2xl font-bold text-white transition-all active:scale-95 ${passed ? 'bg-accent shadow-lg shadow-accent/30' : 'bg-surface border border-border text-text-primary'}`}
            >
              {passed ? 'Coletar Recompensa' : 'Tentar Novamente'}
            </button>
            <button
              onClick={onClose}
              className="text-text-secondary text-sm font-bold uppercase tracking-widest py-2"
            >
              Voltar para Aula
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] bg-bg overflow-y-auto">
      <div className="p-6 pb-24 max-w-md mx-auto min-h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Quiz Técnico</p>
              <h3 className="font-bold text-text-primary leading-none">Questão {currentStep + 1} de {questions.length}</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-text-secondary">
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        {/* Question */}
        <div className="flex-1 space-y-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-text-primary leading-snug">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === currentQuestion.correctAnswerIndex;
                let borderColor = 'border-border';
                let bgColor = 'bg-surface';
                
                if (isShowingFeedback) {
                  if (isCorrect) {
                     borderColor = 'border-success';
                     bgColor = 'bg-success/5';
                  } else if (isSelected) {
                     borderColor = 'border-red-500';
                     bgColor = 'bg-red-500/5';
                  }
                } else if (isSelected) {
                  borderColor = 'border-accent';
                  bgColor = 'bg-accent/5';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={isShowingFeedback}
                    className={`w-full text-left p-5 rounded-3xl border-2 transition-all flex items-center gap-4 ${borderColor} ${bgColor}`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                       isShowingFeedback && isCorrect ? 'bg-success border-success text-white' : 
                       isShowingFeedback && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' :
                       isSelected ? 'border-accent' : 'border-border'
                    }`}>
                      {isShowingFeedback && isCorrect && <CheckCircle2 className="w-4 h-4" />}
                      {isShowingFeedback && isSelected && !isCorrect && <XCircle className="w-4 h-4" />}
                      {!isShowingFeedback && <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-accent' : 'transparent'}`} />}
                    </div>
                    <span className={`font-medium ${isShowingFeedback && isCorrect ? 'text-success' : 'text-text-primary'}`}>{option}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="flex justify-between text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] mb-3">
            <span>Progresso</span>
            <span>{Math.round(((currentStep) / questions.length) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-border rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${((currentStep + (isShowingFeedback ? 1 : 0)) / questions.length) * 100}%` }}
              className="h-full bg-accent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
