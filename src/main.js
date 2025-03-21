import { createHash } from './conexaoApi'

// Referência HTML, onde será apresentado os dados obtidos da API
// dar uma olhada em querySelector
const ul = document.querySelector('[data-js="marvel"]');
const filterInput = document.querySelector('#filter');

// Obtenção do Hash MD5, através do timestamp com o horário atual do sistema, em String
const timeStamp = Date.now().toString();
let hash = createHash(timeStamp);

// Método Get
const getPosts = async(param) => {
    const response = await
     fetch(
        ``
     )
}