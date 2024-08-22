import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', // Ajuste para o URL correto da API
});

export default api;

// Interceptor para adicionar o token de autenticação em cada requisição
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    // Lidando com erros na configuração da requisição
    return Promise.reject(error);
});
