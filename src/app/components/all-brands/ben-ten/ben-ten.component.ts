import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-ben-ten',
  templateUrl: './ben-ten.component.html',
  styleUrls: ['./ben-ten.component.css']
})
export class BenTenComponent implements OnInit {
  public benTenProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.benTenProducts = await this.myProductsBrandsService.getBenTenProducts();
  }



}
