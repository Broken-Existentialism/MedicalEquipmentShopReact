import { CURRENT_PAGE, PAGE_SIZE, SORT_DIRECTION_ASCENDING } from "../../utils/consts"
import { FiltersAction, FiltersActionTypes, IFilters, IFilterState } from "../types/filterTypes"

export const setFilters = (filters: IFilters): FiltersAction =>{
    return{
        type: FiltersActionTypes.SET_FILTERS,
        payload: filters,
    }
}

export const setPageIndex = (pageIndex: number): FiltersAction =>{
    return{
        type: FiltersActionTypes.SET_PAGE_INDEX,
        payload: pageIndex
    }
}

export const setColumnForSorting= (columnNameForSorting: string | null): FiltersAction =>{
    return{
        type: FiltersActionTypes.SET_COLUMN_FOR_SORTING,
        payload: columnNameForSorting
    }
}

export const setSortDirection= (sortDirection: string | null): FiltersAction =>{
    return{
        type: FiltersActionTypes.SET_SORT_DIRECTION,
        payload: sortDirection
    }
}

export const setDefaulFilters= (): FiltersAction =>{
    return{
        type: FiltersActionTypes.SET_DEFAULT_FILTERS,
        payload: {
            pageIndex: CURRENT_PAGE,
            pageSize: PAGE_SIZE,
            columnNameForSorting: 'price',
            sortDirection: SORT_DIRECTION_ASCENDING,
            name: null,
            brandTitle: null,
            typeName: null,
            categoryName: null,
        }
    }
}