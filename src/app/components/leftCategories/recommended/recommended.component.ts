import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  public loader: boolean = false;
  public recommendedProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(async () => {
      this.recommendedProducts = await this.myProductsService.getRecommendedProducts();
      this.loader = false;
    }, 3000);
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
