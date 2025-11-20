import { JSX } from "react";

export type forminputType = {
    email?: string;
    username?: string;
    password?: string;
    confirmpassword?: string
}


export type NavinfoType = {
    id: string;
    img?: string;
    title: string;
    icon?: JSX.Element;
    icon1: JSX.Element;
    icon2: JSX.Element;
    icon3: JSX.Element;
    text1: string;
    text2: string;
    text3: string;
}


export type formarticle = {
    id?:string,
    key?:string;
    title: string;
    Categorie: string;
    description: string;
    price: string;
    stock: number;
    img: string;
}
