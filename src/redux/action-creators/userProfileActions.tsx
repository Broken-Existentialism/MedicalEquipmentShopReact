import { Dispatch } from "react"
import { getUserById } from "../../api/userServiceApi"
import { UserProfileAction, UserProfileActionTypes } from "../types/userProfileTypes"

export const fetchUserProfile = (request: string | null, isAuth: boolean): any => {

    return async (dispatch: Dispatch<UserProfileAction>) => {
        try {
            dispatch({type: UserProfileActionTypes.FETCH_USER_PROFILE})
            const response = await getUserById(request)
            dispatch({type: UserProfileActionTypes.FETCH_USER_PROFILE_SUCCESS, payload:{...response.data, isAuth}})
        } catch (e) {
            dispatch({
                type: UserProfileActionTypes.FETCH_USER_PROFILE_ERROR,
                payload: 'An error occurred while loading the data'
            })
        }
    }
}

export const setDefaultUserProfile = ():UserProfileAction =>{
    return{
        type: UserProfileActionTypes.SET_DEFAULT_USER_PROFILE,
        payload: {
            id: '', 
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            favoriteItemsQuantity: 0,
            shopCartItemsQuantity: 0,
            isAuth: false,
        }
    }
}
