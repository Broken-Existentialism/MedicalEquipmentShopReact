export interface ILoginRequest{
    email: string,
    password: string,
    confirmPassword: string,
}

export interface ILoginResponce{
    isAuth: boolean,
    id: string,
    token: string,
}