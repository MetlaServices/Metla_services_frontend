import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});



export default instance;