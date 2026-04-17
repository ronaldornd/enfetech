import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ChevronRight, BookOpen, Zap, Shield, Hash, Calculator, CirclePlay } from 'lucide-react';
import { MODULES, SCENARIOS, DICTIONARY, POPS, PILLS, LESSONS } from '../data/index';

interface SearchResult {
  type: 'module' | 'sim' | 'dictionary' | 'pop' | 'pill';
  id: string;
  title: string;
  subtitle: string;
  category?: string;
}

export default function GlobalSearch({ 
  onClose, 
  onSelectResult 
}: { 
  onClose: () => void, 
  onSelectResult: (type: SearchResult['type'], id: string, extra?: any) => void 
}) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (query.length < 2) return [];

    const q = query.toLowerCase();
    const matches: SearchResult[] = [];

    // Modules
    MODULES.forEach(m => {
      if (m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)) {
        matches.push({ type: 'module', id: m.id, title: m.title, subtitle: m.description });
      }
    });

    // Lessons (Deep Search)
    LESSONS.forEach(l => {
      if (l.title.toLowerCase().includes(q) || l.content.toLowerCase().includes(q)) {
        matches.push({ type: 'module' as any, id: l.moduleId, title: l.title, subtitle: 'Aula: ' + l.content.substring(0, 60).replace(/[#*]/g, '') + '...' });
      }
    });

    // Simulators
    SCENARIOS.forEach(s => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
        matches.push({ type: 'sim', id: s.id, title: s.title, subtitle: s.description });
      }
    });

    // Dictionary
    DICTIONARY.forEach(d => {
      if (d.term.toLowerCase().includes(q) || d.definition.toLowerCase().includes(q)) {
        matches.push({ type: 'dictionary', id: d.term, title: d.term, subtitle: d.definition });
      }
    });

    // POPs
    POPS.forEach(p => {
      const stepMatch = p.steps.some(s => s.toLowerCase().includes(q));
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || stepMatch) {
        matches.push({ type: 'pop', id: p.id, title: p.title, subtitle: p.category });
      }
    });

    // Pills
    PILLS.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q)) {
        matches.push({ type: 'pill', id: p.id, title: p.title, subtitle: p.category });
      }
    });

    return matches;
  }, [query]);

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'module': return BookOpen;
      case 'sim': return Zap;
      case 'dictionary': return Hash;
      case 'pop': return Shield;
      case 'pill': return CirclePlay;
      default: return Search;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bg flex flex-col"
    >
      <div className="p-6 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input 
              autoFocus
              type="text"
              placeholder="Pesquisar em todo o EnfeTech..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-surface border border-border rounded-2xl py-4 pl-12 pr-4 text-text-primary focus:border-accent outline-none"
            />
          </div>
          <button onClick={onClose} className="p-2 text-text-secondary hover:text-text-primary">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {query.length < 2 ? (
          <div className="text-center py-20 opacity-30">
            <Search className="w-16 h-16 mx-auto mb-4" />
            <p className="font-bold">Digite pelo menos 2 caracteres</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary px-2">Resultados ({results.length})</p>
            {results.map((res, idx) => {
              const Icon = getIcon(res.type);
              return (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  key={`${res.type}-${res.id}`}
                  onClick={() => onSelectResult(res.type, res.id, res.category === 'escala' ? 'escala' : 'sigla')}
                  className="w-full p-4 bg-surface border border-border rounded-2xl flex items-center justify-between group hover:border-accent active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-bg rounded-xl text-text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase text-accent/50">{res.type}</span>
                        <h4 className="font-bold text-text-primary line-clamp-1">{res.title}</h4>
                      </div>
                      <p className="text-xs text-text-secondary line-clamp-1">{res.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-secondary" />
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 opacity-30">
            <X className="w-16 h-16 mx-auto mb-4" />
            <p className="font-bold">Nenhum resultado encontrado para "{query}"</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
