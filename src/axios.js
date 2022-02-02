import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The API (Cloud Function using NodeJs)
});

export default instance;
