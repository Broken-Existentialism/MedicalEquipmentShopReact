import axios from 'axios';

export const createInstance = (url: string) =>{
    return axios.create(
        {
            baseURL: `https://localhost:7201/` + url,
            withCredentials: true,
        }
    )
}

