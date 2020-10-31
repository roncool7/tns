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
    this.productsDict[Product_ID] = false;
  }

  async checkOut(details) {
    sessionStorage.removeItem('tns');

    const res = await this.myHttpClient
      .post<ContactModel>(cartBaseUrl + "/checkout", {products: this.products, details})
      .toPromise();

    this.products = [];
    this.productsDict = {};

    return res;
  }
}
