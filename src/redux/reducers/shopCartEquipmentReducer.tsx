import { IShopCartState, ShopCartAction, ShopCartActionTypes } from "../types/shopCartTypes"

const initialState: IShopCartState= {
    total: 0,
    items: [],
    loading: false,
    error: null,
}

const shopCartEquipmentReducer = (state = initialState, action: ShopCartAction): IShopCartState =>{
    switch(action.type){
        case ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS:
            return{
                ...state,
                loading: true, 
                error: null, 
                items:[]
            }
        case ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS_SUCCESS:
            return{
                ...state,
                loading: false, 
                error: null, 
                items:[...action.payload.items],
                total: action.payload.items.length,
            }
        case  ShopCartActionTypes.FETCH_SHOPCART_EQUIPMENTS_ERROR:
            return{
                ...state,
                loading: false, 
                error: action.payload, 
                items:[]}
        case  ShopCartActionTypes.SET_SHOPCART_EQUIPMENTS_DEFAULT:
            return{
                ...state,
                loading: false, 
                error: null,
                items:[...action.payload.items],
                total: action.payload.items.length,
            }
        default:
            return state
    }
}
export default shopCartEquipmentReducer

