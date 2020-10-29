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

  addToCart(product: ProductModel): void {
    this.products.push(product);
  }
}
