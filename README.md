
# 👏 API de Kudos

Esta é uma API RESTful desenvolvida com **Node.js**, **Express** e **Sequelize (MySQL)** para gerenciar o envio de **kudos** (elogios ou reconhecimentos) entre usuários. Ideal para integrar em sistemas de reconhecimento interno, como intranets corporativas ou plataformas de gamificação.
Projeto criado no primeiro periodo da faculdade com contribuição do professor Rodrigo Fujioka (unipê)

---

## 🚀 Funcionalidades

- 👏 Envio de kudos entre usuários
- 🔍 Listagem de kudos recebidos e enviados

---

## 🛠️ Tecnologias

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT (autenticação)
- Bcrypt (hash de senha)
- Dotenv (variáveis de ambiente)
- Joi (validações)

---

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- MySQL

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/pedrinhoas7/node_kudos_api.git
cd node_kudos_api

# 2. Instale as dependências
npm install

# 3. Configure o ambiente
cp .env.example .env
# edite o arquivo .env com os dados do seu banco de dados

# 4. Rode as migrations
npx sequelize db:migrate

# 5. Inicie o servidor
npm run dev
```

---


## 🧡 Sobre Kudos

*Kudos* são uma forma simples e poderosa de demonstrar reconhecimento entre colegas de equipe. Com essa API, promover cultura de valorização ficou mais fácil!

