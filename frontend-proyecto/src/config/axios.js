import axios from 'axios';

const estudianteAxios = axios.create({
    baseURL: 'http://localhost:5000'
})

export default estudianteAxios;