import { productsBaseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private myHttpClient: HttpClient) {}

  // Get on remote products
  public getRemoteProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/onRemoteProducts')
      .toPromise();
  }
  // Get on wheels products
  public getWheelsProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/onWheelsProducts')
      .toPromise();
  }
  // Get motorized products
  public getMotorizedProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/motorizedProducts')
      .toPromise();
  }
  // Get pop-creation products
  public getPopCreationProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/popCreationProducts')
      .toPromise();
  }
  // Get box-thinking products
  public getBoxThinkingProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/boxThinkingProducts')
      .toPromise();
  }
  // Get dolls-characters products
  public getDollsCharactersProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/dollsCharactersProducts')
      .toPromise();
  }
  // Get kitchens-dallhouses products
  public getKitchensDallhousesProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/kitchensDallhousesProducts')
      .toPromise();
  }
  // Get lego-gunz products
  public getLegoGunzProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/legoGunzProducts')
      .toPromise();
  }
  // Get babies products
  public getBabiesProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/babiesProducts')
      .toPromise();
  }
  // Get Sports-Courtyard products
  public getSportsCourtyardProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/sportsCourtyardProducts')
      .toPromise();
  }
  // Get Birthday products
  public getBirthdayProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/birthdayProducts')
      .toPromise();
  }
  // Get new products
  public getNewProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/newProducts')
      .toPromise();
  }
  // Get recommended products
  public getRecommendedProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/recommendedProducts')
      .toPromise();
  }
  // Get sales products
  public getSalesProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/salesProducts')
      .toPromise();
  }
  // Get last products
  public getLastProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBaseUrl + '/lastProducts')
      .toPromise();
  }
}
