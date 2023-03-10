# Content Management API

[Desafio backend da Skore](https://github.com/skore-io/challenge/blob/main/backend.md)

## Executando

1. `npm install`
2. `docker compose up`
3. `npm run typeorm migration:run -- -d src/@core/infra/database/typeorm/dataSource.ts`
4. `npm run start:dev`

## Documentação API GraphQL

[playground](http://localhost:3000/graphql)

## Desenvolvimento do projeto

- [x] Criação do domínio da aplicação
- [x] Criação de servidor de banco de dados Postgres em container docker
- [x] Criação do setup do projeto com GraphQL e TypeORM
- [x] Criação de tabelas no banco de dados
- [ ] Criação das funcionalidades para gerenciamento de usuários
- [ ] Criação das funcionalidades para gerenciamento de conteúdos
- [ ] Criação dos testes unitários, de integração e end-to-end
- [ ] Camada de validação de tokens estáticos

## Conceitos aplicados

- DDD
  - Entities
  - Repository Pattern
- SOLID
  - Single Responsibility
  - Dependency Inversion
- In Memory Database
  - Banco de dados em memória para evitar o uso desnecessário de mocks

## Comandos úteis

- `npm run typeorm migration:create src/@core/infra/database/typeorm/migrations/CreateTable -- -d src/@core/infra/database/typeorm/dataSource.ts` para criar uma nova migration

- `npm run typeorm migration:generate src/@core/infra/database/typeorm/migrations/CreateAllTables -- -d src/@core/infra/database/typeorm/dataSource.ts` para gerar migrations à partir dos modelos

- `npm run typeorm migration:run -- -d src/@core/infra/database/typeorm/dataSource.ts` para executar as migrations

# Observações

O projeto não está concluído, faltando todas as funcionalidades para gerenciamento de usuários e de conteúdos, testes e uma solução para autorização de usuários. Embora o projeto seja bastante simples, optei por colocar em prática o que vinha estudando em termos de boas práticas, princípios de desenvolvimento de software, arquitetura. Com isso, acabei não conseguindo finalizar a tempo, como gostaria.

Há apenas uma funcionalidade funcionando (com o banco em memória)

~~~js
mutation {
  createContent(createContentInput: {
    	userId: "54c05fce-30f5-4707-b964-b0cf2c601531",
			name: "JavaScript",
			description: "Loren ipsum",
			type: "video"
  }) {
    id
    name
    description
    type
  }
}
~~~

## Referências

[Nest.js com Domain Driven Design](https://www.youtube.com/watch?v=XTmvAj5OSQI)
