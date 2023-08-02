import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.VITE_SERVER_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;