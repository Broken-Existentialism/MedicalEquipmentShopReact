import { FavoritesAction, FavoritesActionTypes, IFavoriteState } from "../types/favoritesTypes"

const initialState: IFavoriteState = {
    total: 0,
    items: [],
    loading: false,
    error: null,
}

const favoriteEquipmentReducer = (state = initialState, action: FavoritesAction): IFavoriteState =>{
    switch(action.type){
        case FavoritesActionTypes.FETCH_FAVORITES_EQUIPMENTS:
            return{
                ...state,
                loading: true, 
                error: null, 
                items:[]
            }
        case FavoritesActionTypes.FETCH_FAVORITES_EQUIPMENTS_SUCCESS:
            return{
                ...state,
                loading: false, 
                error: null, 
                items:[...action.payload.items],
                total: action.payload.items.length,
            }
        case FavoritesActionTypes.FETCH_FAVORITEST_EQUIPMENTS_ERROR:
            return{
                ...state,
                loading: false, 
                error: action.payload, 
                items:[]}
        case FavoritesActionTypes.SET_FAVORITEST_EQUIPMENTS_DEFAULT:
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
export default favoriteEquipmentReducer 

