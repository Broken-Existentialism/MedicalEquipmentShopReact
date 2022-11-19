import { Dispatch } from "react"
import { getAllShopCartEquipments } from "../../api/shopCartServiceApi"
import { ShopCartAction, ShopCartActionTypes } from "../types/shopCartTypes"

export const fetchShopCartEquipments = (): any => {

    return async (dispatch: Dispatch<ShopCartAction>) => {
        try {
            dispatch({type: ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS})
            const response = await getAllShopCartEquipments()
            dispatch({type: ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS_ERROR,
                payload: 'An error occurred while loading the data'
            })
        }
    }
}
