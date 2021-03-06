import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-ninja-turtles',
  templateUrl: './ninja-turtles.component.html',
  styleUrls: ['./ninja-turtles.component.css']
})
export class NinjaTurtlesComponent implements OnInit {
  public ninjaTurtlesProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.ninjaTurtlesProducts = await this.myProductsBrandsService.getNinjaTurtlesProducts();
  }



}
