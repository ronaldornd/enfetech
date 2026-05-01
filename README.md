<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# CI status
![CI](https://github.com/ronaldornd/enfetech/actions/workflows/ci.yml/badge.svg)

# EnfeTech Mobile 🏥

📱 **Educação de Bolso para o Futuro da Enfermagem.**

O EnfeTech Mobile é um aplicativo gamificado projetado para técnicos e estudantes de enfermagem. Ele transforma protocolos complexos, cálculos de medicação e siglas técnicas em uma experiência de aprendizado interativa, offline e mobile-ready.

## 🚀 Funcionalidades Principais

- **Lições Progressivas**: Conteúdo acadêmico estruturado com trava sequencial (estude na ordem correta).
- **Gamificação Total**: Ganhe XP, suba de nível e ganhe badges de conquista.
- **Biblioteca Ranqueada**: Desbloqueie Procedimentos (POPs) e Escalas Técnicas (Glasgow, Braden) conforme seu nível aumenta.
- **Flashcards Inteligentes**: Estudo ativo vinculado ao seu progresso nas lições.
- **Dicionário Técnico**: Acesso rápido a siglas e termos com busca instantânea.
- **Experiência Premium**: Feedback tátil (Haptics) e animações fluidas para dispositivos móveis.

## 🛠️ Tecnologias

- **Framework**: React 19 + Vite
- **Estilização**: Tailwind CSS 4
- **Mobile**: Capacitor 8 (Android Ready)
- **Persistência**: Capacitor Preferences
- **Animações**: Motion (Framer Motion)

## 💻 Desenvolvimento Local

**Pré-requisitos:** Node.js 18+

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Executar em Desenvolvimento (Web)**:
   ```bash
   npm run dev
   ```

3. **Sincronizar com Android**:
   ```bash
   npm run cap:sync
   ```

## 📱 Build Mobile (Android Studio)

Este projeto utiliza o Capacitor para rodar nativamente:

1. Gere o build de produção: `npm run build`
2. Sincronize com a pasta nativa: `npx cap sync`
3. Abra no Android Studio: `npx cap open android`

---
*Construído com foco na excelência acadêmica e praticidade hospitalar.*
