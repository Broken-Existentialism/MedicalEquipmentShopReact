import { IShopCartEquipment } from "../types/shopCartEquipment";
import { createInstance } from "./api";

const instance = createInstance('api/ShopCart')

export const getAllShopCartEquipments = async (userId: string) =>{
    var result = await instance.get<Array<IShopCartEquipment>>('', { params: { userId} })
    return result
}

export const createNewFavorite = async (userId: string, MedicalEquipmentId: number) =>{
    var result = await instance.post<IShopCartEquipment>('', {userId, MedicalEquipmentId})
    return result
}

export const deleteFavoriteById = async (userId: string, MedicalEquipmentId: number) =>{
    var result = await instance.delete<IShopCartEquipment>('', { params: { userId, MedicalEquipmentId} })
    return result
}