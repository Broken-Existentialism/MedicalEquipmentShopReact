import { IUserProfileResponce } from "../types/userProfile"
import { createInstance } from "./api"

const instance =  createInstance('api/UserProfile')

export const getUserById = async (id: string | null) =>{
    let result = await instance.get<IUserProfileResponce>(`${id}`)
    return result
}

