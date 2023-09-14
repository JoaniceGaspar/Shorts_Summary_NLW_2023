/* Importar a Biblioteca que vai conectar o Frontend ao Backend */
import axios from "axios"

/* Criar a configuração do axios */
export const server = axios.create({
  baseURL: "http://localhost:3333",
})

/* 
Export -> server para tornar o ficheiro disponível para ser importado por qualquer outro ficheiro */
