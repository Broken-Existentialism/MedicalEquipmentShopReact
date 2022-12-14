export interface IShopCartEquipment{
    id: number,
    name: string,
    year: number,
    price: number,
    quantity: number,
    img: string | null,
}

export interface IShopCartResponce{
    items: IShopCartEquipment[]
}
