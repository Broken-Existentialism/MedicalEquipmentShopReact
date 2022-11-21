import { Dispatch } from "react"
import { getAllFavorites } from "../../api/favoriteServiceApi"
import { FavoritesAction, FavoritesActionTypes } from "../types/favoritesTypes"

export const fetchFavoritesEquipments = (): any => {

    return async (dispatch: Dispatch<FavoritesAction>) => {
        try {
            dispatch({type: FavoritesActionTypes.FETCH_FAVORITES_EQUIPMENTS})
            const response = await getAllFavorites()
            dispatch({type: FavoritesActionTypes.FETCH_FAVORITES_EQUIPMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: FavoritesActionTypes.FETCH_FAVORITEST_EQUIPMENTS_ERROR,
                payload: 'An error occurred while loading the data'
            })
        }
    }
}

export const setDefaultFavorites = (): FavoritesAction=>{
    return{
        type: FavoritesActionTypes.SET_FAVORITEST_EQUIPMENTS_DEFAULT,
        payload: {
            items: [],
        }
    }
}