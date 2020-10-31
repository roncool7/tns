import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from './../../../models/product-model';
import { ProductsByAgeService } from './../../../services/products-by-age.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-age-right-b',
  templateUrl: './age-right-b.component.html',
  styleUrls: ['./age-right-b.component.css'],
})
export class AgeRightBComponent implements OnInit {
  public productsUntil11Years: ProductModel[];
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
      this.productsUntil11Years = await this.myProductsAgeService.getProductsUntil11();
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
      const response = await this.myProductsAgeService.filterSlider11(value);
      if (response.length === 0) {
        this.openSnackBar('אין כרגע מוצרים בטווח המחירים', 'טוב');
        this.loader = false;
        this.filterSlider = false;
        return;
      }
      this.productsUntil11Years = response;
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
      const response = await this.myProductsAgeService.highToLow11();
      this.productsUntil11Years = response;
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
      const response = await this.myProductsAgeService.lowToHigh11();
      this.productsUntil11Years = response;
      this.loader = false;
    }, 2000);
  }

  // Alert messages
  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 5000 });
  }


}
