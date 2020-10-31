import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-play-mobile',
  templateUrl: './play-mobile.component.html',
  styleUrls: ['./play-mobile.component.css']
})
export class PlayMobileComponent implements OnInit {
  public playMobilProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.playMobilProducts = await this.myProductsBrandsService.getPlayMobilProducts();
  }



}
