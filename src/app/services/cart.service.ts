import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: ProductModel[] = [];
  productsDict = {};

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }

  addToCart(product: ProductModel): void {
    this.products.push(product);
    this.productsDict[product.Product_ID] = true;
  }

  checkProductInCart(product: ProductModel) {
    return this.productsDict[product.Product_ID] ? this.productsDict[product.Product_ID] : false;
  }

  removeFromCart(Product_ID) {
    this.products = this.products.filter(product => product.Product_ID !== Product_ID);
    this.productsDict[Product_ID] = false;
  }
}
