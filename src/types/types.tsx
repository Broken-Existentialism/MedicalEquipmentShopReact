export interface ICatalogItem{
    title: string,
    icon: string | null,
    path: string,
}

export interface IEquipmentItem{
    Id: number,
    Name: string,
    Year: number,
    Price: number,
    Brand: string | null,
    Type: string | null,
    Img: string | null,
}