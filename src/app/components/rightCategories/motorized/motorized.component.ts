import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-motorized',
  templateUrl: './motorized.component.html',
  styleUrls: ['./motorized.component.css'],
})
export class MotorizedComponent implements OnInit {
  public loader: boolean = false;
  public motorizedProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.motorizedProducts = await this.myProductsService.getMotorizedProducts();
      this.loader = false;
    }, 2000);
  }


}
