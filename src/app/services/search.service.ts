import { searchBaseUrl } from './../../environments/environment';
import { ProductModel } from './../models/product-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private myHttpClient: HttpClient) {}

  // Search
  public search(text: string): Promise<ProductModel[]> {
    return this.myHttpClient
      .get<ProductModel[]>(searchBaseUrl + '/searchProduct/' + text)
      .toPromise();
  }
}
