/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Zap, 
  Calculator, 
  User, 
  Search,
  ChevronRight,
  ChevronLeft,
  Award,
  Shield,
  ShieldCheck,
  Globe,
  CirclePlay,
  Baby,
  FlaskConical,
  Stethoscope,
  Timer,
  Activity,
  Heart,
  Download,
  Upload,
  Volume2,
  VolumeX,
  Smartphone,
  Beaker,
  HeartPulse,
  Droplet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MODULES, 
  SCENARIOS, 
  FLASHCARDS, 
  BADGES,
  DICTIONARY,
  POPS,
  PILLS,
  LESSONS
} from './data/index';
import { storage } from './utils/storage';
import { haptics } from './utils/haptics';
import ManchesterSim from './components/ManchesterSim';
import ABGSim from './components/ABGSim';
import ECGSim from './components/ECGSim';
import PumpSim from './components/PumpSim';
import { Module, Scenario, Flashcard as FlashcardType, Lesson } from './types';
import DripRateCalculator from './components/DripRateCalculator';
import FlashcardDeck from './components/FlashcardDeck';
import { generateDailyChallenges } from './data/challenges';
import POPViewer from './components/POPViewer';
import DictionaryExplorer from './components/DictionaryExplorer';
import PillViewer from './components/PillViewer';
import GlobalSearch from './components/GlobalSearch';
import LessonViewer from './components/LessonViewer';
import Onboarding from './components/Onboarding';
import { UserProfile } from './types';
import { SuccessOverlay } from './components/SuccessOverlay';
import { SRSData } from './utils/srs';

// Sound Configuration
const SOUNDS = {
  CORRECT: '/assets/sounds/correct.mp3',
  WRONG: '/assets/sounds/wrong.mp3',
  ACHIEVEMENT: '/assets/sounds/achievement.mp3',
  GAMEOVER: '/assets/sounds/gameover.mp3',
  CLICK: '/assets/sounds/click.mp3'
};

// Audio Pool for instant playback (Pre-loading)
const AUDIO_POOL: Record<string, HTMLAudioElement> = {};
if (typeof window !== 'undefined') {
  Object.entries(SOUNDS).forEach(([key, path]) => {
    const audio = new Audio(path);
    audio.preload = 'auto';
    AUDIO_POOL[key] = audio;
  });
}

// Components
const StatCard = ({ label, value, icon: Icon, colorClass }: any) => (
  <div className="bg-surface p-4 rounded-2xl shadow-sm border border-border flex items-center gap-3">
    <div className={`p-2 rounded-xl ${colorClass}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">{label}</p>
      <p className="text-xl font-bold text-text-primary">{value}</p>
    </div>
  </div>
);

const ModuleCard = ({ module, onClick }: { module: Module; onClick: () => void; key?: string }) => {
  const Icon = useMemo(() => {
    switch (module.icon) {
      case 'Shield': return Shield;
      case 'Calculator': return Calculator;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      case 'Baby': return Baby;
      case 'FlaskConical': return FlaskConical;
      case 'Stethoscope': return Stethoscope;
      default: return BookOpen;
    }
  }, [module.icon]);

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        triggerHaptic('light');
        onClick();
      }}
      className="w-full bg-surface p-5 rounded-[32px] border border-border flex items-center gap-5 text-left transition-all hover:bg-surface-hover hover:shadow-xl hover:shadow-accent/5 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-3xl rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
      <CircularProgress progress={module.progress} color={module.progress === 100 ? '#00b894' : '#6C5CE7'} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-accent" />
          <h3 className="font-bold text-base text-text-primary truncate">{module.title}</h3>
        </div>
        <p className="text-xs text-text-secondary line-clamp-1">{module.description}</p>
      </div>
      <div className="p-2 bg-bg rounded-xl text-text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
        <ChevronRight className="w-5 h-5" />
      </div>
    </motion.button>
  );
};

const getCareerTitle = (level: number) => {
  if (level >= 10) return 'Enfermeiro Especialista';
  if (level >= 6) return 'Enfermeiro Júnior';
  if (level >= 3) return 'Interno de Enfermagem';
  return 'Acadêmico de Enfermagem';
};

const CircularProgress = ({ progress, size = 52, strokeWidth = 5, color = '#6C5CE7' }: { progress: number, size?: number, strokeWidth?: number, color?: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative group/circle" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-border/20"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-black group-hover/circle:scale-110 transition-transform">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'learn' | 'sim' | 'tools' | 'profile'>('home');
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState<{ show: boolean, moduleId?: string }>({ show: false });
  const [showPOPs, setShowPOPs] = useState(false);
  const [showPills, setShowPills] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showDictionary, setShowDictionary] = useState<{ show: boolean, tab: 'sigla' | 'escala', term?: string }>({ show: false, tab: 'sigla' });
  const [showManchesterSim, setShowManchesterSim] = useState(false);
  const [showABGSim, setShowABGSim] = useState(false);
  const [showECGSim, setShowECGSim] = useState(false);
  const [showPumpSim, setShowPumpSim] = useState(false);
  const [successState, setSuccessState] = useState<{ show: boolean, type: 'level' | 'badge' | 'lesson', title: string, subtitle: string }>({
    show: false,
    type: 'lesson',
    title: '',
    subtitle: ''
  });
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [selectedModuleForLessons, setSelectedModuleForLessons] = useState<Module | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [lessonLocks, setLessonLocks] = useState<Record<string, number>>({});
  const [srsProgress, setSrsProgress] = useState<Record<string, SRSData>>({});
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);

  const triggerHaptic = (type: 'light' | 'medium' | 'success' | 'error') => {
    if (profile?.hapticsEnabled !== false) {
      haptics[type]();
    }
  };

  const playSound = (type: keyof typeof SOUNDS) => {
    if (profile?.soundsEnabled === true) {
      const audio = AUDIO_POOL[type];
      if (audio) {
        audio.currentTime = 0; // Reset to start for instant replay
        audio.volume = 0.5;
        audio.play().catch(() => {}); // Catch prevents drama on first interaction
      }
    }
  };

  // Daily Challenge Generation Logic
  useEffect(() => {
    if (!isInitialized || !profile) return;
    
    const today = new Date().toISOString().split('T')[0];
    if (profile.lastDailyReset !== today) {
      const newChallenges = generateDailyChallenges(today);
      setProfile(prev => prev ? ({
        ...prev,
        lastDailyReset: today,
        activeChallenges: newChallenges
      }) : null);
    }
  }, [profile?.lastDailyReset, isInitialized]);

  const updateChallengeProgress = (type: string, amount: number = 1, metadata?: any) => {
    if (!profile || !profile.activeChallenges) return;

    let xpBonus = 0;
    const updatedChallenges = profile.activeChallenges.map(challenge => {
      if (challenge.completed) return challenge;
      
      let increment = 0;
      if (challenge.type === type) {
        // Special filters
        if (challenge.templateId === 'ct_lessons_ped' && metadata?.moduleId !== 'pediatrics') return challenge;
        if (challenge.templateId === 'ct_lessons_far' && metadata?.moduleId !== 'pharmacology') return challenge;
        if (challenge.templateId === 'ct_scenarios_hard' && metadata?.difficulty !== 'Alta') return challenge;
        if (challenge.templateId === 'ct_flashcards_tags' && !metadata?.tags?.includes('Críticos')) return challenge;

        increment = amount;
      }

      const newCurrent = Math.min(challenge.target, challenge.current + increment);
      const justCompleted = !challenge.completed && newCurrent >= challenge.target;
      
      if (justCompleted) {
        xpBonus += challenge.xpReward;
        triggerHaptic('success');
      }

      return {
        ...challenge,
        current: newCurrent,
        completed: justCompleted || challenge.completed
      };
    });

    if (xpBonus > 0 || updatedChallenges !== profile.activeChallenges) {
      setProfile(prev => prev ? ({
        ...prev,
        xp: prev.xp + xpBonus,
        activeChallenges: updatedChallenges
      }) : null);
    }
  };

  const [showAchievement, setShowAchievement] = useState<{ show: boolean, title: string, subtitle: string, icon: any } | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showNotification, setShowNotification] = useState<{ show: boolean, title: string, subtitle: string, type: 'success' | 'error' | 'info' } | null>(null);

  // Simulation Stress States
  const [stability, setStability] = useState(100);
  const [simulationTime, setSimulationTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Simulation Timer Effect
  useEffect(() => {
    let interval: any;
    if (timerActive) {
      interval = setInterval(() => {
        setSimulationTime(prev => prev + 1);
        // Passive stability decay: 2% per second if useStability is true
        setStability(prev => Math.max(0, prev - 2));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Failure by exhaustion
  useEffect(() => {
    if (timerActive && stability <= 0) {
      setTimerActive(false);
      playSound('GAMEOVER');
      // SimulatorsView handles the result display if stability is 0
    }
  }, [stability, timerActive]);

  // Sincronização e Carregamento
  useEffect(() => {
    async function init() {
      try {
        await storage.migrate();
        const savedProfile = await storage.get('user_profile') as UserProfile | null;
        const savedLessons = await storage.get('enfetech_lessons') as string[] | null;
        const savedScenarios = await storage.get('enfetech_scenarios') as string[] | null;
        const savedBadges = await storage.get('enfetech_badges') as string[] | null;
        const savedLocks = await storage.get('enfetech_lesson_locks') as Record<string, number> | null;
        const savedSrs = await storage.get('enfetech_srs') as Record<string, SRSData> | null;

        if (savedProfile) setProfile(savedProfile);
        if (savedLessons) setCompletedLessons(savedLessons);
        if (savedScenarios) setCompletedScenarios(savedScenarios);
        if (savedBadges) setUnlockedBadges(savedBadges);
        if (savedLocks) setLessonLocks(savedLocks);
        if (savedSrs) setSrsProgress(savedSrs);
      } catch (err) {
        console.error('Erro ao inicializar:', err);
      } finally {
        setIsInitialized(true);
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (isInitialized && profile) {
      storage.set('user_profile', profile);
    }
  }, [profile, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      storage.set('enfetech_lessons', completedLessons);
      storage.set('enfetech_scenarios', completedScenarios);
      storage.set('enfetech_badges', unlockedBadges);
      storage.set('enfetech_lesson_locks', lessonLocks);
      storage.set('enfetech_srs', srsProgress);
    }
  }, [completedLessons, completedScenarios, unlockedBadges, lessonLocks, srsProgress, isInitialized]);

  const exportAppData = () => {
    const backup = {
      version: '1.1',
      timestamp: new Date().toISOString(),
      data: {
        profile,
        lessons: completedLessons,
        scenarios: completedScenarios,
        badges: unlockedBadges,
        locks: lessonLocks,
        srs: srsProgress
      }
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enfetech-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    setShowNotification({
      show: true,
      title: 'Segurança Pronta!',
      subtitle: 'Backup baixado com sucesso no seu dispositivo.',
      type: 'success'
    });
  };

  const handleImportAppData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string;
        const backup = JSON.parse(text);
        
        if (!backup.data || !backup.data.profile) {
          throw new Error('Formato inválido');
        }

        const data = backup.data;
        
        // Update States
        setProfile(data.profile);
        setCompletedLessons(data.lessons || []);
        setCompletedScenarios(data.scenarios || []);
        setUnlockedBadges(data.badges || []);
        setLessonLocks(data.locks || {});
        setSrsProgress(data.srs || {});
        
        // Persist immediately
        await storage.set('enfetech_profile', data.profile);
        await storage.set('enfetech_lessons', data.lessons || []);
        await storage.set('enfetech_scenarios', data.scenarios || []);
        await storage.set('enfetech_badges', data.badges || []);
        await storage.set('enfetech_lesson_locks', data.locks || {});
        await storage.set('enfetech_srs', data.srs || {});

        setShowNotification({
          show: true,
          title: 'Dados Restaurados!',
          subtitle: 'Seu progresso foi recuperado com sucesso.',
          type: 'success'
        });
        
        // Trigger haptics
        triggerHaptic('success');
      } catch (err) {
        setShowNotification({
          show: true,
          title: 'Erro no Backup',
          subtitle: 'Este arquivo não é um backup válido do EnfeTech.',
          type: 'error'
        });
      }
    };
    reader.readAsText(file);
    // Clear input
    event.target.value = '';
  };

  useEffect(() => {
    if (isInitialized) {
      storage.set('enfetech_scenarios', completedScenarios);
    }
  }, [completedScenarios, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      storage.set('enfetech_lesson_locks', lessonLocks);
    }
  }, [lessonLocks, isInitialized]);

  // Dynamic progress calculation
  const dynamicModules = useMemo(() => {
    return MODULES.map(m => {
      const moduleLessons = LESSONS.filter(l => l.moduleId === m.id);
      if (moduleLessons.length === 0) return { ...m, progress: 0 };
      
      const done = moduleLessons.filter(l => completedLessons.includes(l.id)).length;
      return { ...m, progress: Math.round((done / moduleLessons.length) * 100) };
    });
  }, [completedLessons]);

  const addXp = (amount: number) => {
    setProfile(prev => {
      if (!prev) return null;
      const newXp = prev.xp + amount;
      const nextLevelXp = prev.level * 1000;
      
      if (newXp >= nextLevelXp) {
        setShowLevelUp(true);
        playSound('ACHIEVEMENT');
        triggerHaptic('success');
        setTimeout(() => setShowLevelUp(false), 5000);
        setSuccessState({
            show: true,
            type: 'level',
            title: 'Subiu de Nível!',
            subtitle: `Você agora é nível ${prev.level + 1}`
        });
        return { ...prev, xp: newXp - nextLevelXp, level: prev.level + 1 };
      } else {
        triggerHaptic('light');
        return { ...prev, xp: newXp };
      }
    });
  };

  const removeXp = (amount: number, reason: string) => {
    setProfile(prev => {
      if (!prev) return null;
      const newXp = Math.max(0, prev.xp - amount);
      triggerHaptic('error');
      setShowNotification({
        show: true,
        title: 'Penalidade Ética',
        subtitle: `-${amount} XP: ${reason}`,
        type: 'error'
      });
      setTimeout(() => setShowNotification(null), 4000);
      return { ...prev, xp: newXp };
    });
  };

  const reportDeath = () => {
    setProfile(prev => prev ? ({ ...prev, lostPatients: prev.lostPatients + 1 }) : null);
    removeXp(200, 'Evento Adverso Grave (Óbito)');
  };

  const handleBadgeUnlock = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges(prev => [...prev, badgeId]);
      triggerHaptic('medium');
      const badge = BADGES.find(b => b.id === badgeId);
      if (badge) {
        setShowAchievement({
            show: true,
            title: 'Conquista Desbloqueada!',
            subtitle: badge.title,
            icon: Award
        });
        setTimeout(() => setShowAchievement(null), 3000);
      }
    }
  };

  const markLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
      
      const lesson = LESSONS.find(l => l.id === lessonId);
      if (lesson) {
        updateChallengeProgress('lesson', 1, { moduleId: lesson.moduleId });
      }

      if (lessonLocks[lessonId]) {
        const newLocks = { ...lessonLocks };
        delete newLocks[lessonId];
        setLessonLocks(newLocks);
      }

      addXp(100);
      
      const totalDone = completedLessons.length + 1;
      if (totalDone >= 5 && !unlockedBadges.includes('b5')) {
        handleBadgeUnlock('b5');
      }
    }
  };

  const markLessonFailed = (lessonId: string) => {
    const lockUntil = Date.now() + 180000; // 3 minutos
    setLessonLocks(prev => ({
      ...prev,
      [lessonId]: lockUntil
    }));
  };

  const resetAllData = () => {
    try { triggerHaptic('medium'); } catch(e) {}
    setShowResetConfirm(true);
  };

  const executeReset = async () => {
    try {
      await storage.clear();
      // Limpa estados locais
      setProfile(null);
      setCompletedLessons([]);
      setCompletedScenarios([]);
      setUnlockedBadges([]);
      setLessonLocks({});
      setSrsProgress({});
      setShowResetConfirm(false);
      
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error) {
      console.error('Erro ao limpar dados:', error);
      alert('Erro ao limpar dados. Tente fechar e abrir o app.');
    }
  };

  const handleOnboardingComplete = (newProfile: UserProfile) => {
    setProfile({
      ...newProfile,
      hapticsEnabled: true, // Haptics default to ON
      soundsEnabled: false  // Sounds default to OFF
    });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as any);
    triggerHaptic('light');
  };

  const handleSearchResult = (type: string, id: string, extra?: any) => {
    setShowSearch(false);
    switch (type) {
      case 'module':
        {
          const mod = dynamicModules.find(m => m.id === id);
          if (mod) {
            setActiveTab('learn');
            setSelectedModuleForLessons(mod);
          }
        }
        break;
      case 'sim':
        setActiveTab('sim');
        break;
      case 'dictionary':
        setShowDictionary({ show: true, tab: extra === 'escala' ? 'escala' : 'sigla', term: id });
        updateChallengeProgress('dictionary', 1);
        break;
      case 'pop':
        setShowPOPs(true);
        break;
      case 'pill':
        setShowPills(true);
        break;
    }
  };

  if (!isInitialized) {
    return (
      <div className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-text-secondary font-bold text-xs uppercase tracking-widest animate-pulse">Sincronizando Dados...</p>
      </div>
    );
  }

  if (!profile || !profile.onboardingCompleted) {
    return (
      <AnimatePresence>
        <Onboarding onComplete={handleOnboardingComplete} />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pb-24 max-w-md mx-auto relative overflow-x-hidden border-x border-border shadow-2xl bg-bg">
      <SuccessOverlay 
        show={successState.show}
        type={successState.type}
        title={successState.title}
        subtitle={successState.subtitle}
        onClose={() => setSuccessState(prev => ({ ...prev, show: false }))}
      />

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed bottom-28 left-6 right-6 z-[100] px-5 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border ${
              showNotification.type === 'error' ? 'bg-red-500/90 border-red-400 text-white shadow-red-500/20' : 'bg-surface/90 border-border text-text-primary backdrop-blur-xl'
            }`}
          >
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              showNotification.type === 'error' ? 'bg-white/20' : 'bg-accent/10'
            }`}>
               {showNotification.type === 'error' ? <Zap className="w-5 h-5 text-white" /> : <ShieldCheck className="w-5 h-5 text-accent" />}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{showNotification.title}</p>
              <h4 className="font-bold leading-tight">{showNotification.subtitle}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Level Up Notification */}
      <AnimatePresence>
        {showLevelUp && profile && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] bg-warning text-white px-6 py-4 rounded-[32px] shadow-2xl flex items-center gap-3"
          >
            <Award className="w-6 h-6 fill-white" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">Parabéns!</p>
              <p className="text-sm font-bold">Você subiu para o Nível {profile.level}!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Top Header */}
      <header className="p-6 pb-2 sticky top-0 bg-bg/80 backdrop-blur-md z-20 border-b border-border">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-black text-text-primary tracking-tight">EnfeTech</h1>
              <p className="text-sm font-medium text-text-secondary">Olá, {profile?.name || 'Visitante'}!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowSearch(true)}
              className="p-2.5 bg-surface border border-border rounded-2xl text-text-secondary hover:text-accent transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 bg-gradient-to-r from-accent to-[#8E44AD] text-white px-3 py-1.5 rounded-2xl shadow-lg ring-1 ring-white/20">
                < Award className="w-4 h-4 text-white" />
                <span className="text-sm font-bold">Nível {profile?.level || 1}</span>
              </div>
              <span className="text-[9px] font-black uppercase text-accent mt-1 tracking-tighter opacity-80">{getCareerTitle(profile?.level || 1)}</span>
            </div>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5">
            <span>Experiência (XP)</span>
            <span>{profile?.xp || 0} / {(profile?.level || 1) * 1000}</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(profile?.xp / (profile?.level * 1000) || 0) * 100}%` }}
              className="h-full bg-accent rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-4">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Daily Goals Card (Accordion) */}
              <motion.div 
                layout
                onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
                className="bg-gradient-to-br from-[#2D3436] to-[#000000] p-6 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl group cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 blur-[100px] -mr-20 -mt-20 group-hover:bg-accent/40 transition-colors" />
                <div className="relative z-10 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Desafios de Hoje</p>
                    <h3 className="text-2xl font-black text-white italic">Progresso Diário</h3>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                      <Zap className={`w-6 h-6 text-accent fill-accent transition-transform duration-500 ${isChallengesExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isChallengesExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="space-y-4 relative z-10 overflow-hidden"
                    >
                      {profile?.activeChallenges?.map((challenge, idx) => (
                        <div key={challenge.id} className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-white/80">{challenge.title}</span>
                            <span className="text-[10px] font-black text-accent">{challenge.current}/{challenge.target}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${(challenge.current / challenge.target || 0) * 100}%` }}
                              className={`h-full ${challenge.completed ? 'bg-success shadow-[0_0_10px_#2ecc71]' : 'bg-accent shadow-[0_0_10px_#6C5CE7]'}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isChallengesExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 flex gap-2 items-center"
                  >
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Toque para ver missões</p>
                    <div className="flex gap-1">
                      {profile?.activeChallenges?.map(c => (
                        <div key={c.id} className={`w-1.5 h-1.5 rounded-full ${c.completed ? 'bg-success' : 'bg-white/20'}`} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Flashcards" value={FLASHCARDS.length.toString()} icon={Zap} colorClass="bg-warning/10 text-warning" />
                <StatCard label="Procedimentos" value={POPS.length.toString()} icon={Shield} colorClass="bg-success/10 text-success" />
              </div>

              {/* Training Modules Title */}
              <section>
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-xl font-bold tracking-tight text-text-primary">Trilhas Ativas</h2>
                  <button onClick={() => setActiveTab('learn')} className="text-accent text-sm font-bold hover:underline">Ver todas</button>
                </div>
                <div className="grid gap-4">
                  {dynamicModules.filter(m => m.progress < 100).map(m => (
                    <ModuleCard 
                      key={m.id} 
                      module={m} 
                      onClick={() => {
                        setActiveTab('learn');
                        setSelectedModuleForLessons(m);
                      }} 
                    />
                  ))}
                  {dynamicModules.filter(m => m.progress < 100).length === 0 && (
                    <div className="bg-surface p-8 rounded-3xl border border-border text-center">
                      <ShieldCheck className="w-12 h-12 text-success mx-auto mb-3 opacity-50" />
                      <p className="text-text-secondary font-medium">Todas as trilhas concluídas!</p>
                      <button onClick={() => setActiveTab('learn')} className="text-accent text-sm font-bold mt-2">Revisar aulas</button>
                    </div>
                  )}
                </div>
              </section>

              {/* Proactive Suggestion */}
              <section className="bg-surface rounded-3xl p-6 text-white border border-border overflow-hidden relative group">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Simulador de Emergência</h3>
                  <p className="text-text-secondary text-sm mb-4">Teste seus conhecimentos em um cenário real de parada cardiorrespiratória.</p>
                  <button 
                    onClick={() => setActiveTab('sim')}
                    className="bg-accent text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 w-fit active:scale-95 transition-transform"
                  >
                    <CirclePlay className="w-4 h-4" />
                    Iniciar Simulação
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                  <Zap className="w-32 h-32" />
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'sim' && <SimulatorsView 
            completedScenarios={completedScenarios}
            completedLessons={completedLessons}
            stability={stability}
            setStability={setStability}
            simulationTime={simulationTime}
            setSimulationTime={setSimulationTime}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
            onScenarioComplete={(scenario) => {
              if (!completedScenarios.includes(scenario.id)) {
                setCompletedScenarios(prev => [...prev, scenario.id]);
                updateChallengeProgress('scenario', 1, { difficulty: scenario.difficulty });
                addXp(scenario.xpReward);
                setSuccessState({
                  show: true,
                  type: 'lesson',
                  title: 'Missão Cumprida!',
                  subtitle: `Você concluiu o cenário: ${scenario.title}`
                });
              }
            }} 
            onFail={reportDeath} 
            playSound={playSound}
            setShowNotification={setShowNotification}
            triggerHaptic={triggerHaptic}
            onManchesterStart={() => setShowManchesterSim(true)}
            onABGStart={() => setShowABGSim(true)}
            onECGStart={() => setShowECGSim(true)}
            onPumpStart={() => setShowPumpSim(true)}
          />}
          {activeTab === 'learn' && (
            <LearnView 
              selectedModule={selectedModuleForLessons}
              onSelectModule={setSelectedModuleForLessons}
              onBackToModules={() => setSelectedModuleForLessons(null)}
              onOpenLesson={(lesson) => {
                setActiveLesson(lesson);
              }}
              onStartFlashcards={(moduleId?: string) => setShowFlashcards({ show: true, moduleId })} 
              onOpenPills={() => setShowPills(true)}
              completedLessons={completedLessons}
              dynamicModules={dynamicModules}
            />
          )}
          {activeTab === 'tools' && (
            <ToolsView 
              onOpenCalculator={() => {
                setShowCalculator(true);
                updateChallengeProgress('tool', 1);
                addXp(10);
              }} 
              onOpenPOPs={() => {
                setShowPOPs(true);
                updateChallengeProgress('tool', 1);
              }}
              onOpenDictionary={(tab) => {
                setShowDictionary({ show: true, tab });
                updateChallengeProgress('dictionary', 1);
                addXp(5);
              }}
            />
          )}
          {activeTab === 'profile' && profile && (
            <ProfileView 
              xp={profile?.xp || 0} 
              level={profile?.level || 1} 
              name={profile?.name || ''} 
              lostPatients={profile?.lostPatients || 0}
              onReset={() => setShowResetConfirm(true)} 
              onExport={exportAppData}
              onImport={handleImportAppData}
              onToggleSounds={() => {
                setProfile(prev => prev ? ({ ...prev, soundsEnabled: !prev.soundsEnabled }) : null);
              }}
              soundsEnabled={!!profile?.soundsEnabled}
              onToggleHaptics={() => {
                setProfile(prev => prev ? ({ ...prev, hapticsEnabled: !prev.hapticsEnabled }) : null);
              }}
              hapticsEnabled={profile?.hapticsEnabled !== false}
              completedLessons={completedLessons}
              unlockedBadges={unlockedBadges}
            />
          )}
          {showResetConfirm && (
          <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-surface w-full max-w-sm rounded-[32px] p-8 border border-border shadow-2xl space-y-6"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-black text-text-primary">Zerar Progresso?</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Esta ação irá apagar permanentemente todas as suas aulas concluídas, XP, nível e simuladores. <strong>Não pode ser desfeita.</strong>
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <button 
                  onClick={executeReset}
                  className="w-full py-4 bg-red-500 text-white rounded-2xl font-black text-sm shadow-xl shadow-red-500/20 active:scale-95 transition-all"
                >
                  SIM, APAGAR TUDO
                </button>
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="w-full py-4 bg-bg border border-border text-text-primary rounded-2xl font-bold text-sm active:scale-95 transition-all"
                >
                  CANCELAR
                </button>
              </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showCalculator && <DripRateCalculator onClose={() => setShowCalculator(false)} />}
        {showFlashcards.show && (
          <FlashcardDeck 
            moduleId={showFlashcards.moduleId}
            onClose={() => {
              setShowFlashcards({ show: false });
              addXp(50);
            }} 
            onCorrect={(card) => updateChallengeProgress('flashcard', 1, card)}
            completedLessons={completedLessons}
            srsProgress={srsProgress}
            onUpdateSRS={(cardId, newData) => setSrsProgress(prev => ({ ...prev, [cardId]: newData }))}
          />
        )}
        {showPOPs && (
          <POPViewer 
            onClose={() => setShowPOPs(false)} 
            userLevel={profile?.level || 1} 
            completedLessons={completedLessons}
          />
        )}
        {showPills && (
          <PillViewer 
            onClose={() => setShowPills(false)} 
            onPillRead={(p) => addXp(p.duration * 20)} 
          />
        )}
        {showDictionary.show && (
          <DictionaryExplorer 
            onClose={() => setShowDictionary({ show: false, tab: 'sigla' })} 
            initialTab={showDictionary.tab}
            initialTerm={showDictionary.term}
            userLevel={profile?.level || 1}
            completedLessons={completedLessons}
          />
        )}

        {showManchesterSim && (
          <ManchesterSim 
            onClose={() => setShowManchesterSim(false)}
            playSound={playSound}
            triggerHaptic={triggerHaptic}
            onComplete={(xpReward) => {
              addXp(xpReward);
              setShowManchesterSim(false);
              setSuccessState({
                show: true,
                type: 'lesson',
                title: 'Desafio Manchester',
                subtitle: `Você ganhou ${xpReward} XP com sucesso!`
              });
            }}
          />
        )}
        {showABGSim && (
          <ABGSim 
            onClose={() => setShowABGSim(false)}
            playSound={playSound}
            triggerHaptic={triggerHaptic}
            onComplete={(xpReward) => {
              addXp(xpReward);
              setShowABGSim(false);
              if (xpReward > 0) {
                setSuccessState({
                  show: true,
                  type: 'lesson',
                  title: 'Laboratório Concluído',
                  subtitle: `Você ganhou ${xpReward} XP laudando gasometrias!`
                });
              }
            }}
          />
        )}
        {showECGSim && (
          <ECGSim 
            onClose={() => setShowECGSim(false)}
            playSound={playSound}
            triggerHaptic={triggerHaptic}
            onComplete={(xpReward) => {
              addXp(xpReward);
              setShowECGSim(false);
              if (xpReward > 0) {
                setSuccessState({
                  show: true,
                  type: 'lesson',
                  title: 'Treino de Arritmias',
                  subtitle: `Você ganhou ${xpReward} XP salvando vidas!`
                });
              }
            }}
          />
        )}
        {showPumpSim && (
          <PumpSim 
            onClose={() => setShowPumpSim(false)}
            playSound={playSound}
            triggerHaptic={triggerHaptic}
            onComplete={(xpReward) => {
              addXp(xpReward);
              setShowPumpSim(false);
              if (xpReward > 0) {
                setSuccessState({
                  show: true,
                  type: 'lesson',
                  title: 'Farmacologia Prática',
                  subtitle: `Você obteve ${xpReward} XP calculando infusões!`
                });
              }
            }}
          />
        )}
        {showSearch && (
          <GlobalSearch 
            onClose={() => setShowSearch(false)} 
            onSelectResult={handleSearchResult} 
          />
        )}
        {activeLesson && (
          <LessonViewer 
            lesson={activeLesson}
            onClose={() => setActiveLesson(null)}
            onComplete={() => markLessonComplete(activeLesson.id)}
            onFail={() => markLessonFailed(activeLesson.id)}
            onTermClick={(term) => setShowDictionary({ show: true, tab: 'sigla', term })}
            completed={completedLessons.includes(activeLesson.id)}
            lockUntil={lessonLocks[activeLesson.id]}
            isFirst={LESSONS.filter(l => l.moduleId === activeLesson.moduleId).indexOf(activeLesson) === 0}
            isLast={LESSONS.filter(l => l.moduleId === activeLesson.moduleId).indexOf(activeLesson) === LESSONS.filter(l => l.moduleId === activeLesson.moduleId).length - 1}
            onNext={() => {
              const modLessons = LESSONS.filter(l => l.moduleId === activeLesson.moduleId);
              const idx = modLessons.indexOf(activeLesson);
              if (idx < modLessons.length - 1) setActiveLesson(modLessons[idx + 1]);
            }}
            onPrev={() => {
              const modLessons = LESSONS.filter(l => l.moduleId === activeLesson.moduleId);
              const idx = modLessons.indexOf(activeLesson);
              if (idx > 0) setActiveLesson(modLessons[idx - 1]);
            }}
          />
        )}
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed top-12 left-6 right-6 z-[100] bg-surface/90 backdrop-blur-2xl border border-accent/30 p-4 rounded-3xl shadow-2xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20">
              <showAchievement.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-0.5">{showAchievement.title}</p>
              <h4 className="font-bold text-text-primary leading-none">{showAchievement.subtitle}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] bg-surface/90 backdrop-blur-xl border border-border shadow-2xl rounded-3xl p-2 z-50 flex justify-between items-center transition-all">
        {[
          { id: 'home', icon: LayoutDashboard, label: 'Início' },
          { id: 'learn', icon: BookOpen, label: 'Aulas' },
          { id: 'sim', icon: Zap, label: 'Simular' },
          { id: 'tools', icon: Calculator, label: 'Ferramentas' },
          { id: 'profile', icon: User, label: 'Perfil' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`flex flex-col items-center gap-1 flex-1 py-3 transition-colors relative ${activeTab === item.id ? 'text-accent' : 'text-text-secondary'}`}
          >
            <item.icon className={`w-5 h-5 z-10 ${activeTab === item.id ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest z-10">{item.label}</span>
            {activeTab === item.id && (
              <motion.div 
                layoutId="nav-pill" 
                className="absolute inset-0 bg-accent/10 rounded-2xl m-1" 
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

// Sub-components
function ToolsView({ onOpenCalculator, onOpenPOPs, onOpenDictionary }: { onOpenCalculator: () => void, onOpenPOPs: () => void, onOpenDictionary: (tab: 'sigla' | 'escala') => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">Ferramentas Pro</h2>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onOpenCalculator}
          className="flex flex-col items-center gap-3 p-6 bg-surface border border-border rounded-3xl shadow-sm hover:border-accent transition-all active:scale-95"
        >
          <Calculator className="w-8 h-8 text-accent" />
          <span className="font-bold text-sm text-text-primary">Gotejamento</span>
        </button>
        <button 
          onClick={() => onOpenDictionary('escala')}
          className="flex flex-col items-center gap-3 p-6 bg-surface border border-border rounded-3xl shadow-sm hover:border-accent transition-all active:scale-95"
        >
          <Search className="w-8 h-8 text-accent" />
          <span className="font-bold text-sm text-text-primary">Escalas Pro</span>
        </button>
        <button 
          onClick={() => onOpenDictionary('sigla')}
          className="flex flex-col items-center gap-3 p-6 bg-surface border border-border rounded-3xl shadow-sm hover:border-accent transition-all active:scale-95"
        >
          <BookOpen className="w-8 h-8 text-accent" />
          <span className="font-bold text-sm text-text-primary">Siglas</span>
        </button>
        <button 
          onClick={onOpenPOPs}
          className="flex flex-col items-center gap-3 p-6 bg-surface border border-border rounded-3xl shadow-sm hover:border-accent transition-all active:scale-95"
        >
          <Shield className="w-8 h-8 text-accent" />
          <span className="font-bold text-sm text-text-primary">POP Digital</span>
        </button>
      </div>
    </div>
  );
}

// Sub-components
function LearnView({ 
  onStartFlashcards, 
  onOpenPills, 
  selectedModule, 
  onSelectModule, 
  onBackToModules,
  onOpenLesson,
  completedLessons,
  dynamicModules
}: { 
  onStartFlashcards: (modId?: string) => void, 
  onOpenPills: () => void,
  selectedModule: Module | null,
  onSelectModule: (m: Module) => void,
  onBackToModules: () => void,
  onOpenLesson: (l: Lesson) => void,
  completedLessons: string[],
  dynamicModules: any[]
}) {
  const modLessons = selectedModule ? LESSONS.filter(l => l.moduleId === selectedModule.id) : [];

  if (selectedModule) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackToModules}
            className="p-2 bg-surface rounded-xl border border-border text-text-secondary"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-black text-text-primary tracking-tight">{selectedModule.title}</h2>
            <p className="text-xs text-text-secondary font-bold uppercase tracking-widest">Currículo de Aulas</p>
          </div>
        </div>

        <div className="space-y-3">
          {modLessons.length > 0 ? (
            modLessons.map((l, idx) => {
              const isCompleted = completedLessons.includes(l.id);
              const isLocked = !isCompleted && modLessons.slice(0, idx).some(prev => !completedLessons.includes(prev.id));
              return (
                <button
                  key={l.id}
                  onClick={() => !isLocked && onOpenLesson(l)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${isLocked ? 'bg-bg/50 border-dashed border-border opacity-60 grayscale' : 'bg-surface border-border group hover:border-accent'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-colors ${isLocked ? 'bg-border text-text-secondary' : 'bg-bg text-accent group-hover:bg-accent group-hover:text-white'}`}>
                    {idx + 1}
                  </div>
                  <div className="text-left flex-1">
                    <h4 className={`font-bold ${isLocked ? 'text-text-secondary' : 'text-text-primary'}`}>{l.title}</h4>
                    <p className="text-xs text-text-secondary">
                      {isLocked ? '🔒 Bloqueada' : (completedLessons.includes(l.id) ? '✅ Concluída' : '📖 Disponível • 100 XP')}
                    </p>
                  </div>
                  {!isLocked && <ChevronRight className="w-5 h-5 text-text-secondary" />}
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center bg-surface rounded-3xl border border-border italic text-text-secondary">
              Conteúdo em desenvolvimento para este módulo.
            </div>
          )}
        </div>

        <div className="pt-4">
          <button 
            onClick={() => onStartFlashcards(selectedModule.id)}
            className="w-full py-4 bg-bg border border-border rounded-2xl font-bold text-accent flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4 fill-accent" />
            Praticar Flashcards do Módulo
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">Microlearning</h2>
      
      <div className="bg-accent p-6 rounded-[32px] text-white shadow-xl shadow-accent/20 relative overflow-hidden group active:scale-[0.98] transition-all cursor-pointer" onClick={onOpenPills}>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 fill-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Pílulas de Conhecimento</span>
          </div>
          <h3 className="text-xl font-black mb-1">Dose rápida de teoria</h3>
          <p className="text-white/70 text-sm">Leituras de 2 a 5 minutos para o seu plantão.</p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
           <Zap className="w-32 h-32" />
        </div>
      </div>

      <div className="bg-surface border border-border p-6 rounded-3xl">
        <h3 className="font-bold text-text-primary mb-2">Flashcards Geral</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">Fortaleça sua memória de longo prazo com revisões rápidas.</p>
        <button 
          onClick={() => onStartFlashcards()}
          className="bg-bg text-text-primary border border-border px-6 py-3 rounded-2xl font-bold text-sm w-full hover:bg-surface-hover active:scale-95 transition-all"
        >
          Praticar Agora
        </button>
      </div>

      <div className="space-y-3 pb-8">
        <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary px-2">Disciplinas Acadêmicas</p>
        {MODULES.map(m => {
          const modWithProgress = dynamicModules.find(mod => mod.id === m.id);
          return (
            <div 
              key={m.id} 
              onClick={() => onSelectModule(m)}
              className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-border shadow-sm cursor-pointer hover:bg-surface-hover transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bg group-hover:bg-accent/10 flex items-center justify-center rounded-xl transition-colors">
                  <BookOpen className="w-5 h-5 text-text-secondary group-hover:text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text-primary block">{m.title}</span>
                  <span className="text-[10px] font-bold text-accent">{modWithProgress?.progress || 0}% concluído</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SimulatorsView({ 
  completedScenarios, 
  completedLessons, 
  stability, 
  setStability, 
  simulationTime, 
  setSimulationTime, 
  timerActive, 
  setTimerActive, 
  onScenarioComplete, 
  onFail,
  playSound,
  setShowNotification,
  triggerHaptic,
  onManchesterStart,
  onABGStart,
  onECGStart,
  onPumpStart
}: { 
  completedScenarios: string[], 
  completedLessons: string[], 
  stability: number, 
  setStability: (s: number) => void, 
  simulationTime: number, 
  setSimulationTime: (t: number) => void, 
  timerActive: boolean, 
  setTimerActive: (a: boolean) => void, 
  onScenarioComplete: (s: Scenario) => void, 
  onFail: () => void,
  playSound: (type: keyof typeof SOUNDS) => void,
  setShowNotification: (notif: any) => void,
  triggerHaptic: (type: any) => void,
  onManchesterStart: () => void,
  onABGStart: () => void,
  onECGStart: () => void,
  onPumpStart: () => void
}) {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [currentStepId, setCurrentStepId] = useState<string | null>(null);
  const [result, setResult] = useState<{ feedback: string; isCorrect: boolean } | null>(null);

  const currentStep = activeScenario?.steps.find(s => s.id === currentStepId);

  const startScenario = (scenario: Scenario) => {
    setActiveScenario(scenario);
    setCurrentStepId(scenario.steps[0].id);
    setResult(null);
    setStability(100);
    setSimulationTime(0);
    setTimerActive(true);
  };

  // Handle passive failure (stability reaches 0 via decay)
  useEffect(() => {
    if (activeScenario?.useStability && stability <= 0 && !result) {
      setResult({ 
        feedback: "O paciente entrou em colapso devido à demora ou sucessão de erros.", 
        isCorrect: false 
      });
      playSound('GAMEOVER');
    }
  }, [stability, activeScenario, result]);

  const filteredScenarios = SCENARIOS.filter(s => {
    const notCompleted = !completedScenarios.includes(s.id);
    const isUnlocked = !s.requiredLessonId || completedLessons.includes(s.requiredLessonId);
    return notCompleted && isUnlocked;
  });

  return (
    <div className="space-y-8">
      <div>
         <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-4">Simuladores Clínicos</h2>
         <p className="text-sm text-text-secondary leading-relaxed">Laboratórios práticos para aprimorar sua tomada de decisão em tempo real.</p>
      </div>
      
      {!activeScenario && (
        <div className="space-y-6">
          {/* Seção 1: Urgência */}
          <div className="space-y-4">
             <h3 className="text-xs font-black uppercase tracking-widest text-[#6366f1] flex items-center gap-2">
                <Shield className="w-4 h-4" /> Pronto-Socorro
             </h3>
             <div 
               onClick={onManchesterStart}
               className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-[32px] text-white shadow-xl shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer group"
             >
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                 <Shield className="w-24 h-24" />
               </div>
               <div className="relative z-10 flex flex-col gap-3">
                 <div className="flex items-center gap-2">
                   <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md">Urgência</span>
                 </div>
                 <div>
                   <h3 className="text-xl font-black mb-1">Classificação de Risco</h3>
                   <p className="text-white/80 text-xs">Treine a triagem Manchester sob pressão.</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Seção 2: Equipamentos UTI */}
          <div className="space-y-4">
             <h3 className="text-xs font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                <HeartPulse className="w-4 h-4" /> UTI e Aparelhos
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div 
                 onClick={onECGStart}
                 className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-[32px] text-white shadow-xl active:scale-95 transition-all cursor-pointer group border border-emerald-500/20"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                   <HeartPulse className="w-24 h-24" />
                 </div>
                 <div className="relative z-10 flex flex-col gap-3">
                   <div className="flex items-center gap-2">
                     <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Cardiologia</span>
                   </div>
                   <div>
                     <h3 className="text-xl font-black mb-1">Monitor de ECG</h3>
                     <p className="text-slate-400 text-xs">Diagnóstico de ritmos cardíacos da UTI.</p>
                   </div>
                 </div>
               </div>

               <div 
                 onClick={onPumpStart}
                 className="relative overflow-hidden bg-gradient-to-br from-[#1e2a35] to-[#2d3f50] p-6 rounded-[32px] text-white shadow-xl active:scale-95 transition-all cursor-pointer group border border-blue-500/30"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform text-blue-400">
                   <Droplet className="w-24 h-24" />
                 </div>
                 <div className="relative z-10 flex flex-col gap-3">
                   <div className="flex items-center gap-2">
                     <span className="bg-blue-500/30 text-blue-300 border border-blue-500/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Bomba</span>
                   </div>
                   <div>
                     <h3 className="text-xl font-black mb-1">Infusão Contínua</h3>
                     <p className="text-blue-100/70 text-xs">Cálculo e programação de BICs.</p>
                   </div>
                 </div>
               </div>
               
               <div 
                 onClick={onABGStart}
                 className="relative overflow-hidden bg-gradient-to-br from-amber-600 to-orange-800 p-6 rounded-[32px] text-white shadow-xl shadow-orange-500/20 active:scale-95 transition-all cursor-pointer group md:col-span-2"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                   <Beaker className="w-24 h-24" />
                 </div>
                 <div className="relative z-10 flex flex-col gap-3">
                   <div className="flex items-center gap-2">
                     <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md">Exames</span>
                   </div>
                   <div>
                     <h3 className="text-xl font-black mb-1">Gasometria Arterial</h3>
                     <p className="text-white/80 text-xs">Identifique alcalose e acidose instantaneamente.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}

      {!activeScenario ? (
        <div className="space-y-4 pt-6 mt-6 border-t border-border">
          <h3 className="text-xs font-black uppercase tracking-widest text-text-secondary flex items-center gap-2 mb-4">
             <Stethoscope className="w-4 h-4" /> Casos Completos Reais
          </h3>
          {filteredScenarios.slice(0, 2).map(s => (
            <div key={s.id} className="bg-surface p-5 rounded-3xl border border-border shadow-sm group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-text-primary">{s.title}</h3>
                <span className="text-[10px] font-black text-accent bg-accent/10 px-2 py-1 rounded">{s.difficulty}</span>
              </div>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">{s.description}</p>
              <button 
                onClick={() => startScenario(s)}
                className="w-full bg-accent text-white py-3 rounded-2xl font-bold text-sm hover:bg-accent/80 transition-colors shadow-lg shadow-accent/20"
              >
                Atender Paciente
              </button>
            </div>
          ))}
          {filteredScenarios.length === 0 && (
            <div className="bg-surface p-8 rounded-3xl border border-border text-center">
              <Award className="w-12 h-12 text-warning mx-auto mb-3" />
              <p className="text-text-secondary font-bold">
                {SCENARIOS.filter(s => !completedScenarios.includes(s.id)).length > 0 
                  ? 'Complete as aulas teóricas para liberar novos simuladores práticos.'
                  : 'Todos os cenários concluídos!'}
              </p>
              <p className="text-xs text-text-secondary mt-1">O conhecimento precede a prática.</p>
            </div>
          )}
        </div>
      ) : result ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-8 rounded-[40px] border border-border text-center space-y-6 relative overflow-hidden"
        >
          {!result.isCorrect && <div className="absolute inset-0 bg-red-500/5 animate-pulse" />}
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center relative z-10 ${result.isCorrect ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
            {result.isCorrect ? <Award className="w-10 h-10" /> : <Shield className="w-10 h-10" />}
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-2">{result.isCorrect ? 'Excelente Conduta!' : 'Atenção aos Riscos'}</h3>
            <p className="text-text-secondary leading-relaxed">{result.feedback}</p>
          </div>
          <button 
            onClick={() => {
              const prevActive = activeScenario;
              setActiveScenario(null);
              setResult(null);
              setStability(100);
              setTimerActive(false);
              if (result.isCorrect && prevActive) {
                onScenarioComplete(prevActive);
              } else {
                onFail();
              }
            }}
            className={`w-full py-4 rounded-2xl font-bold transition-all hover:shadow-lg active:scale-95 relative z-10 ${result.isCorrect ? 'bg-accent text-white shadow-accent/20' : 'bg-warning text-white shadow-warning/20'}`}
          >
            {result.isCorrect ? 'Finalizar Simulação' : 'Tentar Novamente'}
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-6 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden"
        >
          {/* Stability Bar */}
          {activeScenario.useStability && (
            <>
              <div className="absolute top-0 left-0 right-0 h-1 bg-border">
                <motion.div 
                  initial={{ width: '100%' }}
                  animate={{ width: `${stability}%` }}
                  className={`h-full ${stability > 50 ? 'bg-success' : stability > 20 ? 'bg-warning' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'}`}
                />
              </div>

              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                   <Activity className={`w-4 h-4 ${stability > 50 ? 'text-success' : 'text-red-500 animate-pulse'}`} />
                   <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Estabilidade: {stability}%</span>
                </div>
                <div className="flex items-center gap-2 text-warning">
                  <Timer className="w-4 h-4" />
                  <span className="text-xs font-bold tabular-nums">{Math.floor(simulationTime / 60)}:{(simulationTime % 60).toString().padStart(2, '0')}</span>
                </div>
              </div>
            </>
          )}
          
          <div className={`${activeScenario.useStability ? 'space-y-4' : 'pt-4 space-y-4'}`}>
            <h3 className="text-xl font-black leading-tight text-text-primary">{currentStep?.description}</h3>
            <div className="space-y-3">
              {currentStep?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const isCorrect = opt.isCorrect;
                    
                    if (!isCorrect) {
                      if (activeScenario.useStability) {
                        const penalty = 30; // 30% penalty
                        const newStability = Math.max(0, stability - penalty);
                        setStability(newStability);
                        
                        if (newStability <= 0) {
                          setResult({ feedback: "O paciente entrou em colapso devido a condutas inadequadas.", isCorrect: false });
                          playSound('GAMEOVER');
                          return;
                        }

                        // Se não for um erro fatal (isEnding), dá outra chance no mesmo passo
                        if (!opt.isEnding) {
                           setShowNotification({
                             show: true,
                             title: 'Conduta Inadequada',
                             subtitle: 'A estabilidade do paciente caiu, mas você ainda pode agir!',
                             type: 'error'
                           });
                           setTimeout(() => setShowNotification(null), 3000);
                           playSound('WRONG');
                           triggerHaptic('error');
                           return; 
                        }
                      }
                    }

                    if (opt.isEnding || !opt.nextStepId) {
                      setResult({ feedback: opt.feedback, isCorrect: isCorrect });
                      if (isCorrect) playSound('CORRECT');
                      else playSound('WRONG');
                    } else {
                      setCurrentStepId(opt.nextStepId);
                    }
                  }}
                  className="w-full text-left p-4 rounded-2xl border border-border hover:border-accent hover:bg-surface-hover transition-all font-medium text-text-primary group flex justify-between items-center"
                >
                   <span>{opt.text}</span>
                   <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function ProfileView({ 
  xp, 
  level, 
  name, 
  lostPatients, 
  onReset, 
  onExport,
  onImport,
  onToggleSounds,
  soundsEnabled,
  onToggleHaptics,
  hapticsEnabled,
  completedLessons, 
  unlockedBadges 
}: { 
  xp: number, 
  level: number, 
  name: string, 
  lostPatients: number, 
  onReset?: () => void, 
  onExport: () => void,
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onToggleSounds: () => void,
  soundsEnabled: boolean,
  onToggleHaptics: () => void,
  hapticsEnabled: boolean,
  completedLessons: string[], 
  unlockedBadges: string[] 
}) {
  const stats = [
    { label: 'Total XP', value: xp, icon: Zap },
    { label: 'Aulas Lidas', value: completedLessons.length, icon: ShieldCheck },
    { label: 'Conquistas', value: unlockedBadges.length, icon: Award },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl ring-4 ring-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          {name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-text-primary">{name}</h2>
          <div className="flex flex-col items-center gap-1">
            <p className="text-text-secondary font-medium lowercase">@{name.toLowerCase().replace(/\s+/g, '.')}</p>
            <span className="text-[10px] font-black uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mt-1 border border-accent/20">
              {getCareerTitle(level)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-red-500/5 p-6 rounded-[32px] border border-red-500/20 flex justify-between items-center group">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">Pacientes Perdidos</p>
            <p className="text-3xl font-black text-red-600 leading-none">{lostPatients}</p>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Zap className="w-8 h-8 text-red-500" />
          </motion.div>
        </div>
      </div>

      <section>
        <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-3 px-1">Estatísticas Gerais</p>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-surface border border-border p-4 rounded-3xl">
              <s.icon className="w-5 h-5 text-accent mb-2" />
              <p className="text-xl font-black text-text-primary">{s.value}</p>
              <p className="text-xs text-text-secondary font-bold uppercase tracking-tighter">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-3 px-1">Conquistas Recentes</p>
        <div className="grid grid-cols-2 gap-3">
          {BADGES.slice(0, 4).map(b => {
             const isUnlocked = unlockedBadges.includes(b.id);
             return (
              <div key={b.id} className={`p-4 rounded-2xl border flex flex-col items-center text-center gap-2 ${isUnlocked ? 'bg-surface border-accent/30 shadow-sm opacity-100' : 'bg-bg border-border opacity-50'}`}>
                <div className={`p-2 rounded-lg ${isUnlocked ? 'bg-warning/10 text-warning' : 'bg-border text-text-secondary'}`}>
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tight text-text-primary">{b.title}</span>
                {isUnlocked && <span className="text-[8px] font-bold text-success uppercase">Desbloqueado</span>}
              </div>
             );
          })}
        </div>
      </section>

      <section>
        <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-3 px-1">Preferências</p>
        <button 
          onClick={onToggleSounds}
          className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-2xl hover:border-accent transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${soundsEnabled ? 'bg-accent/10 text-accent' : 'bg-text-secondary/10 text-text-secondary'} rounded-xl flex items-center justify-center`}>
              {soundsEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-text-primary">Efeitos Sonoros</p>
              <p className="text-[10px] text-text-secondary">{soundsEnabled ? 'Sons ativos para uma melhor imersão' : 'Sons desativados'}</p>
            </div>
          </div>
          <div className={`w-10 h-6 rounded-full relative transition-colors ${soundsEnabled ? 'bg-accent' : 'bg-border'}`}>
            <motion.div 
              animate={{ x: soundsEnabled ? 18 : 2 }}
              className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
            />
          </div>
        </button>

        <button 
          onClick={onToggleHaptics}
          className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-2xl hover:border-accent transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${hapticsEnabled ? 'bg-accent/10 text-accent' : 'bg-text-secondary/10 text-text-secondary'} rounded-xl flex items-center justify-center`}>
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-text-primary">Resposta Tátil</p>
              <p className="text-[10px] text-text-secondary">{hapticsEnabled ? 'Sentir vibrações ao interagir' : 'Vibrações desativadas'}</p>
            </div>
          </div>
          <div className={`w-10 h-6 rounded-full relative transition-colors ${hapticsEnabled ? 'bg-accent' : 'bg-border'}`}>
            <motion.div 
              animate={{ x: hapticsEnabled ? 18 : 2 }}
              className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
            />
          </div>
        </button>
      </section>

      <section>
        <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-3 px-1">Gestão de Dados</p>
        <div className="space-y-3">
          <button 
            onClick={onExport}
            className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-2xl hover:border-accent transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <Download className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-text-primary">Exportar Backup</p>
                <p className="text-[10px] text-text-secondary">Salvar progresso em um arquivo JSON</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </button>

          <label className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-2xl hover:border-accent transition-all group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success">
                <Upload className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-text-primary">Restaurar Backup</p>
                <p className="text-[10px] text-text-secondary">Carregar dados de um arquivo salvo</p>
              </div>
            </div>
            <input type="file" accept=".json" onChange={onImport} className="hidden" />
            <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-success group-hover:translate-x-1 transition-all" />
          </label>
        </div>
      </section>

      {onReset && (
        <button 
          onClick={onReset}
          className="w-full mt-10 py-4 bg-surface border border-error/20 text-error rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-error/5 transition-colors"
        >
          Zerar Banco de Dados
        </button>
      )}
    </div>
  );
}
