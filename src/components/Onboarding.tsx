import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  User, 
  Zap, 
  Shield, 
  Calculator, 
  BookOpen,
  Award,
  Flashlight
} from 'lucide-react';
import { UserProfile } from '../types';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

const steps = [
  {
    id: 'welcome',
    title: 'Bem-vindo ao EnfeTech',
    description: 'Sua plataforma definitiva para aprimorar conhecimentos em Enfermagem Técnica com tecnologia e inovação.',
    icon: Flashlight,
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    id: 'name',
    title: 'Como podemos te chamar?',
    description: 'Seu nome será usado para personalizar sua jornada e acompanhar suas conquistas.',
    icon: User,
    color: 'text-success',
    bg: 'bg-success/10'
  },
  {
    id: 'features',
    title: 'Potencialize seu Plantão',
    description: 'Simulações reais, cálculos de gotejamento, POPs digitais e muito mais na palma da sua mão.',
    icon: Zap,
    color: 'text-warning',
    bg: 'bg-warning/10'
  }
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const nextStep = () => {
    if (steps[currentStep].id === 'name' && !name.trim()) {
      setError(true);
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setError(false);
    } else {
      onComplete({
        name: name.trim(),
        xp: 0,
        level: 1,
        onboardingCompleted: true
      });
    }
  };

  const current = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.05] pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm flex flex-col items-center text-center space-y-8 relative z-10"
        >
          <div className={`p-6 rounded-[32px] ${current.bg} ${current.color}`}>
            <current.icon className="w-16 h-16 stroke-[1.5]" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tight text-text-primary leading-tight">
              {current.title}
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              {current.description}
            </p>
          </div>

          {current.id === 'name' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full"
            >
              <input 
                type="text" 
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(false);
                }}
                placeholder="Seu nome completo"
                className={`w-full bg-surface border-2 ${error ? 'border-warning' : 'border-border'} rounded-2xl px-5 py-4 text-text-primary font-bold placeholder:text-text-secondary/50 focus:border-accent outline-none transition-all`}
                onKeyDown={(e) => e.key === 'Enter' && nextStep()}
              />
              {error && (
                <p className="text-warning text-xs font-bold mt-2 uppercase tracking-widest">Precisamos de um nome!</p>
              )}
            </motion.div>
          )}

          {current.id === 'features' && (
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { label: 'Simulações', icon: Zap },
                { label: 'Cálculos', icon: Calculator },
                { label: 'POPs', icon: Shield },
                { label: 'Aulas', icon: BookOpen }
              ].map((f, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={f.label}
                  className="bg-surface/50 border border-border rounded-2xl p-4 flex flex-col items-center gap-2"
                >
                  <f.icon className="w-5 h-5 text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">{f.label}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-12 left-0 right-0 px-8 flex flex-col items-center gap-6 z-20">
        {/* Indicators */}
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-accent' : 'w-2 bg-border'}`} 
            />
          ))}
        </div>

        <button
          onClick={nextStep}
          className="w-full max-w-sm bg-accent text-white py-5 rounded-[24px] font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-accent/20 active:scale-95 transition-all"
        >
          {currentStep === steps.length - 1 ? 'Começar Jornada' : 'Continuar'}
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
