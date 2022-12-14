import { IUserProfileResponce } from "../../types/userProfile";

export interface IUserProfileState{
    id: string, 
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    favoriteItemsQuantity: number,
    shopCartItemsQuantity: number,
    isAuth: boolean,
    loading: boolean,
    error: string | null,
}

export enum UserProfileActionTypes {
    FETCH_USER_PROFILE = 'FETCH_USER_PROFILE',
    FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS',
    FETCH_USER_PROFILE_ERROR = 'FETCH_USER_PROFILE_ERROR',
    SET_DEFAULT_USER_PROFILE = 'SET_DEFAULT_USER_PROFILE',
}

interface FetchUserProfileAction {
    type: UserProfileActionTypes.FETCH_USER_PROFILE
}
interface FetchUserProfileSuccessAction {
    type: UserProfileActionTypes.FETCH_USER_PROFILE_SUCCESS
    payload: IUserProfileResponce,
}
interface FetchUserProfileErrorAction {
    type: UserProfileActionTypes.FETCH_USER_PROFILE_ERROR
    payload: string;
}

interface SetUserProfileDefault {
    type: UserProfileActionTypes.SET_DEFAULT_USER_PROFILE
    payload: IUserProfileResponce
}

export type UserProfileAction = 
    FetchUserProfileAction | 
    FetchUserProfileSuccessAction | 
    FetchUserProfileErrorAction | 
    SetUserProfileDefault
