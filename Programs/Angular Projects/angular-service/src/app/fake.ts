// it is use to map the json data retrieve from backend technologies 
export interface Fake {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:Rate;
}
export interface Rate {
    rate:number;
    count:number;
}