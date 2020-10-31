import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrls: ['./frozen.component.css']
})
export class FrozenComponent implements OnInit {
  public frozenProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.frozenProducts = await this.myProductsBrandsService.getFrozenProducts();
  }



}
