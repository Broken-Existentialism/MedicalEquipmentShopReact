import axios from "axios"
import { IUserProfileType } from "../types/userProfile"

const instance = axios.create(
    {
        baseURL: `https://localhost:7201/api/UserProfile/`,
    }
)

export const getUserById = async (id: string) =>{
    var result = await instance.get<IUserProfileType>(`${id}`)
    return result
}

