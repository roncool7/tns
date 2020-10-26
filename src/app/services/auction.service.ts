import { AuthorizationService } from './authorization.service';
import { auctionBaseUrl } from './../../environments/environment';
import { NewOfferModel } from './../models/new-offer-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  constructor(
    private myHttpClient: HttpClient,
    private myAuthorization: AuthorizationService
  ) {}

  // New Offer for product
  public newOfferForProduct(newOffer: NewOfferModel): Promise<NewOfferModel> {
    return this.myHttpClient
      .post<NewOfferModel>(auctionBaseUrl + '/newOffer', newOffer, {
        headers: this.myAuthorization.sendCostumerJWT(),
      })
      .toPromise();
  }

  // Check last offer center
  public checkLastOffer(): Promise<any> {
    return this.myHttpClient
      .get(auctionBaseUrl + '/offerValueCenter')
      .toPromise();
  }
  // Check last offer left
  public checkLastOfferLeft(): Promise<any> {
    return this.myHttpClient
      .get(auctionBaseUrl + '/offerValueLeft')
      .toPromise();
  }
  // Check last offer right
  public checkLastOfferRight(): Promise<any> {
    return this.myHttpClient
      .get(auctionBaseUrl + '/offerValueRight')
      .toPromise();
  }
}
