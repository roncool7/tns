import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-on-wheels',
  templateUrl: './on-wheels.component.html',
  styleUrls: ['./on-wheels.component.css'],
})
export class OnWheelsComponent implements OnInit {
  public loader: boolean = false;
  public onWheelsProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.onWheelsProducts = await this.myProductsService.getWheelsProducts();
      this.loader = false;
    }, 3000);
  }


}
