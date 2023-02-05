export interface IBrandType{
    id: string,
    title: string,
    country: string,
    discount: number | null,
    img: string | null,
}

export interface ICreateBrandType{
    title: string,
    country: string,
    discount: string| null,
}


export {}