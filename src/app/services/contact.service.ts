import { contactBaseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './../models/contactModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private myHttpClient: HttpClient) { }

   // Contact
   public sendMessageData(contact: ContactModel): Promise<ContactModel> {
    return this.myHttpClient
      .post<ContactModel>(contactBaseUrl + "/contactMessage", contact)
      .toPromise();
  }
}
