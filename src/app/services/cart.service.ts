import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product-model';
import {HttpClient} from "@angular/common/http";
import {ContactModel} from "../models/contactModel";
import {cartBaseUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: ProductModel[] = [];
  productsDict = {};

  constructor(private myHttpClient: HttpClient) {
    const sessionData = JSON.parse(sessionStorage.getItem('tns'));
    this.products = sessionData ? sessionData : [];

    this.products.forEach(product => {
      this.productsDict[product.Product_ID] = product.Amount;
    });
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  addToCart(product: ProductModel): void {
    this.products.push(product);
    this.productsDict[product.Product_ID] = product.Amount;
    sessionStorage.setItem('tns', JSON.stringify(this.products));
  }

  getProductAmount(product: ProductModel) {
    return this.productsDict[product.Product_ID] ? this.productsDict[product.Product_ID] : 0;
  }

  removeFromCart(Product_ID) {
    this.products = this.products.filter(product => product.Product_ID !== Product_ID);
    this.productsDict[Product_ID] = 0;
    sessionStorage.setItem('tns', JSON.stringify(this.products));
  }

  changeAmount(productId, newAmount) {
    if (newAmount < 1 || newAmount > 10) {
      return;
    }

    const products = this.products.find(prod => prod.Product_ID === productId);
    products.Amount = newAmount;
    this.productsDict[productId] = newAmount;
    sessionStorage.setItem('tns', JSON.stringify(this.products));
  }

  emptyCart() {
    sessionStorage.removeItem('tns');
    this.products = [];
    this.productsDict = {};
  }

  checkOut(details, deliveryOption,totalPrice) {
    return this.myHttpClient
      .post<ContactModel>(cartBaseUrl + "/checkout", {products: this.products, details, deliveryOption: deliveryOption.title,totalPrice:totalPrice})
      .toPromise();
  }
}
