import { AxiosResponse } from "axios";
import { ILoginRequest, ILoginResponce, IRegisterRequest, IRegisterResponce } from "../types/authentication";
import { createInstance } from "./api";

const instance = createInstance('api/Authentication')

export const registration  = async (data: IRegisterRequest ): Promise<AxiosResponse<IRegisterResponce>> =>{
    let result = await instance.post<IRegisterResponce>('register', data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const login = async (data: any): Promise<AxiosResponse<ILoginResponce>>=>{
    let result = await instance.post<ILoginResponce>('login', data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const logout = () =>{
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
}