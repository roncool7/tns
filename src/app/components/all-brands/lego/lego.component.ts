import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-lego',
  templateUrl: './lego.component.html',
  styleUrls: ['./lego.component.css']
})
export class LegoComponent implements OnInit {
  public legoProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.legoProducts = await this.myProductsBrandsService.getLegoProducts();
  }



}
