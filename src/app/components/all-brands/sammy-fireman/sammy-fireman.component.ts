import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-sammy-fireman',
  templateUrl: './sammy-fireman.component.html',
  styleUrls: ['./sammy-fireman.component.css']
})
export class SammyFiremanComponent implements OnInit {
  public sammyFiremanProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.sammyFiremanProducts = await this.myProductsBrandsService.getSammyFiremanProducts();
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
