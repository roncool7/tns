import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';
import { LoginModel } from '../../../models/login-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {

  public login: LoginModel = new LoginModel();
  public loader: boolean = false;
  // Email
  public getEmailForm: FormGroup;
  // Secret Code
  public secretCodeForm: boolean = false;
  public secretCodeInput: string = '';
  public secretCodeValue: string;
  public secretCodeError: string = '';
  // New Password
  public newPasswordForm: FormGroup;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;
  public resetPassForm:boolean = false;
  // Responsive for mobile
  public breakpoint:any;

  constructor(
    private formBuilder: FormBuilder,
    private myAuthService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    // Email form
    this.getEmailForm = this.formBuilder.group({
      Email: [this.login.Email,
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
    // Password form
    this.newPasswordForm = this.formBuilder.group({
      Password: [this.login.Password,
        [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      confirmPassword: [this.login.confirmPassword,
        [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    },{
      validator: this.checkIfMatchingPasswords('Password', 'confirmPassword'),
    });
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

  // Send email data
  public sendEmail():void {
    try {
      this.loader = true;
      setTimeout(async () => {
        const response = await this.myAuthService.sendEmailData(this.getEmailForm.value);
        if (response.toString() === 'emailNotExist') {
          this.loader = false;
          setTimeout(() => {
            this.getEmailForm.controls['Email'].setErrors({emailNotExist: true});
          }, 100);
          return;
        }
        this.secretCodeForm = true;
        this.secretCodeValue = response.secretCode;
        this.loader = false;
        this.openSnackBar("קוד סודי נשלח אנא בדוק באימייל", "טוב");
      }, 3000);
    } catch (err) {
      alert(err.message);
    }
  }

  // Confirm the secret code
  public sendCode(code):void {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      if (this.secretCodeValue === undefined || this.secretCodeValue != code) {
        this.secretCodeError = 'קוד סודי לא תואם';
        return;
      }
      this.secretCodeForm = false;
      this.resetPassForm = true;
      this.openSnackBar("קוד סודי תקין", "יופי");
    }, 3000);
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

  public sendNewPassword():void{
    this.loader = true;
    setTimeout(async() => {
      const data =
      {"newPass":this.newPasswordForm.value.Password,"customerEmail":this.getEmailForm.value}
      const response = await this.myAuthService.resetCustomerPass(data);
      if (response.toString() === 'Error') {
        this.loader = false;
        this.openSnackBar("שחזור הסיסמא לא הצליח כראוי,אנא נסה שנית", "טוב");
        this.router.navigateByUrl('/home');
        return;
      }
      this.loader = false;
      this.openSnackBar("סיסמתך הוחלפה בהצלחה", "! יופי תודה");
      this.router.navigateByUrl('/login');
    }, 3000);
  }

  // Alert messages
  private openSnackBar(message: string, action: string):void {
    this.snackBar.open(message, action, {duration: 5000});
  }
}
