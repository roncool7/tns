import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
// Authorization for customer
public sendCostumerJWT(){
  const getUser = localStorage.getItem('user');
  const getUserName = JSON.parse(getUser);
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + getUserName.token);
  return headers_object;
}
}
