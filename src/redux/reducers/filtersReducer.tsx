import { FiltersAction, FiltersActionTypes, IFilterState } from "../types/filterTypes"

const initialState: IFilterState = {
    pageIndex: 1,
    pageSize: 3,
    columnNameForSorting: null,
    sortDirection: null,
    name: null,
    brandTitle: null,
    typeName: null
}

const filtersReducer = (state = initialState, action: FiltersAction): IFilterState =>{
    switch(action.type){
        case FiltersActionTypes.SET_FILTERS:
            return{
                ...state,
                ...action.payload,
            }
        case FiltersActionTypes.SET_PAGE_INDEX:
            return{
                ...state,
                pageIndex: action.payload
            }
        case FiltersActionTypes.SET_COLUMN_FOR_SORTING:
            return{
                ...state,
                columnNameForSorting: action.payload
            }
         case FiltersActionTypes.SET_SORT_DIRECTION:
            return{
                ...state,
                sortDirection: action.payload
            }
         case FiltersActionTypes.SET_DEFAULT_FILTERS:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default filtersReducer

