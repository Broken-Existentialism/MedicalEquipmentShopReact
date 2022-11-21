import { IFavoritesResponce, IFavoriteType } from "../types/favorite";
import { createInstance } from "./api";

const instance = createInstance('api/Favorite')

instance.interceptors.request.use((config: any) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export const getAllFavorites = async () =>{
    var result = await instance.get<IFavoritesResponce>('')
    return result
}

export const createNewFavorite = async (equipmentId: number) =>{
    var result = await instance.post<IFavoriteType>(`?MedicalEquipmentId=${equipmentId}`)
    return result
}

export const deleteFavoriteById = async (MedicalEquipmentId: number) =>{
    var result = await instance.delete<IFavoriteType>('', { params: { MedicalEquipmentId} })
    return result
}