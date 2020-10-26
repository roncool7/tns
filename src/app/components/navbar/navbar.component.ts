import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public userName: string;
  public itemsNumber:number = 0;
  public searchValue: string;

  constructor(
    private router: Router,
    private myAuthService: AuthService
  ) {}


  ngOnInit(): void {
    this.getCurrentUser();
    const user = localStorage.getItem('user');
    const getUserName = JSON.parse(user);
    if (getUserName === null) {
      this.userName = 'אורח';
      return;
    }
    this.userName = getUserName.customer.First_Name;
  }

  // Logout
  public logoutBtn(): void {
    localStorage.removeItem('user');
    this.myAuthService.setCurrentUserName('אורח');
    this.router.navigateByUrl('/home');
  }

  //Get current user
  public getCurrentUser():void {
    this.myAuthService.currentUserName.subscribe((userName) => {
      this.userName = userName;
    });
  }

  // Search
 public searchProduct(){
   this.router.navigateByUrl("search");
 }
}
