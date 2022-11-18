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

export interface IRegisterRequest{
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
}

export interface IRegisterResponce{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
}