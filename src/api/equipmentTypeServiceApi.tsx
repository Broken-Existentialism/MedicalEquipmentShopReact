import { IEquipmentType } from "../types/equipmentType";
import { createInstance } from "./api";

const instance = createInstance('api/EquipmentType')

export const getEquipmentTypeById = async (id: number) =>{
    var result = await instance.get<IEquipmentType>(`${id}`)
    return result
}

export const getAllEquipmentTypes = async () =>{
    var result = await instance.get<Array<IEquipmentType>>('')
    return result
}

export const createNewEquipmentType = async (data : FormData) =>{
    var result = await instance.post<IEquipmentType>('', data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const partialUpdateEquipmentTypeById = async (id: number, data : FormData) =>{
    var result = await instance.patch<IEquipmentType>(`${id}`, data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const deleteEquipmentTypeById = async (id: number) =>{
    var result = await instance.delete<IEquipmentType>(`${id}`)
    return result
}