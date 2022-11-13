import { IEquipmentInfoType } from "../types/equipmentInfo";
import { createInstance } from "./api";

const instance = createInstance('api/EquipmentInfo')

export const getEquipmentInfoById = async (id: number) =>{
    var result = await instance.get<IEquipmentInfoType>(`${id}`)
    return result
}