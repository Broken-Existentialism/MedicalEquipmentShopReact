import { IBrandType } from "../types/brand"
import { createInstance } from "./api"

const instance = createInstance('api/Brands')

instance.interceptors.request.use((config: any) =>{

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export const getBrandById = async (id: number) =>{
    var result = await instance.get<IBrandType>(`${id}`)
    return result
}

export const getAllBrands = async () =>{
    var result = await instance.get<Array<IBrandType>>('')
    return result
}

export const createNewBrand = async (data : FormData) =>{
    var result = await instance.post<IBrandType>('', data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const updateBrandById = async (id: number, data : FormData) =>{
    var result = await instance.put<IBrandType>(`${id}`, data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const partialUpdateBrandById = async (id: number, data : FormData) =>{
    var result = await instance.patch<IBrandType>(`${id}`, data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const deleteBrandById = async (id: number) =>{
    var result = await instance.delete<IBrandType>(`${id}`)
    return result
}
