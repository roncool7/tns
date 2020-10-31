import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {DetailsDialogComponent} from "../../details-dialog/details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-on-remote',
  templateUrl: './on-remote.component.html',
  styleUrls: ['./on-remote.component.css'],
})
export class OnRemoteComponent implements OnInit {
  public loader: boolean = false;
  public onRemoteProducts: ProductModel[];

  constructor(private myProductsService: ProductsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.onRemoteProducts = await this.myProductsService.getRemoteProducts();
      this.loader = false;
    }, 3000);
  }


}
