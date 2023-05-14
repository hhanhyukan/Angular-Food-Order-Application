export interface IFood {
    id: string;
    name: string;
    cookTime: string;
    price: number;
    favorite: boolean;
    origins: string[];
    stars: number;
    imageUrl: string;
    tags: string[];
}

export interface IFoodTag {
    name: string;
    count: number;
}
