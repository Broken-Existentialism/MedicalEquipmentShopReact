import { IShopCartEquipment, IShopCartResponce } from "../../types/shopCartEquipment";

export interface IShopCartState{
    items:IShopCartEquipment[],
    total: number,
    loading: boolean,
    error: string | null,
}

export enum ShopCartActionTypes {
    FETCH_SHOPCART_EQUIPMENTS = 'FETCH_SHOPCART_EQUIPMENTS',
    FETCH_SHOPCART_EQUIPMENTS_SUCCESS = 'FETCH_SHOPCART_EQUIPMENTS_SUCCESS',
    FETCH_SHOPCART_EQUIPMENTS_ERROR = 'FETCH_SHOPCART_EQUIPMENTS_ERROR',
}

interface FetcHShopCartAction {
    type: ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS;
}
interface FetchShopCartSuccessAction {
    type: ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS_SUCCESS
    payload: IShopCartResponce,
}
interface FetchShopCartErrorAction {
    type: ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS_ERROR
    payload: string;
}

export type ShopCartAction = FetcHShopCartAction | FetchShopCartSuccessAction | FetchShopCartErrorAction