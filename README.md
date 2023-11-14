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

Operações CRUD (Criar, Ler, Atualizar, Excluir) para gerenciar produtos.

- **Listagem de Produtos:** Visualização de uma lista de todos os produtos disponíveis.
- **Listagem de Produtos Por ID:** Visualização de um produto disponível.
- **Cadastro de Produtos:** Novos produtos podem ser cadastrados e persistidos no banco de dados.
- **Atualização de Produtos:** Produtos podem ser atualizados, como nome, preço, estoque, entre outras informações.
- **Exclusão de Produtos:** Produtos são excluídos de forma lógica, mantendo seu registro no banco de dados, podendo ser novamente inseridos na aplicação.

### Gestão de Clientes

Operações CRUD (Criar, Ler, Atualizar, Excluir) para gerenciar clientes.

- **Listagem de Clientes:** Visualização de uma lista de todos os clientes cadastrados.
- **Listagem de Clientes Por ID:** Visualização de um cliente cadastrado com todos os dados disponíveis.
- **Cadastro de Clientes:** Novos clientes podem ser cadastrados e persistidos no banco de dados.
- **Atualização de Clientes:** Clientes podem ser atualizados, como nome e cpf.
- **Exclusão de Clientes:** Clientes são excluídos de forma física, eliminando de forma definitiva seu registro no banco de dados.

### Registro de Vendas

- **Registro de Vendas:** Registra transações de vendas, incluindo o cliente, produto, quantidade, preço unitário e valor total do pedido.
- **Gestão de Estoque:** Atualiza automaticamente o estoque do produto após uma venda bem-sucedida.

## Instalação

#### 1. Acesse o repositório:

```
https://github.com/fabricio-milanio/pos-system-challenge
```

#### 2. Clone o projeto:

```
git clone git@github.com:fabricio-milanio/pos-system-challenge.git
```

#### 3. Utilizando o terminal, navegue até o diretório do projeto:

```
cd path/pos-system-challenge
```

#### 4. Execute o comando para criar os containers e rodar a aplicação:

```
docker-compose up -d
```

Esse comando irá executar todos os comando necessários para o funcionamento da aplicação e irá criar os seguintes containers:

- db-pos-system, que irá implementar o banco de dados MySQL da aplicação.
- backend-pos-system, que irá iniciar o servidor da aplicação.

As migrations e seeders do banco de dados serão implementadas automaticamente.

## Uso

#### 1. Inicie um client de sua preferência, como por exemplo o Insomnia;

#### 2. Para cadastrar um usuário, acesse o seguinte endpoint utilizando POST:

```
http://localhost:3333/signup
```

O corpo da requisição deve conter email e password, conforme estrutura abaixo:

```
{
"email": "test@email.com",
"password": "12345"
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"message": "User account created"
}
```

#### 3. Após registrar o usuário, acesse o seguinte endpoint, utilizando POST, para realizar o login.

```
http://localhost:3333/login
```

Informe no corpo da requisição email e password válidos, conforme estrutura abaixo:

```
{
"email": "test@email.com",
"password": "12345"
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"token": "MQ.LNQqmSzDFACkL14axs6TcdOCYJ8ujqGfXpITqtNPM4mY37rOq5kErQ4H57_2"
}
```

#### 4. Após se logar no sistema, o usuário pode realizar a gestão de produtos através do CRUD utilizando os endpoints abaixo.

Obs.: A partir desse ponto, todas as rotas são protegidas e para garantir o acesso, o token obtido no momento do login deve ser informado no campo Auth - Bearer Token.

#### 4.1. Para acessar todos os produtos, acesse o endpoint utilizando GET:

```
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
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

#### 4.2. Acesse um produto através do deu ID, acesse o endpoint utilizando GET:

```
http://localhost:3333/product/id_do_produto
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
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

#### 4.3. Para registrar um produto, acesse o endpoint utilizando POST:

```
http://localhost:3333/product
```

O corpo da requisição deve conter a seguinte estrutura:

```
{
	"name": "Test",
	"description": "Tet",
	"author": "Test",
	"publisher": "Test",
	"price": 1,
	"stock": 1
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
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

#### 4.4. Para atualizar um produto, acesse o endpoint utilizando PUT:

```
http://localhost:3333/product/id_do_produto
```

O corpo da requisição deve conter a seguinte estrutura:

```
{
	"name": "Test Utualizado",
	"description": "Tet",
	"author": "Test",
	"publisher": "Test",
	"price": "0.1",
	"stock": 1,
	"deleted": 0
}
```

No caso do update, pode-se observar a key deleted, que é uma chave opcional, mas que define se um produto terá sua exclusão lógica do sistema. Ao atrituir zero significa que o produto continuará sendo listado no sistema, mas caso seja atribuido 1, o produto será excluído e não poderá mais ser visto no sistema. Para que o produto seja listado novamente, atribua 0 a key deleted.

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"message": "Product updated successfully",
	"data": {
		"id": 4,
		"name": "Test Utualizado",
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

#### 4.5. Para deletar um produto, acesse o endpoint utilizando DELETE:

```
http://localhost:3333/product
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"message": "Product deleted successfully"
}
```

Nesse endpoint vale ressaltar que a exclusão é lógica, ou seja, os dados do produto continuam registrado no banco de dados, mas não fica disponível para consulta no sistema, até que seja ativado novamente.

#### 5. O usuário pode realizar a gestão de clientes através do CRUD utilizando os endpoints abaixo.

#### 5.1. Para consultar todos os clientes, acesse o endpoint utilizando GET:

```
http://localhost:3333/client
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
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

#### 5.2. Acesse um cliente através do deu ID, acesse o endpoint utilizando GET:

```
http://localhost:3333/client/id_do_cliente
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
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

#### 5.3. Para registrar um cliente, acesse o endpoint utilizando POST:

```
http://localhost:3333/client
```

O corpo da requisição deve conter a seguinte estrutura:

```
{
	"name": "Test",
	"cpf": "12345678911"
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"id": 5,
	"name": "Test",
	"cpf": "12345678911"
}
```

#### 5.4. Para atualizar um cliente pelo seu ID, acesse o endpoint utilizando PUT:

```
http://localhost:3333/client/id_do_cliente
```

O corpo da requisição deve conter a seguinte estrutura:

```
{
	"name": "Test Update",
	"cpf": "12345678916"
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"id": 5,
	"name": "Test Update",
	"cpf": "12345678916"
}
```

#### 5.5. Para deletar um cliente, acesse o endpoint utilizando DELETE:

```
http://localhost:3333/client
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
{
	"message": "Client deleted successfully"
}
```

Nesse endpoint vale ressaltar que a exclusão é física, ou seja, os dados do cliente não serão persistidos no bando de dados, uma vez deletado, não será possível restaurar as informações.

#### 6. O usuário pode realizar o cadastro da venda de um produto a um cliente utilizando o endpoint abaixo.

#### 6.1. Para registrar a venda, acesse o endpoint utilizando POST:

```
http://localhost:3333/sale
```

O corpo da requisição deverá ser similar a estrutura abaixo:

```
{
	"client_id": 2,
	"product_id": 3,
	"quantity": 1
}
```

O retorno da requisição deverá ser similar a estrutura abaixo:

```
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
