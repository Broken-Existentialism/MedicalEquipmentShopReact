export interface IFavoriteType{
    id: number,
    name: string,
    year: number,
    price: number,
    img: string | null,
}

export interface IFavoritesResponce{
    items: IFavoriteType[]
}