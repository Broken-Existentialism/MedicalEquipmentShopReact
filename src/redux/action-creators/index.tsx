import * as MedicalEquipmentActionCreators from '../action-creators/medicalEquipmentActions'
import * as UserProfileActionCreators from '../action-creators/userProfileActions'
import * as ShopCartActionCreators from '../action-creators/shopCartActions'

export default {
    ...MedicalEquipmentActionCreators,
    ...UserProfileActionCreators,
    ...ShopCartActionCreators,
}