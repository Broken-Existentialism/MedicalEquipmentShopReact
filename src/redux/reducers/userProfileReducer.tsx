import { IUserProfileState, UserProfileAction, UserProfileActionTypes } from "../types/userProfileTypes"

const initialState: IUserProfileState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    favoriteItemsQuantity: 0,
    shopCartItemsQuantity: 0,
    loading: false,
    error: null,
    isAuth: false
}

const userProfileReducer = (state = initialState, action: UserProfileAction) =>{
    
    switch(action.type){
        case UserProfileActionTypes.FETCH_USER_PROFILE:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case UserProfileActionTypes.FETCH_USER_PROFILE_SUCCESS:
            return{
                ...state,
                ...action.payload,
                loading: false,
                error: null,
            }
        case UserProfileActionTypes.FETCH_USER_PROFILE_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UserProfileActionTypes.SET_DEFAULT_USER_PROFILE:
            return{
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default userProfileReducer

