# 📊 Dashboard Impulsionamento Instagram

Sistema de análise de crescimento Instagram com comparação MLABS vs BM (Meta Ads Manager).

## 🚀 Deploy Rápido no Vercel

### Opção 1: Via GitHub (Recomendado)

1. **Crie um repositório no GitHub**
   - Vá para github.com/new
   - Nome: `dashboard-impulsionamento`
   - Escolha "Public"
   - Crie o repositório

2. **Faça upload dos arquivos**
   ```bash
   git clone https://github.com/SEU_USER/dashboard-impulsionamento.git
   cd dashboard-impulsionamento
   # Copie os arquivos do dashboard aqui
   git add .
   git commit -m "Initial commit: Dashboard setup"
   git push origin main
   ```

3. **Deploy no Vercel**
   - Vá para vercel.com
   - Clique em "New Project"
   - Selecione seu repositório do GitHub
   - Clique "Deploy"
   - Pronto! ✅ Seu dashboard está no ar!

### Opção 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
# Siga as instruções
```

### Opção 3: Vercel com Git Import

1. Vá para https://vercel.com/new
2. Cole a URL do seu repositório GitHub
3. Clique "Import"
4. Configur e Deploy

---

## 📝 Estrutura do Projeto

```
dashboard-impulsionamento/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Dashboard (EDITAR DADOS AQUI)
│   └── globals.css      # Estilos
├── package.json         # Dependências
├── next.config.js       # Configuração Next.js
├── tsconfig.json        # Configuração TypeScript
└── README.md           # Este arquivo
```

---

## 🔧 Como Atualizar os Dados

Edite o arquivo `app/page.tsx`:

```typescript
// Procure por esta seção:
const lotogreen_data = {
  nome: '🟢 LOTOGREEN',
  seguidores_atual: 150443,  // ← Mude aqui
  investimento_total: 13852.65,  // ← Mude aqui
  // ... resto dos dados
}
```

Faça as alterações e:
```bash
git add app/page.tsx
git commit -m "Update data"
git push origin main
```

O Vercel fará o deploy automático! ✨

---

## 📊 O que o Dashboard Mostra

✅ **Análise Atual**
- Seguidores por casa (Lotogreen, BR4BET)
- Crescimento total
- Investimento gasto
- Custo por seguidor

✅ **Explicação MLABS vs BM**
- Diferença entre dados
- Qual usar para quê
- Fórmula de cálculo

✅ **Projeção até 31/12/2026**
- Com cenário de R$300/dia
- Crescimento esperado
- Estimativa final

✅ **Gráficos**
- Tendência de crescimento
- Comparação MLABS vs BM

---

## 🎨 Customizações

### Mudar cores
Edit `app/globals.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Mude as cores aqui */
```

### Adicionar mais casas
Edit `app/page.tsx` e adicione:
```typescript
const casa_nova = {
  nome: '🟡 NOVA_CASA',
  seguidores_atual: 100000,
  // ... resto dos dados
}
```

---

## 🌐 Variáveis de Ambiente (Opcional)

Se quiser conectar com dados de uma API, crie `.env.local`:
```
NEXT_PUBLIC_API_URL=https://sua-api.com
```

---

## 📱 Responsive

O dashboard funciona em:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

---

## 🆘 Problemas?

### Dashboard não atualiza após push
- Aguarde 2-3 minutos (Vercel está fazendo rebuild)
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Erro ao instalar dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já está em uso
```bash
npm run dev -- -p 3001
```

---

## 📞 Suporte

Qualquer dúvida, é só chamar! 🚀

---

**Desenvolvido com ❤️ para Sabiá Gaming**
