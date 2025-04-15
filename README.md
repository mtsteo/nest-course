# 🐱🐶 NestJS Multi-Database Application

Esta é uma aplicação construída com [NestJS](https://nestjs.com/) que demonstra o uso de **múltiplos bancos de dados** em módulos independentes.

## 🧱 Estrutura

- **Módulo `Cat`**: Usa **MongoDB** como banco de dados.

 ```bash
npm run start:dev // Usa uma instancia do MongoDB local, docker composer file disponivel na raiz do projeto.
npm run start:stg // Usa uma instancia do MongoDB online, modificar a URI no arquivo .env.stg.
```

- **Módulo `Dog`**: Usa **SQLite** como banco de dados disponivel na raiz do diretorio.
