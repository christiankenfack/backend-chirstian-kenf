export interface Product {
    images: string[];
    name: string;
    price: number;
    specifications: string[];
    descriptions: string[];
    reviews: number[];
    returnPolicies: string;
    brand: string;
    category: string;
    pricediscount?: number;
    percentagediscount?: number;
}