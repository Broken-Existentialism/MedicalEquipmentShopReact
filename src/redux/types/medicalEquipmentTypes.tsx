import { IMedicalEquipmentResponce, IMedicalEquipmentType } from "../../types/medicalEquipments";

export interface IMedicalEquipmentState{
    pageIndex: number,
    pageSize: number,
    total: number,
    loading: boolean,
    error: string | null,
    items: IMedicalEquipmentType[],
}

export enum MedicalEquipmentsActionTypes {
    FETCH_MEDICAL_EQUIPMENTS = 'FETCH_MEDICAL_EQUIPMENTS',
    FETCH_MEDICAL_EQUIPMENTS_SUCCESS = 'FETCH_MEDICAL_EQUIPMENTS_SUCCESS',
    FETCH_MEDICAL_EQUIPMENTS_ERROR = 'FETCH_MEDICAL_EQUIPMENTS_ERROR',
}

interface FetchMedicalEquipmentsAction {
    type: MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS;
}
interface FetchMedicalEquipmentsSuccessAction {
    type: MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS_SUCCESS;
    payload: IMedicalEquipmentResponce,
}
interface FetchMedicalEquipmentsErrorAction {
    type: MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS_ERROR;
    payload: string;
}

export type MedicalEquipmentAction = FetchMedicalEquipmentsAction | FetchMedicalEquipmentsErrorAction | FetchMedicalEquipmentsSuccessAction