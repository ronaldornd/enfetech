
import { motion } from 'motion/react';
import { X, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { Lesson } from '../types';

interface LessonViewerProps {
  lesson: Lesson;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function LessonViewer({ 
  lesson, 
  onClose, 
  onNext, 
  onPrev, 
  isFirst, 
  isLast 
}: LessonViewerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed inset-0 z-[60] bg-bg flex flex-col"
    >
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-24 pb-32">
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
                h2: ({ children }) => <h2 className="text-xl font-bold text-text-primary mt-6 mb-3">{children}</h2>,
                p: ({ children }) => <p className="text-text-secondary leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 space-y-2 mb-4 text-text-secondary">{children}</ul>,
                li: ({ children }) => <li className="pl-1">{children}</li>,
                strong: ({ children }) => <strong className="text-accent font-bold">{children}</strong>,
              }}
            >
              {lesson.content}
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
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-surface/90 backdrop-blur-xl border-t border-border z-[70] flex gap-4">
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
          onClick={isLast ? onClose : onNext}
          className="flex-[2] flex items-center justify-center gap-2 py-4 bg-accent text-white rounded-2xl font-bold active:scale-95 transition-all shadow-lg shadow-accent/20"
        >
          {isLast ? 'Concluir Lição' : 'Próxima Lição'}
          {!isLast && <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
    </motion.div>
  );
}
