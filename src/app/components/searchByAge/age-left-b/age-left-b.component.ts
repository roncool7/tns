import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsByAgeService } from './../../../services/products-by-age.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-age-left-b',
  templateUrl: './age-left-b.component.html',
  styleUrls: ['./age-left-b.component.css'],
})
export class AgeLeftBComponent implements OnInit {
  public productsUntil36Months: ProductModel[];
  public loader: boolean = false;
  public filterPrice: number;
  public filterSlider: boolean = false;
  public filterHighToLow: boolean = false;
  public filterLowToHigh: boolean = false;

  constructor(
    private myProductsAgeService: ProductsByAgeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.productsUntil36Months = await this.myProductsAgeService.getProductsUntil36();
      this.loader = false;
    }, 2000);
  }

  // Slider filter
  public getSliderValue(value) {
    if (value <= 1) {
      this.openSnackBar('סינון מחיר לא תקין,מעל ₪1', 'טוב');
      return;
    }
    this.loader = true;
    this.filterSlider = true;
    this.filterPrice = value;
    this.filterHighToLow = false;
    this.filterLowToHigh = false;
    setTimeout(async () => {
      const response = await this.myProductsAgeService.filterSlider36(value);
      if (response.length === 0) {
        this.openSnackBar('אין כרגע מוצרים בטווח המחירים', 'טוב');
        this.loader = false;
        this.filterSlider = false;
        return;
      }
      this.productsUntil36Months = response;
      this.loader = false;
    }, 2000);
  }

  // Filter from higher price to lower
  public fromHighToLow() {
    this.loader = true;
    this.filterSlider = false;
    this.filterLowToHigh = false;
    setTimeout(async () => {
      this.filterPrice=undefined;
      this.filterHighToLow = true;
      const response = await this.myProductsAgeService.highToLow36();
      this.productsUntil36Months = response;
      this.loader = false;
    }, 2000);
  }

  // Filter from lower price to higher
  public fromLowToHigh() {
    this.loader = true;
    this.filterSlider = false;
    this.filterHighToLow = false;
    setTimeout(async () => {
      this.filterPrice=undefined;
      this.filterLowToHigh = true;
      const response = await this.myProductsAgeService.lowToHigh36();
      this.productsUntil36Months = response;
      this.loader = false;
    }, 2000);
  }

  // Alert messages
  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  onDetailsClicked(product) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: {product},
      disableClose: true,
      height: '400px',
      width: '600px',
    });
  }
}
