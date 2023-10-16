import axios from 'axios' // axios é utilizado para fazer requisições HTTP

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})
