import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-kodkod',
  templateUrl: './kodkod.component.html',
  styleUrls: ['./kodkod.component.css']
})
export class KodkodComponent implements OnInit {
  public kodkodProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.kodkodProducts = await this.myProductsBrandsService.getKodkodProducts();
  }



}
