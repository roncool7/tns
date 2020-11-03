import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-last-products',
  templateUrl: './last-products.component.html',
  styleUrls: ['./last-products.component.css']
})
export class LastProductsComponent implements OnInit {
  public loader: boolean = false;
  public lastProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(async () => {
      this.lastProducts = await this.myProductsService.getLastProducts();
      this.loader = false;
    }, 2000);
  }



}
