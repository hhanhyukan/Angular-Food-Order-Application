import { IFood } from './IFood';

export interface IFoodItem {
    food: IFood;
    quantity: number;
    price: number;
}

export interface IFoodCart {
    items: IFoodItem[];
    totalPrice: number;
}
