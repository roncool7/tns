import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";

@Component({
  selector: 'app-sports-courtyard',
  templateUrl: './sports-courtyard.component.html',
  styleUrls: ['./sports-courtyard.component.css'],
})
export class SportsCourtyardComponent implements OnInit {
  public loader: boolean = false;
  public sportsCourtyardProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.sportsCourtyardProducts = await this.myProductsService.getSportsCourtyardProducts();
      this.loader = false;
    }, 2000);
  }


}
