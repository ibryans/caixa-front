// Criação de uma instância do Axios já com a url configurada
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
})