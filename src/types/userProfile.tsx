export interface IUserProfileResponce{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string
    isAuth: boolean,
    favoriteItemsQuantity: number,
    shopCartItemsQuantity: number,
}