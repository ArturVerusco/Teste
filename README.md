# Meu Site — Starter (Next.js + Docker + Terraform + GitHub Actions)

**EN** — A complete starter to spin up a temporary VM on AWS via Terraform and deploy a Next.js site automatically from GitHub.

**PT-BR** — Um starter completo para criar uma VM temporária na AWS via Terraform e fazer deploy automático de um site Next.js a partir do GitHub.

---

## Onboarding (EN)

1) **Create a GitHub repo** and push these files.
2) **Set repository secrets** (Settings → Secrets and variables → Actions):
   - `AWS_ACCESS_KEY_ID` — your AWS access key
   - `AWS_SECRET_ACCESS_KEY` — your AWS secret
   - `AWS_REGION` — e.g. `us-east-1`
   - `EC2_SSH_PRIVATE_KEY` — the *private* key (PEM) matching the public key you provide to Terraform
   - `SSH_PUBLIC_KEY` — the *public* key content (starts with `ssh-rsa` or `ssh-ed25519`)
3) **Push to `main`**. The workflow will:
   - Provision a **t3.micro** Ubuntu VM (free-tier eligible) with open ports **22** and **80**.
   - Copy this repo to the VM and run `docker compose up -d --build`.
4) Access your site at: `http://<EC2_PUBLIC_IP>` (shown in the Actions logs and Terraform outputs).

Destroy the VM any time using the **Destroy** workflow.

---

## Onboarding (PT-BR)

1) **Crie um repositório no GitHub** e suba estes arquivos.
2) **Defina os segredos do repositório** (Settings → Secrets and variables → Actions):
   - `AWS_ACCESS_KEY_ID` — sua chave de acesso AWS
   - `AWS_SECRET_ACCESS_KEY` — seu segredo AWS
   - `AWS_REGION` — ex.: `us-east-1`
   - `EC2_SSH_PRIVATE_KEY` — a chave *privada* (PEM) que corresponde à chave pública fornecida ao Terraform
   - `SSH_PUBLIC_KEY` — o conteúdo da chave *pública* (começa com `ssh-rsa` ou `ssh-ed25519`)
3) **Faça um push para `main`**. O workflow irá:
   - Provisionar uma VM Ubuntu **t3.micro** (elegível ao free tier) com portas **22** e **80** liberadas.
   - Copiar este repositório para a VM e executar `docker compose up -d --build`.
4) Acesse o site em: `http://<EC2_PUBLIC_IP>` (exibido nos logs do Actions e em `terraform output`).

Destrua a VM quando quiser usando o workflow **Destroy**.

---

## Local development

EN: Run locally with Node 20+:
```bash
npm ci
npm run dev
```
Open http://localhost:3000

PT-BR: Execute localmente com Node 20+:
```bash
npm ci
npm run dev
```
Abra http://localhost:3000

---

## Notes / Observações

- This template builds the app *on the VM*. It avoids needing a container registry or PAT initially.
- Este template compila o app *na VM*, evitando registry/PAT no início.
- For HTTPS and domain, add a reverse proxy like Caddy or Nginx and point a DNS record to the VM.
- Para HTTPS e domínio, adicione um proxy reverso (Caddy/Nginx) e aponte um DNS para a VM.

