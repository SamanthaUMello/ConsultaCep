import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const buscarCep = async (cep) => {
  try {
    const response = await api.get(`${cep}/json`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar o endereço.');
  }
};
