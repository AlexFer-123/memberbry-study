import axios from "axios";
export const upload_api = axios.create({
    baseURL: 'https://api-v2.pandavideo.com.br/',
    headers: {
        Authorization: process.env.VUE_APP_API_TOKEN
    }
})
