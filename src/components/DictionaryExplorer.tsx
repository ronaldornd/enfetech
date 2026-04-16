import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Hash, FileText, Info } from 'lucide-react';
import { DictionaryEntry } from '../types';
import { DICTIONARY } from '../data';

export default function DictionaryExplorer({ onClose, initialTab = 'sigla' }: { onClose: () => void, initialTab?: 'sigla' | 'escala' }) {
  const [activeType, setActiveType] = useState<'sigla' | 'escala'>(initialTab);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = DICTIONARY.filter(entry => 
    entry.category === activeType &&
    (entry.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
     entry.definition.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-bg flex flex-col"
    >
      {/* Header */}
      <div className="p-6 pb-4 border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-xl text-accent">
              <Search className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-text-primary">Dicionário Técnico</h2>
          </div>
          <button onClick={onClose} className="p-2 bg-surface rounded-full text-text-secondary border border-border">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input 
            type="text"
            placeholder={activeType === 'sigla' ? "Buscar sigla (ex: AVP)..." : "Buscar Escala (ex: Braden)..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface border border-border rounded-2xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/50 focus:border-accent outline-none transition-all"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-bg rounded-2xl border border-border">
          <button 
            onClick={() => setActiveType('sigla')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeType === 'sigla' ? 'bg-accent text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Siglas
          </button>
          <button 
            onClick={() => setActiveType('escala')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeType === 'escala' ? 'bg-accent text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Escalas
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={entry.id}
              className="p-5 bg-surface border border-border rounded-[28px] space-y-3 group hover:border-accent/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeType === 'sigla' ? 'bg-accent/10 text-accent' : 'bg-success/10 text-success'}`}>
                    {activeType === 'sigla' ? <Hash className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  </div>
                  <h3 className="text-xl font-black text-text-primary tracking-tight">{entry.term}</h3>
                </div>
              </div>
                {activeType === 'sigla' ? (
                  <>
                    <p className="text-text-primary font-bold leading-tight">{entry.definition}</p>
                    {entry.details && (
                      <div className="flex items-start gap-2 pt-2 text-text-secondary">
                        <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <p className="text-xs italic leading-snug">{entry.details}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-4 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-success/20 text-success text-[10px] font-black uppercase tracking-widest rounded-md border border-success/30">Protocolo de Enfermagem</span>
                    </div>
                    <div className="p-4 bg-bg rounded-2xl border border-border/50">
                      <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">O que é?</p>
                      <p className="text-sm text-text-primary leading-relaxed">{entry.whatIs || entry.definition}</p>
                    </div>
                    
                    <div className="p-4 bg-success/5 rounded-2xl border border-success/20">
                      <p className="text-[10px] font-black uppercase tracking-widest text-success mb-2">Como medir?</p>
                      <p className="text-sm text-text-secondary leading-relaxed font-medium">{entry.howToMeasure || 'Procedimento em revisão conforme protocolos institucionais.'}</p>
                    </div>
                  </div>
                )}
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-30">
            <Search className="w-16 h-16 mb-4" />
            <p className="font-bold">Nenhum resultado encontrado</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
