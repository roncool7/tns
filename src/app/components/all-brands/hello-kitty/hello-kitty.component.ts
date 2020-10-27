import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-hello-kitty',
  templateUrl: './hello-kitty.component.html',
  styleUrls: ['./hello-kitty.component.css']
})
export class HelloKittyComponent implements OnInit {
  public helloKittyProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService,
              private dialog: MatDialog) { }

  async ngOnInit() {
    this.helloKittyProducts = await this.myProductsBrandsService.getHelloKittyProducts();
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
