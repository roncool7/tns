import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../../services/auth.service';
import { CustomerModel } from './../../../models/customer-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public customer: CustomerModel = new CustomerModel();
  public registerForm: FormGroup;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;
  public captchaImg:boolean = false;
  public breakpoint:any;



  constructor(
    private formBuilder: FormBuilder,
    private myAuthService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    this.registerForm = this.formBuilder.group({
      First_Name: [this.customer.First_Name,[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('^[\u05D0-\u05F3]+$')]],
      Last_Name: [this.customer.Last_Name,[Validators.required,Validators.minLength(2),Validators.maxLength(15),Validators.pattern("^[\u05D0-\u05F3]+(?: [\u05D0-\u05F3]+)*$")]],
      Email: [this.customer.Email,[Validators.required, Validators.maxLength(30),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Phone: [this.customer.Phone,[Validators.required,Validators.min(10), Validators.maxLength(10),Validators.pattern("^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$")]],
      Password: [this.customer.Password,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      confirmPassword: [this.customer.confirmPassword,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    },
    {
      validator: this.checkIfMatchingPasswords('Password', 'confirmPassword'),
    }
   );
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

   // Check if same passwords
   private checkIfMatchingPasswords(passwordKey: string,passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  // Register Form submit
  public async registerSubmit() {
    try {
      const response = await this.myAuthService.addCustomer(this.customer);
      if (response.toString() === 'emailExist') {
        this.registerForm.controls['Email'].setErrors({ emailExist: true });
        return;
      }
      localStorage.setItem('user', JSON.stringify(response));
      this.myAuthService.setCurrentUserName(this.registerForm.value.First_Name);
      this.openSnackBar("הרשמה בוצעה בהצלחה", "קנייה נעימה");
      this.router.navigateByUrl("/home");
    } catch (err) {
      alert(err.message);
    }
  }

  // Register captcha
  public async resolved(captchaResponse: string) {
    try{
    const response = await this.myAuthService.sendToken(captchaResponse);
    if(response.toString() === "CaptchaSuccess"){
      this.captchaImg = true;
      return;
    }
    this.captchaImg = false;
    }catch(err){
      alert(err.message);
    }
  }

  // Alert after register success
  private openSnackBar(message: string, action: string):void {
    this.snackBar.open(message, action, {duration: 5000});
  }

}
