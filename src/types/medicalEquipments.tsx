export interface IMedicalEquipmentType{
    Id: number,
    Name: string,
    Year: number,
    Price: number,
    Brand: string | null,
    Type: string | null,
    Img: string | null,
}

export interface IMedicalEquipmentRequest{
    pageIndex: number,
    pageSize: number,
    columnNameForSorting: string | null,
    sortDirection: string | null,
    requestFilters: IRequestFilters | null,
}

interface IRequestFilters{
    name: string | null,
    brandTitle: string | null,
    typeName: string | null,
}