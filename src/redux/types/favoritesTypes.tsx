import { IFavoritesResponce, IFavoriteType } from "../../types/favorite";

export interface IFavoriteState{
    total: number,
    items: IFavoriteType[]
    loading: boolean,
    error: string | null
}

export enum FavoritesActionTypes {
    FETCH_FAVORITES_EQUIPMENTS = 'FETCH_FAVORITES_EQUIPMENTS',
    FETCH_FAVORITES_EQUIPMENTS_SUCCESS = 'FETCH_FAVORITES_EQUIPMENTS_SUCCESS',
    FETCH_FAVORITEST_EQUIPMENTS_ERROR = 'FETCH_FAVORITEST_EQUIPMENTS_ERROR',
    SET_FAVORITEST_EQUIPMENTS_DEFAULT = ' SET_FAVORITEST_EQUIPMENTS_DEFAULT',
}

interface FetchFavoritesAction {
    type: FavoritesActionTypes.FETCH_FAVORITES_EQUIPMENTS
}

interface FetchFavoritesSuccessAction {
    type: FavoritesActionTypes.FETCH_FAVORITES_EQUIPMENTS_SUCCESS
    payload: IFavoritesResponce
}

interface FetchFavoritesErrorAction {
    type: FavoritesActionTypes.FETCH_FAVORITEST_EQUIPMENTS_ERROR
    payload: string;
}

interface SetFavoritesDefaultAction {
    type: FavoritesActionTypes.SET_FAVORITEST_EQUIPMENTS_DEFAULT
    payload: IFavoritesResponce
}
export type FavoritesAction = FetchFavoritesAction | FetchFavoritesSuccessAction | FetchFavoritesErrorAction | SetFavoritesDefaultAction