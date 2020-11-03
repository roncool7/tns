import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-box-thinking',
  templateUrl: './box-thinking.component.html',
  styleUrls: ['./box-thinking.component.css'],
})
export class BoxThinkingComponent implements OnInit {
  public loader: boolean = false;
  public boxThinkingProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.boxThinkingProducts = await this.myProductsService.getBoxThinkingProducts();
      this.loader = false;
    }, 2000);
  }


}
