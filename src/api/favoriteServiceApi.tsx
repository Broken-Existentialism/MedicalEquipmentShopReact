import { IFavoriteType } from "../types/favorite";
import { createInstance } from "./api";

const instance = createInstance('api/Favorite')

export const getAllFavorites = async (userId: string) =>{
    var result = await instance.get<Array<IFavoriteType>>('', { params: { userId} })
    return result
}

export const createNewFavorite = async (userId: string, MedicalEquipmentId: number) =>{
    var result = await instance.post<IFavoriteType>('', {userId, MedicalEquipmentId})
    return result
}

export const deleteFavoriteById = async (userId: string, MedicalEquipmentId: number) =>{
    var result = await instance.delete<IFavoriteType>('', { params: { userId, MedicalEquipmentId} })
    return result
}