export interface IMedicalEquipmentType{
    id: number,
    name: string,
    year: number,
    price: number,
    brand: string | null,
    equipmnetType: string | null,
    categoryName: string | null,
    img: string | null,
}

export interface IMedicalEquipmentRequest{
    pageIndex: number,
    pageSize: number,
    columnNameForSorting: string | null,
    sortDirection: string | null,
    requestFilters: IRequestFilters | null,
}

export interface IMedicalEquipmentResponce{
    pageIndex: number,
    pageSize: number,
    total: number,
    items: IMedicalEquipmentType[],
}

interface IRequestFilters{
    name: string | null | undefined,
    brandTitle: string | null | undefined,
    typeName: string | null | undefined
    categoryName: string | null | undefined,
}