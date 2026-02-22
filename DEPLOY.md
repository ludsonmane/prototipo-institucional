# 🚀 Deploy Mané Site — Passo a Passo

## O que você vai precisar
- Conta no **GitHub** (gratuita)
- Conta no **Railway** (gratuita em railway.app)
- **Git** instalado no computador

---

## PARTE 1 — Subir o código no GitHub

### 1. Criar repositório no GitHub
1. Acesse [github.com](https://github.com) → clique em **"New repository"**
2. Nome: `mane-site`
3. Deixe **Private** (recomendado)
4. Clique **"Create repository"**

### 2. Publicar o código
Abra o terminal na pasta do projeto e rode:

```bash
git init
git add .
git commit -m "feat: mane site v1"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/mane-site.git
git push -u origin main
```

> Substitua `SEU_USUARIO` pelo seu usuário do GitHub.

---

## PARTE 2 — Fazer deploy no Railway

### 1. Criar projeto no Railway
1. Acesse [railway.app](https://railway.app) → **"Start a New Project"**
2. Escolha **"Deploy from GitHub repo"**
3. Autorize o Railway a acessar seu GitHub
4. Selecione o repositório **`mane-site`**

### 2. Configurar o serviço
O Railway vai detectar o `package.json` automaticamente via **Nixpacks**.

Nas configurações do serviço, confirme:
- **Build Command:** `npm install`
- **Start Command:** `npm start`

### 3. Gerar domínio público
1. Na aba **"Settings"** do serviço
2. Clique em **"Generate Domain"**
3. Seu site vai estar disponível em `https://mane-site-xxxx.up.railway.app`

### 4. Domínio customizado (opcional)
1. Em **Settings → Networking → Custom Domain**
2. Adicione: `mane.com.vc` (ou o domínio que preferir)
3. Aponte o DNS do seu domínio para o Railway:
   - Tipo: `CNAME`
   - Valor: o endereço gerado pelo Railway

---

## PARTE 3 — Atualizações futuras

Para atualizar o site depois:

```bash
# Faça as alterações nos arquivos
git add .
git commit -m "feat: nova atualização"
git push
```

O Railway faz **deploy automático** a cada push no `main`. ✅

---

## Estrutura do projeto

```
mane-site/
├── index.html      ← O site completo
├── server.js       ← Servidor Node.js/Express
├── package.json    ← Dependências
├── railway.toml    ← Config do Railway
├── .gitignore
├── README.md
└── DEPLOY.md       ← Este arquivo
```

---

## Troubleshooting

| Problema | Solução |
|---|---|
| Site não abre | Verifique se `npm start` roda local sem erro |
| Railway diz "build failed" | Cheque se `package.json` está na raiz do repo |
| Domínio customizado não funciona | Aguarde propagação de DNS (até 24h) |
| Imagens não carregam | Normal no preview local sem internet — no ar vai funcionar |
