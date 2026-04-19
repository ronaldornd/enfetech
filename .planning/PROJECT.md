# EnfeTech - Educação Gamificada em Enfermagem

ENFETECH é uma plataforma educacional mobile-first projetada para capacitar técnicos e estudantes de enfermagem através de micro-learning, gamificação e referências técnicas de bolso.

## Visão do Produto
Transformar o estudo da enfermagem em uma experiência interativa e viciante, garantindo que o conhecimento crítico (procedimentos, cálculos e ética) esteja sempre acessível e validado pelo progresso do usuário.

## Tech Stack (v1.5 - Mobile ready)
- **Frontend**: React 19 + Vite + Tailwind CSS 4.
- **Mobile Bridge**: Capacitor 8.
- **State & Persistence**: React Hooks + Capacitor Preferences (persistência nativa).
- **Animations**: Motion (Framer Motion) para micro-interações premium.
- **Icons**: Lucide React.
- **Feedback Tátil**: Capacitor Haptics.

## Arquitetura de Gamificação
- **Sistema de XP**: Ganho progressivo ao concluir lições e praticar flashcards.
- **Níveis do Usuário**: Destravam conteúdos avançados (POPs e Dicionário).
- **Gating de Conteúdo**: 
    - Aulas sequenciais (Próxima lição requer a anterior).
    - Flashcards vinculados a lições concluídas.
- **Feedback de Sucesso**: Achievements em tempo real (Toasts de Conquista).

## Estrutura de Diretórios GSD
- `.planning/`: Documentação de design e estratégia.
- `src/components/`: Componentes UI modais e visualizadores.
- `src/data/`: Banco de dados estático (Lições, POPs, Flashcards).
- `src/utils/`: Lógica de persistência e interações nativas (Haptics).
- `android/`: Código fonte nativo gerado pelo Capacitor.
