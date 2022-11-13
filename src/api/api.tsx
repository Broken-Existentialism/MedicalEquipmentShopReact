import axios from 'axios';
import { IEquipmentItem } from '../types/types';

export const createInstance = (url: string) =>{
    return axios.create(
        {
            baseURL: `https://localhost:7201/` + url,
        }
    )
}

const instance = axios.create(
    {
        baseURL: `https://localhost:7201/api/MedicalEquipments/`,
    }
)

export const getEquipmentById = async (id: number) =>{
    const result = await instance.get<IEquipmentItem>(`${id}`)
    return result
}

export const postNewEquipment = async(bodyFormData: FormData) =>{
    const result = await instance.post('', bodyFormData, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const updateEquipmentById = async(id: number, bodyFormData: FormData) =>{
    const result = await instance.put<IEquipmentItem>(`${id}`, bodyFormData, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const deleteEquipmentById = async(id: number) =>{
    const result = await instance.delete<IEquipmentItem>(`${id}`)
    return result
}

