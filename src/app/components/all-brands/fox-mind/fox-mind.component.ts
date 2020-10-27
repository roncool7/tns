import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-fox-mind',
  templateUrl: './fox-mind.component.html',
  styleUrls: ['./fox-mind.component.css'],
})
export class FoxMindComponent implements OnInit {
  public foxMindProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) {}

  async ngOnInit() {
    this.foxMindProducts = await this.myProductsBrandsService.getFoxMindProducts();
  }

  onDetailsClicked(product) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: {product},
      disableClose: true,
      height: '400px',
      width: '600px',
    });
  }
}
