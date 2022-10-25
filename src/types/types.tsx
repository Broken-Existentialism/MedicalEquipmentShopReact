export interface ICatalogItem{
    title: string,
    icon: string,
    path: string,
}

export interface IEquipmentItem{
    Id: number,
    Name: string,
    Year: number,
    Price: number,
    Brand: string,
    Type: string,
    Img: string | null,
}