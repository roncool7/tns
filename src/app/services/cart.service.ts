import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: ProductModel[] = [];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }

  removeFromCart(Product_ID) {
    // this.products.map(product => {
    //   if (product.Product_ID === Product_ID) {
    //
    //   }
    //   return product;
    // });
  }

  addToCart(product: ProductModel): void {
    this.products.push(product);
  }
}
