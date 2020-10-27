import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-barbie',
  templateUrl: './barbie.component.html',
  styleUrls: ['./barbie.component.css']
})
export class BarbieComponent implements OnInit {
  public barbieProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.barbieProducts = await this.myProductsBrandsService.getBarbieProducts();
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
