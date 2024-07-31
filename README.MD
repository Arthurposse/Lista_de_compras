# Lista de Compras - Aplicação React (Arthur Possebon)

## Descrição
Esta aplicação em React permite ao usuário criar e gerenciar uma lista de compras. A aplicação possui funcionalidades para adicionar, editar e remover itens da lista.

## Componentes

### Formulario
- **Descrição**: Componente responsável por renderizar o formulário para adicionar e editar itens da lista.
- **Props**:
  - `textoItem`: Estado que armazena o nome do item.
  - `setTextoItem`: Função para atualizar o estado do nome do item.
  - `textoQuant`: Estado que armazena a quantidade do item.
  - `setTextoQuant`: Função para atualizar o estado da quantidade do item.
  - `textoItemEditado`: Estado que armazena o nome do item em edição.
  - `setTextoItemEditado`: Função para atualizar o estado do nome do item em edição.
  - `textoQuantEditado`: Estado que armazena a quantidade do item em edição.
  - `setTextoQuantEditado`: Função para atualizar o estado da quantidade do item em edição.
  - `adicionarItem`: Função para adicionar um novo item à lista.
  - `salvarEdicao`: Função para salvar as alterações feitas no item em edição.
  - `cancelarEdicao`: Função para cancelar a edição de um item.
  - `editandoIndex`: Estado que armazena o índice do item em edição.

### ListaCompras
- **Descrição**: Componente responsável por renderizar cada item da lista de compras.
- **Props**:
  - `item`: Nome do item.
  - `quant`: Quantidade do item.
  - `onExcluir`: Função para excluir um item da lista.
  - `onEditar`: Função para iniciar a edição de um item.

### App
- **Descrição**: Componente principal que gerencia o estado da aplicação e renderiza os componentes `Formulario` e `ListaCompras`.

## Instalação

### Pré-requisitos
- Node.js instalado

### Passo a Passo

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Uso
Após iniciar o servidor de desenvolvimento, a aplicação estará disponível em `http://localhost:3000`. Você pode adicionar itens à lista preenchendo o formulário e clicando no botão "Adicionar". Para editar um item, clique no botão "Editar" ao lado do item desejado, faça as alterações necessárias e clique em "Salvar". Para excluir um item, clique no botão "Excluir".

## Deploy no Surge

Para enviar a aplicação para o Surge, siga os passos abaixo:

1. Instale o Surge CLI globalmente:
    ```bash
    npm install -g surge
    ```

2. Construa a aplicação para produção:
    ```bash
    npm run build
    ```

3. Navegue até o diretório de build:
    ```bash
    cd build
    ```

4. Envie a aplicação para o Surge:
    ```bash
    surge
    ```

5. Siga as instruções do Surge CLI para completar o deploy. Você precisará fornecer um nome de domínio único para sua aplicação.

Após completar esses passos, sua aplicação estará disponível no domínio fornecido no Surge.