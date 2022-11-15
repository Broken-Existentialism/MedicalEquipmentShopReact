import { Dispatch } from "react"
import { getAllMedicalEquipments } from "../../api/medicalEquipmentsServiceApi"
import { IMedicalEquipmentRequest } from "../../types/medicalEquipments"
import { MedicalEquipmentAction, MedicalEquipmentsActionTypes } from "../types/medicalEquipmentTypes"

export const fetchMedicalEquipments = (request: IMedicalEquipmentRequest): any => {

    return async (dispatch: Dispatch<MedicalEquipmentAction>) => {
        try {
            dispatch({type: MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS})
            const response = await getAllMedicalEquipments(request)
            dispatch({type: MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS_ERROR,
                payload: 'An error occurred while loading the data'
            })
        }
    }
}
