# To-Do List API com SQLite em Node.js e Consumo HTML

# Descrição:

Este repositório contém a criação de um aplicativo To-Do List completo, desenvolvido com Node.js. O projeto é dividido em duas partes principais: uma API REST que utiliza o banco de dados SQLite para gerenciar as tarefas e uma interface de usuário em HTML para interagir com essa API.

# Funcionalidades da API REST (api_to_do_list):

Construída usando o framework Express.js, a API oferece endpoints para criação, leitura, atualização e exclusão de tarefas.
Utiliza o banco de dados SQLite para armazenar e persistir as tarefas.
Organizada em rotas e controladores para uma estrutura de código limpa e modular.


# Consumo da API em HTML (consume_api):

A pasta "consume_api" contém uma página HTML simples que consome a API.
Utiliza JavaScript para fazer chamadas AJAX (usando a função fetch) para os endpoints da API.
Permite ao usuário visualizar, adicionar, atualizar e excluir tarefas diretamente na interface do navegador.


# Instruções:

Clone este repositório em sua máquina local com git clone **https://github.com/seu-usuario/to-do-list.git.**
Acesse a pasta "api_to_do_list" e instale as dependências com **npm install**. Inicie o servidor com **npm start** para rodar a API.
Navegue até a pasta "consume_api", abra o arquivo index.html em seu navegador para acessar a interface de consumo da API.