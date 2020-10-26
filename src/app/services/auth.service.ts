import { LoginModel } from './../models/login-model';
import { authBaseUrl } from './../../environments/environment';
import { CustomerModel } from './../models/customer-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private myHttpClient: HttpClient) {}

  // Get current user
  private currentUserNameStore = new BehaviorSubject<string>('');
  public currentUserName = this.currentUserNameStore.asObservable();
  public setCurrentUserName(userName: string) {
    this.currentUserNameStore.next(userName);
  }

  // Register
  public addCustomer(customer: CustomerModel): Promise<CustomerModel> {
    return this.myHttpClient
      .post<CustomerModel>(authBaseUrl + '/register', customer)
      .toPromise();
  }

  // Register captcha
  public sendToken(token: any) {
    return this.myHttpClient
      .post<any>(authBaseUrl + '/tokenValidate', { reCaptcha: token })
      .toPromise();
  }

  // Login 
  public login(customer: LoginModel): Promise<LoginModel> {
    return this.myHttpClient
      .post<LoginModel>(authBaseUrl + "/login", customer)
      .toPromise();
  }

   // Forget password send email 
   public sendEmailData(Email: LoginModel): Promise<LoginModel> {
    return this.myHttpClient
      .post<LoginModel>(authBaseUrl + "/sendSecretCode", Email)
      .toPromise();
  }

   // Reset password
   public resetCustomerPass(passAndEmail:Object): Promise<LoginModel> {
    return this.myHttpClient
      .patch<LoginModel>(authBaseUrl + '/resetPassword',passAndEmail)
      .toPromise();
  }
}
