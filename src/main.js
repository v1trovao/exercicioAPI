import { createHash } from './conexaoApi.js'

const publicKey = "79d4c055cd776d43d6b8f9da7de8b229";
// Referência HTML, onde será apresentado os dados obtidos da API
// dar uma olhada em querySelector
const ul = document.querySelector('[data-js="marvel"]');
const filterInput = document.querySelector('#filter');

// Obtenção do Hash MD5, através do timestamp com o horário atual do sistema, em String
const timeStamp = Date.now().toString();
let hash = createHash(timeStamp);
console.log(timeStamp);
console.log(hash);

// Método Get
// Conceitos 
// async, await, fetch, arrow functions, promises
// .json()
const getPosts = async() => {
   // resposta com await, só atribui valor quando o fetch() executar
    const response = await
     // Método de requisição HTTP assíncrona
     // Possui tbm o XMLHTTPRequest, mais verboso
     // Parâmetros:
     // URL de acesso a API
     // Retorno: Promise, resposta
     fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
     // Retorna como objeto JSON, e exibir na aplicação
     console.log(response);
     return response.json();
}

// Estados de Exibição na Página:
// 1. Feed -> Lista de Objetos Retornados pela API
// 2. Search -> Objeto específico que pode ser pesquisado
// Conceitos
// Callback Funcions, Map, Join
const herosFromFeed = heros => heros.data.results.map(
   item => `
   <li class="card ${'normal'}">
   <h2 class="card-title">${item.title}</h2>
   </li>
   `).join('')

const herosFromFeed2 = heros => heros.map(
   item => `
   <li class="card ${'normal'}">
   <h2 class="card-title">${item.title}</h2>
   </li>
   `).join('');


// Funções que chamam o GET e preenchem a págiana com innerHTML
// Exibe os heróis iniciais, em ordem alfabética, 20 personagens
const earlyFeed = async () => {
   console.log("Feed Inicial")
   const heros = await getPosts();
   console.log(heros);
   const postsTemplate = herosFromFeed(heros);
   ul.innerHTML = postsTemplate;
}

// Evento: pesquisar personagem
// Verifica se algo foi digitado na barra de pesquisa
// Conceitos: event (deprecated)
const modifyInputValue = event => {
   
   const inputValue = event.target.value.toLowerCase();
   if (inputValue === '' || inputValue === null) {
      earlyFeed();
   }
}
// Feed Inicial
earlyFeed();
