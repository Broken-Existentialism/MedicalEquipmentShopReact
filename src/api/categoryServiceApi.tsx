import { ICategoryType } from "../types/category"
import { createInstance } from "./api"

const instance = createInstance('api/Category')

export const getAllCategories = async () =>{
    var result = await instance.get<ICategoryType>('')
    return result
}

export const createNewCategory = async (data : FormData) =>{
    var result = await instance.post<ICategoryType>('', data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const deleteCategoryById = async (id: number) =>{
    var result = await instance.delete<ICategoryType>(`${id}`)
    return result
}
