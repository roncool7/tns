import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from './../../../models/product-model';
import { ProductsByAgeService } from './../../../services/products-by-age.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-age-right-c',
  templateUrl: './age-right-c.component.html',
  styleUrls: ['./age-right-c.component.css'],
})
export class AgeRightCComponent implements OnInit {
  public products12PlusYears: ProductModel[];
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
      this.products12PlusYears = await this.myProductsAgeService.getProducts12Plus();
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
      const response = await this.myProductsAgeService.filterSlider12(value);
      if (response.length === 0) {
        this.openSnackBar('אין כרגע מוצרים בטווח המחירים', 'טוב');
        this.loader = false;
        this.filterSlider = false;
        return;
      }
      this.products12PlusYears = response;
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
      const response = await this.myProductsAgeService.highToLow12();
      this.products12PlusYears = response;
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
      const response = await this.myProductsAgeService.lowToHigh12();
      this.products12PlusYears = response;
      this.loader = false;
    }, 2000);
  }

  // Alert messages
  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 5000 });
  }


}
