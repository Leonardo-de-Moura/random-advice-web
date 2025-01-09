Aplicativo de Conselhos Aleatórios


Um aplicativo web simples construído com HTML, CSS e JavaScript que exibe conselhos aleatórios obtidos de uma API externa. Ótimo para praticar integração com APIs e construir aplicações web dinâmicas.

Recursos

Busca conselhos aleatórios da Advice Slip API.

Exibe os conselhos dinamicamente no navegador.

Design minimalista e responsivo.

Demonstração

Confira a demonstração ao vivo aqui.

Instalação

Clone o repositório:

git clone https://github.com/Leonardo-de-Moura/random-advice-web.git

Navegue até o diretório do projeto:

cd random-advice-web

Abra o arquivo index.html no navegador:

open index.html

Como Usar

Carregue o aplicativo no navegador.

Recarregue a página para buscar um novo conselho aleatório.


Tecnologias Utilizadas

HTML: Estrutura do aplicativo.

CSS: Estilização do aplicativo, incluindo responsividade.

JavaScript: Integração com a API e atualização dinâmica do DOM.

Referência da API

Este projeto utiliza a Advice Slip API, que fornece conselhos aleatórios em formato JSON. Exemplo de requisição:

GET https://api.adviceslip.com/advice

Exemplo de resposta:

{
  "slip": {
    "id": 45,
    "advice": "Always remember that your own resolution to succeed is more important than any other."
  }
}


