import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from '../../services/loading.service';
import { CartService } from '../../services/cart.service';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../shared/interfaces/IFood';

interface ImageSlider {
    previewImageSrc: string;
    thumbnailImageSrc: string;
    title: string;
}

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html',
    styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent {
    quantity: number = 1;
    foodResult!: IFood;
    images!: ImageSlider[];
    faAddCart = faCartPlus;
    loading$ = this.loadingService.loading$;
    toolTips = {
        btnCart: 'Add to Cart',
        btnQty: 'Quantity'
    };

    constructor(
        activatedRoute: ActivatedRoute,
        private foodService: FoodService,
        private loadingService: LoadingService,
        private cartService: CartService
    ) {
        activatedRoute.params.subscribe((params) => {
            if (params['id']) {
                this.foodService.getFoodById(params['id']).subscribe((data) => {
                    this.foodResult = data;
                    this.images = [
                        {
                            previewImageSrc: this.foodResult.imageUrl,
                            thumbnailImageSrc: this.foodResult.imageUrl,
                            title: this.foodResult.name
                        },
                        {
                            previewImageSrc: this.foodResult.imageUrl,
                            thumbnailImageSrc: this.foodResult.imageUrl,
                            title: this.foodResult.name
                        },
                        {
                            previewImageSrc: this.foodResult.imageUrl,
                            thumbnailImageSrc: this.foodResult.imageUrl,
                            title: this.foodResult.name
                        }
                    ];
                });
            }
        });
    }

    addToCart() {
        this.cartService.addToCart({
            food: this.foodResult,
            quantity: this.quantity,
            price: this.quantity * this.foodResult.price
        });
    }
}
