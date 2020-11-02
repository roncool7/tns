import { AuctionService } from './../../../services/auction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component,OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit, OnDestroy {
  // more info dialogs
  @ViewChild('moreInfoLeft') moreInfoLeft: TemplateRef<any>;
  @ViewChild('moreInfoCenter') moreInfoCenter: TemplateRef<any>;
  @ViewChild('moreInfoRight') moreInfoRight: TemplateRef<any>;
  // make new offer
  @ViewChild('makeNewOfferLeft') makeNewOfferLeft: TemplateRef<any>;
  @ViewChild('makeNewOfferCenter') makeNewOfferCenter: TemplateRef<any>;
  @ViewChild('makeNewOfferRight') makeNewOfferRight: TemplateRef<any>;

  // Count down clock
  public countDown: Subscription;
  public counter: number = 1800;
  public tick: number = 1000;
  // Last price offer
  public lastPriceProductLeft: number;
  public lastPriceProductCenter:number;
  public lastPriceProductRight: number;
  // Last offer name
  public lastOfferNameLeft: string;
  public lastOfferNameCenter: string;
  public lastOfferNameRight: string;
  // Auction is over
  public auctionFinished: boolean = false;
  // Responsive for mobile
  public breakpoint:any;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private myAuctionService: AuctionService
  ) {}

  async ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    let countDownDate = new Date('Nov 4, 2020 00:00:00').getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    if (distance <= 0) {
      this.auctionFinished = true;
    }
    const getLastOffer = await this.myAuctionService.checkLastOffer();
    if (getLastOffer[0] === undefined) {
      this.lastPriceProductCenter = 500;
      this.lastOfferNameCenter = 'אין הצעה';
    }else{
      this.lastPriceProductCenter = getLastOffer[0].Price;
      this.lastOfferNameCenter =
        getLastOffer[0].First_Name + ' ' + getLastOffer[0].Last_Name;
    }
    const getLastOfferLeft = await this.myAuctionService.checkLastOfferLeft();
    if (getLastOfferLeft[0] === undefined) {
      this.lastPriceProductLeft = 600;
      this.lastOfferNameLeft = 'אין הצעה';
    }else{
      this.lastPriceProductLeft = getLastOfferLeft[0].Price;
      this.lastOfferNameLeft =
        getLastOfferLeft[0].First_Name + ' ' + getLastOfferLeft[0].Last_Name;
    }
    const getLastOfferRight = await this.myAuctionService.checkLastOfferRight();
    if (getLastOfferRight[0] === undefined) {
      this.lastPriceProductRight = 600;
      this.lastOfferNameRight = 'אין הצעה';
    }else{
      this.lastPriceProductRight = getLastOfferRight[0].Price;
      this.lastOfferNameRight =
        getLastOfferRight[0].First_Name + ' ' + getLastOfferRight[0].Last_Name;
    }
  }

  ngOnDestroy() {
    this.countDown = null;
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

  // More info button for each product
  public openDialogLeft() {
    this.dialog.open(this.moreInfoLeft);
  }
  public openDialogCenter() {
    this.dialog.open(this.moreInfoCenter);
  }
  public openDialogRight() {
    this.dialog.open(this.moreInfoRight);
  }

  // New offer for product
  public openNewOfferLeft() {
    if (this.checkForUser() === undefined) return;
    this.dialog.open(this.makeNewOfferLeft);
  }
  public openNewOfferCenter() {
    if (this.checkForUser() === undefined) return;
    this.dialog.open(this.makeNewOfferCenter);
  }
  public openNewOfferRight() {
    if (this.checkForUser() === undefined) return;
    this.dialog.open(this.makeNewOfferRight);
  }

  // New Offer for product center
  public async offerNowCenter(offerPrice,productId) {
    const checkAmount = this.amountValidate(offerPrice);
    if (checkAmount !== null) return;
    const getUserId = JSON.parse(localStorage.getItem('user'));
    const userId = getUserId.customer.User_ID;
    const newPrice = +this.lastPriceProductCenter + +offerPrice;
    const newOffer = { User_ID: userId, Product_ID: productId, Price: newPrice };
    const response = await this.myAuctionService.newOfferForProduct(newOffer);
    if (response.toString() === 'SameOfferOnTheProduct') {
      return this.openSnackBar('הצעתך מובילה אינך יכול להציע שוב', 'תודה');
    }
    if (response.toString() === 'offerOnAnotherProduct') {
      return this.openSnackBar('אין אפשרות להציע מחיר על מוצר נוסף', 'טוב');
    }
    if (response.toString() === 'Success') {
       this.lastOfferNameCenter =
       getUserId.customer.First_Name + ' ' + getUserId.customer.Last_Name;
       this.lastPriceProductCenter = newPrice;
      this.openSnackBar('הצעתך התקבלה בהצלחה!', 'תודה');
      this.dialog.closeAll();
    }
  }

 // New Offer for product left
  public async offerNowLeft(offerPrice,productId) {
    const checkAmount = this.amountValidate(offerPrice);
    if (checkAmount !== null) return;
    const getUserId = JSON.parse(localStorage.getItem('user'));
    const userId = getUserId.customer.User_ID;
    const newPrice = +this.lastPriceProductLeft + +offerPrice;
    const newOffer = { User_ID: userId, Product_ID: productId, Price: newPrice };
    const response = await this.myAuctionService.newOfferForProduct(newOffer);
    if (response.toString() === 'SameOfferOnTheProduct') {
      return this.openSnackBar('הצעתך מובילה אינך יכול להציע שוב', 'תודה');
    }
    if (response.toString() === 'offerOnAnotherProduct') {
      return this.openSnackBar('אין אפשרות להציע מחיר על מוצר נוסף', 'טוב');
    }
    if (response.toString() === 'Success') {
        this.lastOfferNameLeft =
        getUserId.customer.First_Name + ' ' + getUserId.customer.Last_Name;
        this.lastPriceProductLeft = newPrice;
      this.openSnackBar('הצעתך התקבלה בהצלחה!', 'תודה');
      this.dialog.closeAll();
    }
  }

  // New Offer for product right
  public async offerNowRight(offerPrice,productId) {
    const checkAmount = this.amountValidate(offerPrice);
    if (checkAmount !== null) return;
    const getUserId = JSON.parse(localStorage.getItem('user'));
    const userId = getUserId.customer.User_ID;
    const newPrice = +this.lastPriceProductRight + +offerPrice;
    const newOffer = { User_ID: userId, Product_ID: productId, Price: newPrice };
    const response = await this.myAuctionService.newOfferForProduct(newOffer);
    if (response.toString() === 'SameOfferOnTheProduct') {
      return this.openSnackBar('הצעתך מובילה אינך יכול להציע שוב', 'תודה');
    }
    if (response.toString() === 'offerOnAnotherProduct') {
      return this.openSnackBar('אין אפשרות להציע מחיר על מוצר נוסף', 'טוב');
    }
    if (response.toString() === 'Success') {
        this.lastOfferNameRight =
        getUserId.customer.First_Name + ' ' + getUserId.customer.Last_Name;
        this.lastPriceProductRight = newPrice;
      this.openSnackBar('הצעתך התקבלה בהצלחה!', 'תודה');
      this.dialog.closeAll();
    }
  }

  // Check if user logged in
  private checkForUser() {
    const getUser = JSON.parse(localStorage.getItem('user'));
    if (getUser === null) {
      this.openSnackBar('הצעה רק למשתמשים רשומים', 'טוב');
      return undefined;
    } else if (!getUser.customer) {
      this.openSnackBar('הצעה רק למשתמשים רשומים', 'טוב');
      return undefined;
    } else if (!getUser.token) {
      this.openSnackBar('הצעה רק למשתמשים רשומים', 'טוב');
      return undefined;
    }
    return null;
  }

  // Validate amount
  private amountValidate(number): void {
    if (number === '') {
      this.openSnackBar('ערך ריק! אנא מלא שדה', 'טוב');
      return undefined;
    } else if (number <= 0) {
      this.openSnackBar('ערך שלילי! נא לתקן את השדה', 'טוב');
      return undefined;
    } else if (number > 1000) {
      this.openSnackBar('הצעה מקסימלית עד 1000 ₪', 'טוב');
      return undefined;
    } else if (!/^[0-9]*$/.test(number)) {
      this.openSnackBar('ערך לא תקין! רק מספרים בלבד', 'טוב');
      return undefined;
    } else if (number % 100 != 0) {
      this.openSnackBar('ערך לא תקין! רק בקפיצות של 100', 'טוב');
      return undefined;
    } else {
      return null;
    }
  }

  // Alert messages
  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 5000 });
  }
}
