import { productsBrandsBaseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsBrandsService {

  constructor(private myHttpClient: HttpClient) { }

  // Get viper products
  public getViperProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allViperProducts')
      .toPromise();
  }

  // Get fox-mind products
  public getFoxMindProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allFoxMindProducts')
      .toPromise();
  }

  // Get disney products
  public getDisneyProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allDisneyProducts')
      .toPromise();
  }

  // Get pj-masks products
  public getPjProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allPjMasksProducts')
      .toPromise();
  }

  // Get lol products
  public getLolProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allLolProducts')
      .toPromise();
  }

  // Get nerf products
  public getNerfProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allNerfProducts')
      .toPromise();
  }

  // Get kodkod products
  public getKodkodProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allKodkodProducts')
      .toPromise();
  }

  // Get barbie products
  public getBarbieProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allBarbieProducts')
      .toPromise();
  }

  // Get marvel products
  public getMarvelProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allMarvelProducts')
      .toPromise();
  }

  // Get hello-kitty products
  public getHelloKittyProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allHelloKittyProducts')
      .toPromise();
  }

  // Get paw-patrol products
  public getPawPatrolProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allPawPatrolProducts')
      .toPromise();
  }

  // Get sammy the fireman products
  public getSammyFiremanProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allSammyFiremanProducts')
      .toPromise();
  }

  // Get frozen products
  public getFrozenProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allFrozenProducts')
      .toPromise();
  }

  // Get creation products
  public getCreationProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allCreationProducts')
      .toPromise();
  }

  // Get ninja turtles products
  public getNinjaTurtlesProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allNinjaTurtlesProducts')
      .toPromise();
  }

  // Get ben ten products
  public getBenTenProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allBenTenProducts')
      .toPromise();
  }

  // Get lego products
  public getLegoProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allLegoProducts')
      .toPromise();
  }

  // Get fisher price products
  public getFisherPriceProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allFisherPriceProducts')
      .toPromise();
  }

  // Get play mobile products
  public getPlayMobilProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allPlayMobileProducts')
      .toPromise();
  }

  // Get hatchimals products
  public getHatchimalsProducts(): Promise<any> {
    return this.myHttpClient
      .get(productsBrandsBaseUrl + '/allHatchimalsProducts')
      .toPromise();
  }
}
