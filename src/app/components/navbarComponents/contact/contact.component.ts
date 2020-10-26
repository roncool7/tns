import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from './../../../services/contact.service';
import { ContactModel } from './../../../models/contactModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contact: ContactModel = new ContactModel();
  public contactForm: FormGroup;
  public loadingImage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private myContactService: ContactService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullName: [this.contact.fullName,
        [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[\u05D0-\u05F3]+(?: [\u05D0-\u05F3]+)*$")]],
      email: [this.contact.email,
        [Validators.required, Validators.maxLength(30),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      subject: [this.contact.subject,
        [Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern("^[\u05D0-\u05F3]+(?: [\u05D0-\u05F3]+)*$")]],
      message: [this.contact.message,
        [Validators.required,Validators.minLength(3),Validators.maxLength(120)]],
    });
  }

  // Send concat email
  public async contactSubmit() {
    try {
      this.loadingImage = true;
      const response = await this.myContactService.sendMessageData(this.contact);
      if (response.toString() === 'Success') {
        this.loadingImage = false;
        this.openSnackBar("הודעה נשלחה בהצלחה, נחזור בהקדם האפשרי", "! יופי תודה");
        this.router.navigateByUrl('/home');
        return;
      }
      this.openSnackBar("בעיה בשליחת ההודעה,נסה שנית מאוחר יותר", "טוב");
      this.router.navigateByUrl('/home');
    } catch (err) {
      alert(err.message);
    }
  }

   // Alert messages
   private openSnackBar(message: string, action: string):void {
    this.snackBar.open(message, action, {duration: 9000});
  }
}
