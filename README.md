# Med365 API

API de gerenciamento de pacientes 

Requesitos: 
* Node.js - [Instalação Node.js 12](https://nodejs.org/en/), including the NPM package management tool.
* Docker & Docker-Compose - [Instalação Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)

### Dependências
Use o instalador do NPM para instalar as dependências.

```bash
npm install
```

### Migrations
Rode o comando run para subir as tabelas para o database.

```js
adonis migration:run
```

### Start
Para startar o projeto utilize:

```bash
docker-compose up 
npm start
```



