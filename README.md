# Manual do Bebê Dorminhoco - Landing Page

Landing page de vendas para o ebook "Manual do Bebê Dorminhoco - 14 Passos para a Liberdade Noturna". Uma página otimizada para conversão com copy agressivo e design focado em vendas.

## 🚀 Funcionalidades

- **Landing Page Responsiva**: Design adaptado para desktop e mobile
- **Copy Persuasivo**: Textos otimizados para conversão com urgência e escassez
- **Seção de Bônus**: Três bônus gratuitos com valores riscados
- **Depoimentos**: Seção de testimônios com fotos e avaliações 5 estrelas
- **Botões Pulsantes**: CTAs com animação de pulso para chamar atenção
- **Contador de Urgência**: Timer de 15 dias para criar pressão de compra
- **Garantia de 7 Dias**: Badge de garantia para reduzir objeções
- **FAQ**: Seção de perguntas frequentes
- **Design Temático**: Cores suaves relacionadas ao universo bebê

## 🛠 Tecnologias Utilizadas

### Frontend
- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **Radix UI** componentes acessíveis
- **Lucide React** para ícones
- **Framer Motion** para animações
- **Wouter** para roteamento

### Backend
- **Node.js** com Express
- **TypeScript** com ES Modules
- **Drizzle ORM** para banco de dados
- **PostgreSQL** (Neon Database)
- **TanStack Query** para gerenciamento de estado

### Build e Desenvolvimento
- **Vite** para build e dev server
- **ESBuild** para bundling do servidor
- **PostCSS** para processamento CSS
- **tsx** para execução TypeScript

## 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/manual-bebe-dorminhoco.git
cd manual-bebe-dorminhoco
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto em desenvolvimento
```bash
npm run dev
```

O servidor iniciará na porta 5000. Acesse:
- **Frontend**: http://localhost:5000
- **API**: http://localhost:5000/api

### 4. Build para produção
```bash
npm run build
```

### 5. Rodar em produção
```bash
npm start
```

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes UI (shadcn)
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilitários e configurações
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── App.tsx         # Componente principal
│   │   ├── index.css       # Estilos globais e CSS variables
│   │   └── main.tsx        # Entry point
│   └── index.html          # Template HTML
├── server/                 # Backend Express
│   ├── index.ts            # Servidor principal
│   ├── routes.ts           # Rotas da API
│   ├── storage.ts          # Interface de storage
│   └── vite.ts             # Integração Vite
├── shared/                 # Código compartilhado
│   └── schema.ts           # Schemas Drizzle/Zod
├── package.json            # Dependências e scripts
├── tailwind.config.ts      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── vite.config.ts          # Configuração Vite
```

## 🎨 Design System

### Cores Temáticas
- **Baby Blue**: `#89D5F5` - Para elementos primários
- **Soft Pink**: `#FFB3DC` - Para destaques femininos  
- **Warm Coral**: `#FF7F7F` - Para CTAs e botões
- **Cream**: `#FEFFFE` - Background principal
- **Navy**: `#3D475C` - Textos principais

### Componentes
- Utiliza **shadcn/ui** como base de componentes
- **Radix UI** para acessibilidade
- Animações com **pulse-button** para CTAs
- Responsividade com **Tailwind CSS**

## 📈 Otimizações para Conversão

### Copy Agressivo
- Headlines impactantes
- Urgência e escassez
- Benefícios orientados ao resultado
- Superação de objeções

### Elementos Visuais
- Botões com animação de pulso
- Cores contrastantes para CTAs
- Fotos de bebês e mães felizes
- Badges de garantia e segurança

### Estrutura de Vendas
1. **Problema** - Identifica dores das mães
2. **Agitação** - Amplifica o sofrimento
3. **Solução** - Apresenta o produto
4. **Benefícios** - Lista vantagens
5. **Prova Social** - Depoimentos
6. **Bônus** - Aumenta valor percebido
7. **Escassez** - Timer de urgência
8. **Garantia** - Reduz risco
9. **CTA** - Múltiplos pontos de conversão

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build para produção
npm start           # Executa versão de produção

# Utilitários  
npm run check       # Verificação TypeScript
npm run db:push     # Push schema para banco
```

## 🌐 Deploy

### Opções de Deploy
- **Vercel**: Conecte o repositório GitHub
- **Netlify**: Deploy automático
- **Railway**: Para fullstack com banco
- **Render**: Alternativa gratuita

### Variáveis de Ambiente
Se usar banco de dados real, configure:
```env
DATABASE_URL=sua_connection_string_postgresql
NODE_ENV=production
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma feature branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)  
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Suporte

Para suporte, envie um email para seu-email@exemplo.com ou abra uma issue no GitHub.

---

**Desenvolvido com ❤️ para ajudar famílias a conquistarem noites tranquilas**