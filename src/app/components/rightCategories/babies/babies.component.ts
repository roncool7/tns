import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.css'],
})
export class BabiesComponent implements OnInit {
  public loader: boolean = false;
  public babiesProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.babiesProducts = await this.myProductsService.getBabiesProducts();
      this.loader = false;
    }, 3000);
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
