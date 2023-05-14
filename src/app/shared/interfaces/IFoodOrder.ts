import { IFoodCart } from './IFoodCart';

export interface IFoodOrder extends IFoodCart {
    addressLatLng: {
        lat: number;
        lng: number;
    };
    name: string;
    address: string;
    user: string;
}
