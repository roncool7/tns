import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent implements OnInit {
  public lolProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.lolProducts = await this.myProductsBrandsService.getLolProducts();
  }



}
