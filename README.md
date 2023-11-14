# Sistema de Ponto de Venda (PDV)

O Sistema de Ponto de Venda (PDV) é uma API RESTful construída com o framework AdonisJS e banco de Dados MySQL, projetado para gerenciar transações de vendas de forma eficiente. Ele oferece recursos essenciais para cadastro e login de usuários, gestão de produtos e clientes, registro de vendas, além de contar com validação por token para proteção dos endpoints.

## Sumário

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso](#uso)

## Recursos

### Gestão de Usuários

- **Cadastro de Usuários:** Novos usuários podem se registrar fornecendo email e password.

- **Autenticação de Usuários:** Funcionalidade segura de login para acessar o sistema.

### Gestão de Produtos

- **Criação de Produtos:** Operações CRUD (Criar, Ler, Atualizar, Excluir) para gerenciar produtos.
- **Listagem de Produtos:** Visualização de uma lista de todos os produtos disponíveis.

### Gestão de Clientes

- **Cadastro de Clientes:** Operações CRUD para gerenciar informações dos clientes.
- **Listagem de Clientes:** Visualização de uma lista de todos os clientes registrados.

### Registro de Vendas

- **Registro de Vendas:** Registra transações de vendas, incluindo detalhes do cliente, produto e quantidade.
- **Gestão de Estoque:** Atualiza automaticamente o estoque do produto após uma venda bem-sucedida.

## Instalação

1. Acesse o repositório:

```bash
https://github.com/fabricio-milanio/pos-system-challenge
```

2. Clone o projeto:

```bash
git clone git@github.com:fabricio-milanio/pos-system-challenge.git
```

3. Utilizando o terminal, navegue até o diretório do projeto:

```bash
cd path/pos-system-challenge
```

4. Execute o comando para criar os containers e rodar a aplicação:

```bash
docker-compose up -d
```

Esse comando irá criar os seguintes containers:

- db-pos-system, que irá implementar o banco de dados MySQL da aplicação.
- backend-pos-system, que irá iniciar o servidor da aplicação.

As migrations e seeders do banco de dados serão implementadas automaticamente.

## Uso

1. Inicie um client de sua preferência, como por exemplo o Insomnia;

2. Para cadastrar um usuário, acesse o seguinte endpoint utilizando POST:

```bash
http://localhost:3333/signup
```

O corpo da requisição deve conter email e password, conforme estrutura abaixo:

```bash
{
"email": "test@email.com",
"password": "12345"
}
```

3. Após registrar o usuário, acesse o seguinte endpoint, utilizando POST, para realizar o login. Informe no corpo da requisição email e password válidos, conforme estrutura abaixo:

```bash
{
"email": "test@email.com",
"password": "12345"
}
```

4. Após se logar no sistema, o usuário pode realizar a gestão de produtos através do CRUD utilizando os endpoints abaixo.

Obs.: A partir desse ponto, todas as rotas são protegidas e para garantir o acesso, o token obtido no momento do login deve ser informado no campo Auth - Bearer Token.

4.1. Para acessar todos os produtos, acesse o endpoint utilizando GET:

```bash
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
[
{
"id": 1,
"name": "Product 1",
"description": "Description 1",
"author": "Author 1",
"publisher": "Publisher 1",
"price": 1.99,
"stock": 100
},
{
"id": 2,
"name": "Product 2",
"description": "Description 2",
"author": "Author 2",
"publisher": "Publisher 2",
"price": 2.99,
"stock": 100
},
{
"id": 3,
"name": "Product 3",
"description": "Description 3",
"author": "Author 3",
"publisher": "Publisher 3",
"price": 3.99,
"stock": 100
}
]
```

4.2. Acesse um produto através do deu ID, acesse o endpoint utilizando GET:

```bash
http://localhost:3333/product/1
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"id": 1,
"name": "Product 1",
"description": "Description 1",
"author": "Author 1",
"publisher": "Publisher 1",
"price": 1.99,
"stock": 100,
"deleted": 0,
"created_at": "2023-11-13T23:21:38.000+00:00",
"updated_at": "2023-11-13T23:21:38.000+00:00"
}
```

4.3. Para registrar um produto, acesse o endpoint utilizando POST:

```bash
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"message": "Product registered successfully",
"data": {
"name": "Test",
"description": "Tet",
"author": "Test",
"publisher": "Test",
"price": 1,
"stock": 1,
"created_at": "2023-11-13T23:23:32.346+00:00",
"updated_at": "2023-11-13T23:23:32.346+00:00",
"id": 4
}
}
```

4.4. Para atualizar um produto, acesse o endpoint utilizando PUT:

```bash
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"message": "Product updated successfully",
"data": {
"id": 4,
"name": "Elida 6",
"description": "Tet",
"author": "Test",
"publisher": "Test",
"price": "0.1",
"stock": 1,
"deleted": 0,
"created_at": "2023-11-13T23:23:32.000+00:00",
"updated_at": "2023-11-13T23:23:45.033+00:00"
}
}
```

4.5. Para deletar um produto, acesse o endpoint utilizando DELETE:

```bash
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"message": "Product deleted successfully"
}
```

Nesse endpoint vale ressaltar que a exclusão é lógica, ou seja, os dados do produto continuam registrado no banco de dados, mas não fica disponível para consulta no sistema, até que seja ativado novamente.

5. O usuário pode realizar a gestão de clientes através do CRUD utilizando os endpoints abaixo.

5.1. Para consultar todos os clientes, acesse o endpoint utilizando GET:

```bash
http://localhost:3333/client
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
[
{
"id": 1,
"name": "John Doe",
"cpf": "12345678900"
},
{
"id": 2,
"name": "Jane Doe",
"cpf": "12345678901"
},
{
"id": 3,
"name": "Johnny Doe",
"cpf": "12345678902"
}
]
```

5.2. Acesse um cliente através do deu ID, acesse o endpoint utilizando GET:

```bash
http://localhost:3333/client/1
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
[
{
"id": 1,
"name": "John Doe",
"cpf": "12345678900",
"addresses": [
{
"number": 123,
"street": "Richmond Street",
"district": "South Beach",
"city": "Richmond",
"state": "Virginia",
"country": "United States",
"zipCode": "12345-678"
}
],
"phones": [
{
"number": 123456789
}
]
}
]
```

5.3. Para registrar um cliente, acesse o endpoint utilizando POST:

```bash
http://localhost:3333/client
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"id": 5,
"name": "Test",
"cpf": "12345678911"
}
```

5.4. Para atualizar um cliente pelo seu ID, acesse o endpoint utilizando PUT:

```bash
http://localhost:3333/client/1
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"id": 5,
"name": "Test Update",
"cpf": "12345678916"
}
```

5.5. Para deletar um cliente, acesse o endpoint utilizando DELETE:

```bash
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"message": "Client deleted successfully"
}
```

Nesse endpoint vale ressaltar que a exclusão é lógica, ou seja, os dados do produto continuam registrado no banco de dados, mas não fica disponível para consulta no sistema, até que seja ativado novamente.

<br>

6. O usuário pode realizar o cadastro da venda de um produto a um cliente utilizando o endpoint abaixo.

<br>

6.1. Para registrar a venda, acesse o endpoint utilizando POST:

```bash
http://localhost:3333/sale
```

O corpo da requisição deverá ser similar a estrutura abaixo:

```bash
{
"client_id": 2,
"product_id": 3,
"quantity": 1
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```bash
{
"client_id": 2,
"product_id": 3,
"quantity": 1,
"price": 3.99,
"total_price": 3.99,
"created_at": "2023-11-13T23:25:07.224+00:00",
"updated_at": "2023-11-13T23:25:07.224+00:00",
"id": 4
}
```
