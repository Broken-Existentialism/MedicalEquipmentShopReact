import { IMedicalEquipmentState, MedicalEquipmentAction, MedicalEquipmentsActionTypes } from "../types/medicalEquipmentTypes"

const initialState: IMedicalEquipmentState = {
    pageIndex: 0,
    pageSize: 0,
    total: 0,
    items: [],
    loading: false,
    error: null,
}

const medicalEquipmentsReducer = (state = initialState, action: MedicalEquipmentAction): IMedicalEquipmentState =>{
    switch(action.type){
        case MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS:
            return{
                ...state,
                loading: true, 
                error: null, 
                items:[]
            }
        case  MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS_SUCCESS:
            return{
                ...state,
                ...action.payload,
                loading: false, 
                error: null, 
                items:[... action.payload.items]}
        case  MedicalEquipmentsActionTypes.FETCH_MEDICAL_EQUIPMENTS_ERROR:
            return{
                ...state,
                loading: false, 
                error: action.payload, 
                items:[]}
        default:
            return state
    }
}
export default medicalEquipmentsReducer

