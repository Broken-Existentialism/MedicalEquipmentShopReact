import { IMedicalEquipmentRequest, IMedicalEquipmentResponce, IMedicalEquipmentType } from "../types/medicalEquipments";
import { createInstance } from "./api";

const instance =  createInstance('api/MedicalEquipments')

export const getMedicalEquipmentById = async (id: number) =>{
    const result = await instance.get<IMedicalEquipmentType>(`${id}`)
    return result
}

export const getAllMedicalEquipments = async (request: IMedicalEquipmentRequest) =>{
    const result = await instance.get<IMedicalEquipmentResponce>('', { params: {
        pageIndex: request.pageIndex,
        pageSize: request.pageSize,
        columnNameForSorting: request.columnNameForSorting,
        sortDirection: request.sortDirection,
        'requestFilters.Name': request.requestFilters?.name,
        'requestFilters.brandTitle': request.requestFilters?.brandTitle,
        'requestFilters.typeName': request.requestFilters?.typeName,
    }})
    return result
}

export const createNewMedicalEquipment = async (data : FormData) =>{
    var result = await instance.post<IMedicalEquipmentType>('', data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const updateMedicalEquipmentById = async (id: number, data : FormData) =>{
    var result = await instance.put<IMedicalEquipmentType>(`${id}`, data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const partialUpdateMedicalEquipmentById = async (id: number, data : FormData) =>{
    var result = await instance.patch<IMedicalEquipmentType>(`${id}`, data, { headers: { "Content-Type": "multipart/form-data"}})
    return result
}

export const deleteMedicalEquipmentById = async (id: number) =>{
    var result = await instance.delete<IMedicalEquipmentType>(`${id}`)
    return result
}