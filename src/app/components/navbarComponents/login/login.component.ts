import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../../services/auth.service';
import { LoginModel } from './../../../models/login-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login: LoginModel = new LoginModel();
  public loginForm: FormGroup;
  public hidePassword: boolean = true;
  public panelOpenState = false;
  public breakpoint:any;

  constructor(
    private formBuilder: FormBuilder,
    private myAuthService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    this.loginForm = this.formBuilder.group({
      Email: [this.login.Email, [Validators.required, Validators.email,Validators.maxLength(30)]],
      Password: [this.login.Password,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    });
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

  // Login button
  public async loginButton() {
    try {
      const response = await this.myAuthService.login(this.login);
      if (response.toString() === 'WrongEmailOrPass') {
        this.loginForm.controls['Password'].setErrors({wrongEmailOrPass: true});
        return;
      }
      this.openSnackBar("!ברוך שובך, מאחלים לכם קנייה נעימה", "תודה");
      localStorage.setItem('user', JSON.stringify(response));
      this.myAuthService.setCurrentUserName(response.customer.First_Name);
      this.router.navigateByUrl("/home");
    } catch (err) {
      alert(err.message);
    }
  }

   // Alert after login success
   private openSnackBar(message: string, action: string):void {
    this.snackBar.open(message, action, {duration: 10000});
  }
}
