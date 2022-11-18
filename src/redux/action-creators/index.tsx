import * as MedicalEquipmentActionCreators from '../action-creators/medicalEquipmentActions'
import * as UserProfileActionCreators from '../action-creators/userProfileActions'

export default {
    ...MedicalEquipmentActionCreators,
    ...UserProfileActionCreators,
}