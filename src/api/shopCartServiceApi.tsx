import { IShopCartEquipment, IShopCartResponce } from "../types/shopCartEquipment";
import { createInstance } from "./api";

const instance = createInstance('api/ShopCart')

instance.interceptors.request.use((config: any) =>{

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export const getAllShopCartEquipments = async () =>{
    let result = await instance.get<IShopCartResponce>('')
    return result
}

export const createNewShopCartEquipment = async (equipmentId: number) =>{
    var result = await instance.post<IShopCartEquipment>(`?MedicalEquipmentId=${equipmentId}`)
    return result
}

export const deleteShopCartEquipmentById = async (MedicalEquipmentId: number) =>{
    var result = await instance.delete<IShopCartEquipment>('', { params: {MedicalEquipmentId} })
    return result
}