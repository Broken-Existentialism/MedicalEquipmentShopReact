import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as MedicalEquipmentActionCreators from '../redux/action-creators/medicalEquipmentActions'

export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(MedicalEquipmentActionCreators, dispatch)
}

export {}