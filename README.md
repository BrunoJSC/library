## Aplicação CRUD de Livros

Esta é uma aplicação simples de CRUD (Create, Read, Update, Delete) para gerenciar livros. Ela possui um frontend em React e um backend em Node.js com MySQL como banco de dados.

### Pré-requisitos

Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.

### Configuração do Banco de Dados

1. Crie um banco de dados chamado `test` no MySQL.

2. Execute o seguinte comando SQL para criar a tabela `books`:

```sql
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  desc TEXT,
  price DECIMAL(10, 2) NOT NULL,
  cover VARCHAR(255)
);
```

### Backend

O backend da aplicação foi desenvolvido usando Node.js com as bibliotecas Express, Multer e MySQL. Ele fornece endpoints para criar, ler, atualizar e excluir livros.

#### Instalação das dependências

Para instalar as dependências do backend, navegue até a pasta `backend` e execute o seguinte comando:

```bash
cd backend
npm install
```

#### Configuração do banco de dados

No arquivo `backend/index.js`, certifique-se de atualizar as credenciais de acesso ao banco de dados:

```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sua_senha_do_mysql",
  database: "test",
});
```

#### Executando o backend

Para iniciar o servidor backend, execute o seguinte comando na pasta `backend`:

```bash
npm start
```

O servidor será iniciado na porta 8800.

### Frontend

O frontend da aplicação foi desenvolvido em React com a biblioteca Axios para fazer chamadas à API do backend.

#### Instalação das dependências

Para instalar as dependências do frontend, navegue até a pasta `frontend` e execute o seguinte comando:

```bash
cd frontend
npm install
```

#### Executando o frontend

Para iniciar o servidor de desenvolvimento do frontend, execute o seguinte comando na pasta `frontend`:

```bash
npm start
```

O servidor de desenvolvimento será iniciado na porta 3000.

### Uso da Aplicação

Após iniciar tanto o servidor backend quanto o frontend, você pode acessar a aplicação em `http://localhost:3000`.

A página inicial lista todos os livros cadastrados no banco de dados. Você pode adicionar um novo livro clicando no botão "Add book" e preenchendo o formulário. Ao adicionar ou excluir um livro, a lista será atualizada automaticamente.

Para atualizar as informações de um livro, clique no botão "Update" ao lado do livro desejado. Você será redirecionado para uma página de atualização, onde poderá modificar os detalhes do livro.

Para excluir um livro, clique no botão "Delete" ao lado do livro desejado.

### Aviso

Esta é uma aplicação simples apenas para fins de demonstração e aprendizado. Ela não inclui recursos avançados de segurança ou autenticação. Não a utilize em produção sem implementar as devidas medidas de segurança.

### Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar e modificar o código como desejar.
