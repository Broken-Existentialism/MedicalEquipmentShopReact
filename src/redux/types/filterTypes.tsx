export interface IFilterState{
    pageIndex: number,
    pageSize: number,
    columnNameForSorting: string | null,
    sortDirection: string | null,
    name: string | null,
    brandTitle: string | null,
    typeName: string | null,
    categoryName: string | null
}

export interface IFilters{
    name: string | null,
    brandTitle: string | null,
    typeName: string | null,
    categoryName: string | null
}


export enum FiltersActionTypes {
    SET_FILTERS = 'SET_FILTERS',
    SET_PAGE_INDEX = 'SET_PAGE_INDEX',
    SET_COLUMN_FOR_SORTING = 'SET_COLUMN_FOR_SORTING',
    SET_SORT_DIRECTION = 'SET_SORT_DIRECTION',
    SET_DEFAULT_FILTERS = 'SET_DEFAULT_FILTERS'
}

interface SetFiltersAction {
    type: FiltersActionTypes.SET_FILTERS,
    payload: IFilters
}

interface SetPageIndex{
    type: FiltersActionTypes.SET_PAGE_INDEX,
    payload: number
}

interface SetColumnForSorting{
    type: FiltersActionTypes.SET_COLUMN_FOR_SORTING,
    payload: string | null,
}

interface SetSortDirection{
    type: FiltersActionTypes.SET_SORT_DIRECTION,
    payload: string | null
}

interface SetDefaultFilters{
    type: FiltersActionTypes.SET_DEFAULT_FILTERS,
    payload: IFilterState
}


export type FiltersAction = SetFiltersAction | SetPageIndex | SetColumnForSorting | SetSortDirection | SetDefaultFilters