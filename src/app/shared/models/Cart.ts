import { IFoodItem } from '../interfaces/IFoodCart';

export class Cart {
    items: IFoodItem[] = [];
    totalPrice!: number;
}
