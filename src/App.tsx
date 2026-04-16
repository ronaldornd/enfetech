/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
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
  CirclePlay
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
} from './data';
import { Module, Scenario, Flashcard as FlashcardType, Lesson } from './types';
import DripRateCalculator from './components/DripRateCalculator';
import FlashcardDeck from './components/FlashcardDeck';
import POPViewer from './components/POPViewer';
import DictionaryExplorer from './components/DictionaryExplorer';
import PillViewer from './components/PillViewer';
import GlobalSearch from './components/GlobalSearch';
import LessonViewer from './components/LessonViewer';

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
      default: return BookOpen;
    }
  }, [module.icon]);

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-left bg-surface p-5 rounded-3xl shadow-sm border border-border group transition-all hover:border-accent hover:bg-surface-hover"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-bg rounded-2xl group-hover:bg-accent/10 transition-colors">
          <Icon className="w-6 h-6 text-text-secondary group-hover:text-accent" />
        </div>
        <div className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">
          {module.progress}%
        </div>
      </div>
      <h3 className="font-bold text-lg mb-1 text-text-primary">{module.title}</h3>
      <p className="text-sm text-text-secondary line-clamp-2">{module.description}</p>
      
      <div className="mt-4 w-full bg-bg h-1.5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${module.progress}%` }}
          className="bg-accent h-full rounded-full"
        />
      </div>
    </motion.button>
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
  const [showDictionary, setShowDictionary] = useState<{ show: boolean, tab: 'sigla' | 'escala' }>({ show: false, tab: 'sigla' });
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [selectedModuleForLessons, setSelectedModuleForLessons] = useState<Module | null>(null);
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(5);

  const addXp = (amount: number) => {
    const newXp = xp + amount;
    if (newXp >= level * 1000) {
      setLevel(level + 1);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }
    setXp(newXp);
  };

  const handleSearchResult = (type: string, id: string, extra?: any) => {
    setShowSearch(false);
    switch (type) {
      case 'module':
        {
          const mod = MODULES.find(m => m.id === id);
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
        setShowDictionary({ show: true, tab: extra === 'escala' ? 'escala' : 'sigla' });
        break;
      case 'pop':
        setShowPOPs(true);
        break;
      case 'pill':
        setShowPills(true);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pb-24 max-w-md mx-auto relative overflow-x-hidden border-x border-border shadow-2xl bg-bg">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Level Up Notification */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] bg-warning text-white px-6 py-4 rounded-[32px] shadow-2xl flex items-center gap-3"
          >
            <Award className="w-6 h-6 fill-white" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">Parabéns!</p>
              <p className="text-sm font-bold">Você subiu para o Nível {level}!</p>
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
              <p className="text-sm font-medium text-text-secondary">Olá, Ronaldo!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowSearch(true)}
              className="p-2.5 bg-surface border border-border rounded-2xl text-text-secondary hover:text-accent transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 bg-accent text-white px-3 py-1.5 rounded-2xl shadow-lg">
              <Award className="w-4 h-4 text-white" />
              <span className="text-sm font-bold">Nível {level}</span>
            </div>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5">
            <span>Experiência (XP)</span>
            <span>{xp} / 2000</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(xp / 2000) * 100}%` }}
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
              {/* Daily Goals */}
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Flashcards" value={FLASHCARDS.length.toString()} icon={Zap} colorClass="bg-warning/10 text-warning" />
                <StatCard label="Procedimentos" value={POPS.length.toString()} icon={Shield} colorClass="bg-success/10 text-success" />
              </div>

              {/* Training Modules Title */}
              <section>
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-xl font-bold tracking-tight text-text-primary">Trilhas de Estudo</h2>
                  <button className="text-accent text-sm font-bold hover:underline">Ver tudo</button>
                </div>
                <div className="grid gap-4">
                  {MODULES.map(m => (
                    <ModuleCard 
                      key={m.id} 
                      module={m} 
                      onClick={() => {
                        setActiveTab('learn');
                        setSelectedModuleForLessons(m);
                      }} 
                    />
                  ))}
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

          {activeTab === 'sim' && <SimulatorsView onFinish={() => addXp(200)} />}
          {activeTab === 'learn' && (
            <LearnView 
              selectedModule={selectedModuleForLessons}
              onSelectModule={setSelectedModuleForLessons}
              onBackToModules={() => setSelectedModuleForLessons(null)}
              onOpenLesson={(lesson) => {
                setActiveLesson(lesson);
                addXp(100);
              }}
              onStartFlashcards={(moduleId?: string) => setShowFlashcards({ show: true, moduleId })} 
              onOpenPills={() => setShowPills(true)}
            />
          )}
          {activeTab === 'tools' && (
            <ToolsView 
              onOpenCalculator={() => {
                setShowCalculator(true);
                addXp(10);
              }} 
              onOpenPOPs={() => setShowPOPs(true)}
              onOpenDictionary={(tab) => {
                setShowDictionary({ show: true, tab });
                addXp(5);
              }}
            />
          )}
          {activeTab === 'profile' && <ProfileView xp={xp} level={level} />}
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
          />
        )}
        {showPOPs && <POPViewer onClose={() => setShowPOPs(false)} />}
        {showPills && (
          <PillViewer 
            onClose={() => setShowPills(false)} 
            onPillRead={(p) => addXp(p.duration * 20)} 
          />
        )}
        {showDictionary.show && (
          <DictionaryExplorer 
            onClose={() => setShowDictionary({ ...showDictionary, show: false })} 
            initialTab={showDictionary.tab}
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
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center gap-1 flex-1 py-3 transition-colors ${activeTab === item.id ? 'text-accent' : 'text-text-secondary'}`}
          >
            <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            {activeTab === item.id && (
              <motion.div layoutId="nav-indicator" className="w-1 h-1 bg-accent rounded-full" />
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
  onOpenLesson
}: { 
  onStartFlashcards: (modId?: string) => void, 
  onOpenPills: () => void,
  selectedModule: Module | null,
  onSelectModule: (m: Module) => void,
  onBackToModules: () => void,
  onOpenLesson: (l: Lesson) => void
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
            modLessons.map((l, idx) => (
              <button
                key={l.id}
                onClick={() => onOpenLesson(l)}
                className="w-full flex items-center gap-4 p-4 bg-surface rounded-2xl border border-border group hover:border-accent transition-all"
              >
                <div className="w-10 h-10 bg-bg rounded-xl flex items-center justify-center font-black text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-text-primary">{l.title}</h4>
                  <p className="text-xs text-text-secondary">Aula Completa • 100 XP</p>
                </div>
                <ChevronRight className="w-5 h-5 text-text-secondary" />
              </button>
            ))
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
        {MODULES.map(m => (
          <div 
            key={m.id} 
            onClick={() => onSelectModule(m)}
            className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-border shadow-sm cursor-pointer hover:bg-surface-hover transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-bg group-hover:bg-accent/10 flex items-center justify-center rounded-xl transition-colors">
                <BookOpen className="w-5 h-5 text-text-secondary group-hover:text-accent" />
              </div>
              <span className="font-bold text-text-primary">{m.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-text-secondary" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SimulatorsView({ onFinish }: { onFinish: () => void }) {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [currentStepId, setCurrentStepId] = useState<string | null>(null);
  const [result, setResult] = useState<{ feedback: string; isCorrect: boolean } | null>(null);

  const startScenario = (scenario: Scenario) => {
    setActiveScenario(scenario);
    setCurrentStepId(scenario.initialStepId);
    setResult(null);
  };

  const currentStep = activeScenario && currentStepId ? activeScenario.steps[currentStepId] : null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">Simuladores Clínicos</h2>
      
      {!activeScenario ? (
        <div className="space-y-4">
          {SCENARIOS.map(s => (
            <div key={s.id} className="bg-surface p-5 rounded-3xl border border-border shadow-sm group">
              <h3 className="font-bold text-lg mb-2 text-text-primary">{s.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{s.description}</p>
              <button 
                onClick={() => startScenario(s)}
                className="w-full bg-accent text-white py-3 rounded-2xl font-bold text-sm hover:bg-accent/80 transition-colors"
              >
                Atender Paciente
              </button>
            </div>
          ))}
        </div>
      ) : result ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-8 rounded-[40px] border border-border text-center space-y-6"
        >
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${result.isCorrect ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
            {result.isCorrect ? <Award className="w-10 h-10" /> : <Shield className="w-10 h-10" />}
          </div>
          <div>
            <h3 className="text-2xl font-black mb-2">{result.isCorrect ? 'Excelente Conduta!' : 'Atenção aos Riscos'}</h3>
            <p className="text-text-secondary leading-relaxed">{result.feedback}</p>
          </div>
          <button 
            onClick={() => {
              setActiveScenario(null);
              setResult(null);
              if (result.isCorrect) onFinish();
            }}
            className="w-full bg-accent text-white py-4 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 active:scale-95"
          >
            Finalizar Simulação
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-6 rounded-3xl border-2 border-accent shadow-2xl space-y-6"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">Simulação Ativa</span>
            <button onClick={() => setActiveScenario(null)} className="text-text-secondary font-bold hover:text-text-primary">Sair</button>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-black leading-tight text-text-primary">{currentStep?.text}</h3>
            <div className="space-y-3">
              {currentStep?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (opt.isEnding || !opt.nextStepId) {
                      setResult({ feedback: opt.feedback, isCorrect: opt.isCorrect });
                    } else {
                      setCurrentStepId(opt.nextStepId);
                    }
                  }}
                  className="w-full text-left p-4 rounded-2xl border border-border hover:border-accent hover:bg-surface-hover transition-all font-medium text-text-primary"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function ProfileView({ xp, level }: { xp: number, level: number }) {
  const stats = [
    { label: 'Total XP', value: xp, icon: Zap },
    { label: 'POPs Lidos', value: POPS.length, icon: ShieldCheck },
    { label: 'Flashcards', value: FLASHCARDS.length, icon: BookOpen },
    { label: 'Pílulas', value: PILLS.length, icon: CirclePlay },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl ring-4 ring-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          RF
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-text-primary">Ronaldo Firmesa</h2>
          <p className="text-text-secondary font-medium lowercase">@ronaldo.firmesa</p>
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
          {BADGES.map(b => (
            <div key={b.id} className={`p-4 rounded-2xl border flex flex-col items-center text-center gap-2 ${b.unlocked ? 'bg-surface border-border shadow-sm opacity-100' : 'bg-bg border-border opacity-50'}`}>
              <div className={`p-2 rounded-lg ${b.unlocked ? 'bg-warning/10 text-warning' : 'bg-border text-text-secondary'}`}>
                {b.id === 'b1' ? <Calculator className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-text-primary">{b.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
