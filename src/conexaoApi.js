// Teste de conexão simples em JS usando fetch API (?)
// API: Marvel Comics
// Uso do Hash MD5 para conectar no lado servidor
const privateKey = "93c2d84a9f40dce856869ad81e431dda7d01b933";
const publicKey = "79d4c055cd776d43d6b8f9da7de8b229";

// Revisar o uso do Export
// Acessar em outras partes do projeto, no caso o main.js
export function createHash(timeStamp) {
    const myHash = timeStamp + privateKey + publicKey;
    const hashMessage = md5(myHash);

    return hashMessage;
}