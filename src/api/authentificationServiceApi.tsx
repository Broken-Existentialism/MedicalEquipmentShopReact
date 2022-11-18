import { AxiosResponse } from "axios";
import { ILoginRequest, ILoginResponce } from "../types/authentication";
import { createInstance } from "./api";

const instance = createInstance('api/Authentication/login')

export const login = async (data: ILoginRequest): Promise<AxiosResponse<ILoginResponce>>=>{
 
    let result = await instance.post<ILoginResponce>('', data, { headers: { "Content-Type": "multipart/form-data"}})
    
    return result
}