export interface Product{
    imgURL:string;
    uid?: string;
    productName: string;
    productDescription: string;
    keywords: string;
    condition: string;
    freeShipping:boolean;
    price:number;
    rating?:number;
    id?:string;
    date?:Object;
}