import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dolls-characters',
  templateUrl: './dolls-characters.component.html',
  styleUrls: ['./dolls-characters.component.css'],
})
export class DollsCharactersComponent implements OnInit {
  public loader: boolean = false;
  public dollsCharactersProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.dollsCharactersProducts = await this.myProductsService.getDollsCharactersProducts();
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
