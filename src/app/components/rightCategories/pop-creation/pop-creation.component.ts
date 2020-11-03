import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-pop-creation',
  templateUrl: './pop-creation.component.html',
  styleUrls: ['./pop-creation.component.css'],
})
export class PopCreationComponent implements OnInit {
  public loader: boolean = false;
  public popCreationProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.popCreationProducts = await this.myProductsService.getPopCreationProducts();
      this.loader = false;
    }, 2000);
  }


}
