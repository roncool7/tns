import { productsAgesBaseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsByAgeService {
  constructor(private myHttpClient: HttpClient) {}

  // Get products 0-18 months
  public getProductsUntil18(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/0-18-ProductsAge')
      .toPromise();
  }

  // Get products 18-36 months
  public getProductsUntil36(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/18-36-ProductsAge')
      .toPromise();
  }

  // Get products 3-5 years
  public getProductsUntil5(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/3-5-ProductsAge')
      .toPromise();
  }

  // Get products 6-8 years
  public getProductsUntil8(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/6-8-ProductsAge')
      .toPromise();
  }

  // Get products 9-11 years
  public getProductsUntil11(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/9-11-ProductsAge')
      .toPromise();
  }

  // Get products 12+ years
  public getProducts12Plus(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/12-ProductsAge')
      .toPromise();
  }

  // -----filter slider-----

  // Get slider filter 0-18 months
  public filterSlider18(value: number): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-slider-0-18/' + value)
      .toPromise();
  }

  // Get slider filter 18-36 months
  public filterSlider36(value: number): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-slider-18-36/' + value)
      .toPromise();
  }

  // Get slider filter 3-5 years
  public filterSlider5(value: number): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-slider-3-5/' + value)
      .toPromise();
  }

  // Get slider filter 6-8 years
  public filterSlider8(value: number): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-slider-6-8/' + value)
      .toPromise();
  }

  // Get slider filter 9-11 years
  public filterSlider11(value: number): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-slider-9-11/' + value)
      .toPromise();
  }

  // Get slider filter 12+ years
  public filterSlider12(value: number): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-slider-12/' + value)
      .toPromise();
  }

  // -----filter high to low price-----

  // Get higher price to lower price 0-18 months
  public highToLow18(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-highToLow-0-18')
      .toPromise();
  }

  // Get higher price to lower price 18-36 months
  public highToLow36(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-highToLow-18-36')
      .toPromise();
  }

  // Get higher price to lower price 3-5 years
  public highToLow5(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-highToLow-3-5')
      .toPromise();
  }

  // Get higher price to lower price 6-8 years
  public highToLow8(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-highToLow-6-8')
      .toPromise();
  }

  // Get higher price to lower price 9-11 years
  public highToLow11(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-highToLow-9-11')
      .toPromise();
  }

  // Get higher price to lower price 12+ years
  public highToLow12(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-highToLow-12')
      .toPromise();
  }

  // -----filter low to high price-----

  // Get lower price to higher price 0-18 months
  public lowToHigh18(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-lowToHigh-0-18')
      .toPromise();
  }

  // Get lower price to higher price 18-36 months
  public lowToHigh36(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-lowToHigh-18-36')
      .toPromise();
  }

  // Get lower price to higher price 3-5 years
  public lowToHigh5(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-lowToHigh-3-5')
      .toPromise();
  }

  // Get lower price to higher price 6-8 years
  public lowToHigh8(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-lowToHigh-6-8')
      .toPromise();
  }

  // Get lower price to higher price 9-11 years
  public lowToHigh11(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-lowToHigh-9-11')
      .toPromise();
  }

  // Get lower price to higher price 12+ years
  public lowToHigh12(): Promise<any> {
    return this.myHttpClient
      .get(productsAgesBaseUrl + '/filter-lowToHigh-12')
      .toPromise();
  }
}
