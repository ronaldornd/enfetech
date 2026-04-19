import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ChevronRight, ChevronLeft, Brain, Timer } from 'lucide-react';
import Markdown from 'react-markdown';
import { Lesson } from '../types';
import { useState, useEffect } from 'react';
import LessonQuiz from './LessonQuiz';
import { haptics } from '../utils/haptics';
import { DICTIONARY } from '../data/index';
import { useMemo } from 'react';

interface LessonViewerProps {
  lesson: Lesson;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  onComplete?: () => void;
  onFail?: () => void;
  onTermClick?: (term: string) => void;
  completed?: boolean;
  lockUntil?: number;
}

export default function LessonViewer({ 
  lesson, 
  onClose, 
  onNext, 
  onPrev, 
  isFirst, 
  isLast,
  onComplete,
  onFail,
  onTermClick,
  completed,
  lockUntil
}: LessonViewerProps) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [canStartQuiz, setCanStartQuiz] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  // Processa o conteúdo para destacar siglas do dicionário
  const processedContent = useMemo(() => {
    let text = lesson.content;
    
    // Lista de termos para destacar (ordenados por tamanho para evitar substituições parciais)
    const terms = [...DICTIONARY]
      .sort((a, b) => b.term.length - a.term.length);

    terms.forEach(entry => {
      // Ignora termos muito curtos ou genéricos se necessário, 
      // mas aqui vamos usar word boundaries para segurança
      const escapedTerm = entry.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Regex que evita substituir termos que já estão dentro de links de markdown [text](link)
      // ou que são partes de links. 
      // Simplificado: substitui se houver borda de palavra e não for precedido por [ ou ( e não seguido por ] ou )
      // Para o EnfeTech, a maioria das siglas é maiúscula e está isolada.
      const regex = new RegExp(`(?<!\\[)\\b(${escapedTerm})\\b(?!\\])`, 'g');
      
      // Usamos um marcador temporário para evitar que uma substituição afete a outra
      text = text.replace(regex, `[$1](dict://$1)`);
    });

    return text;
  }, [lesson.content]);

  useEffect(() => {
    if (completed) {
      setCanStartQuiz(true);
      setTimeLeft(0);
      return;
    }

    if (!lockUntil || lockUntil <= Date.now()) {
      setCanStartQuiz(true);
      setTimeLeft(0);
      return;
    }

    setCanStartQuiz(false);
    
    // Calcula tempo inicial
    const initialRemaining = Math.max(0, Math.floor((lockUntil - Date.now()) / 1000));
    setTimeLeft(initialRemaining);

    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((lockUntil - Date.now()) / 1000));
      if (remaining <= 0) {
        clearInterval(timer);
        setCanStartQuiz(true);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [completed, lesson.id, lockUntil]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleQuizComplete = (success: boolean) => {
    if (success) {
      if (onComplete) onComplete();
      setShowQuiz(false);
    } else {
      if (onFail) onFail();
      setShowQuiz(false);
    }
  };

  return (
    <>
      <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed inset-0 z-[60] bg-bg flex flex-col"
    >
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-24 pb-64">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="p-4 bg-accent/10 rounded-3xl mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">Lição {lesson.order}</span>
            <h1 className="text-3xl font-black text-text-primary leading-tight">{lesson.title}</h1>
          </div>

          <div className="max-w-none">
            <Markdown
              components={{
                h1: ({ children }) => <h1 className="text-2xl font-black text-text-primary mt-8 mb-4 border-b border-border pb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-bold text-text-primary mt-6 mb-3 flex items-center gap-2">{children}</h2>,
                p: ({ children }) => <p className="text-text-secondary leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 space-y-2 mb-6 text-text-secondary">{children}</ul>,
                li: ({ children }) => <li className="pl-1">{children}</li>,
                strong: ({ children }) => <strong className="text-text-primary font-bold bg-accent/10 px-1 rounded">{children}</strong>,
                hr: () => <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />,
                code: ({ children }) => (
                  <code className="bg-surface border border-border px-2 py-0.5 rounded font-mono text-sm text-accent">
                    {children}
                  </code>
                ),
                a: ({ href, children }) => {
                  if (href?.startsWith('dict://')) {
                    const term = href.replace('dict://', '');
                    return (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          haptics.light();
                          onTermClick?.(term);
                        }}
                        className="text-accent font-bold border-b border-dashed border-accent/40 hover:bg-accent/10 px-0.5 rounded transition-colors cursor-pointer"
                      >
                        {children}
                      </button>
                    );
                  }
                  return <a href={href} target="_blank" rel="noreferrer" className="text-accent underline">{children}</a>;
                },
                blockquote: ({ children }) => {
                  const content = String(children);
                  const isTip = content.includes('[!DICA]');
                  const isWarning = content.includes('[!ALERTA]');
                  
                  let bgClass = "bg-accent/5 border-accent";
                  let textClass = "text-text-primary";
                  let icon = <BookOpen className="w-5 h-5 text-accent shrink-0" />;
                  let label = "Nota";

                  if (isTip) {
                    bgClass = "bg-success/5 border-success";
                    icon = <BookOpen className="w-5 h-5 text-success shrink-0" />;
                    label = "Dica Prática";
                  } else if (isWarning) {
                    bgClass = "bg-warning/5 border-warning";
                    icon = <BookOpen className="w-5 h-5 text-warning shrink-0" />;
                    label = "Atenção / Alerta";
                  }

                  const cleanChildren = Array.isArray(children) 
                    ? (children as any).map((c: any) => {
                        if (typeof c === 'string') return c.replace(/\[!(DICA|ALERTA)\]/g, '');
                        if (c?.props?.children) {
                          return {
                            ...c,
                            props: {
                              ...c.props,
                              children: String(c.props.children).replace(/\[!(DICA|ALERTA)\]/g, '')
                            }
                          };
                        }
                        return c;
                      })
                    : children;

                  return (
                    <div className={`${bgClass} border-l-4 p-4 my-6 rounded-r-2xl flex gap-4 items-start shadow-sm`}>
                      {icon}
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-70 block mb-1">{label}</span>
                        <div className={textClass}>{cleanChildren}</div>
                      </div>
                    </div>
                  );
                }
              }}
            >
              {processedContent}
            </Markdown>
          </div>
        </div>
      </div>

      {/* Persistent Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-bg/80 backdrop-blur-md border-b border-border z-[70]">
        <h2 className="font-bold text-text-primary truncate max-w-[200px]">{lesson.title}</h2>
        <button 
          onClick={onClose}
          className="p-2 bg-surface rounded-full text-text-secondary border border-border hover:text-text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-surface/90 backdrop-blur-xl border-t border-border z-[70] flex flex-col gap-3">
        <div className="flex gap-3">
          {!isFirst && (
            <button 
              onClick={onPrev}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-bg border border-border text-text-primary rounded-2xl font-bold active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
          )}
          
          <button 
            onClick={() => {
              if (completed) return;
              if (canStartQuiz) {
                setShowQuiz(true);
              } else {
                haptics.error();
              }
            }}
            disabled={completed}
            className={`flex-[2] flex items-center justify-center gap-2 py-4 rounded-2xl font-bold active:scale-95 transition-all shadow-lg ${
              completed 
                ? 'bg-success/20 text-success border border-success/30' 
                : canStartQuiz 
                  ? 'bg-accent text-white shadow-accent/20' 
                  : 'bg-surface border border-border text-text-secondary cursor-not-allowed opacity-80'
            }`}
          >
            {completed ? (
              <>Lição Concluída ✅</>
            ) : canStartQuiz ? (
              <><Brain className="w-5 h-5" /> Iniciar Quiz da Lição</>
            ) : (
              <><Timer className="w-5 h-5 animate-pulse" /> Estudo: {formatTime(timeLeft)}</>
            )}
          </button>
        </div>

        {!isLast && (
          <button 
            onClick={() => {
              if (completed) {
                onNext?.();
              } else {
                haptics.error();
              }
            }}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold active:scale-95 transition-all shadow-xl ${
              completed 
                ? 'bg-accent text-white shadow-accent/20' 
                : 'bg-surface border border-border text-text-secondary opacity-50 cursor-not-allowed'
            }`}
          >
            Próxima Lição
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        
        {isLast && (
          <button 
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-4 bg-bg border border-border text-text-secondary rounded-2xl font-bold active:scale-95 transition-all"
          >
            Finalizar Módulo
          </button>
        )}
      </div>
    </motion.div>
      <AnimatePresence>
        {showQuiz && (
          <LessonQuiz 
            questions={lesson.questions || []} 
            onComplete={handleQuizComplete} 
            onClose={() => setShowQuiz(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
