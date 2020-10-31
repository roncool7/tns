import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product-model';
import {CartService} from '../../services/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductsService} from "../../services/products.service";
import {DetailsDialogComponent} from "../details-dialog/details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss']
})
export class ProductActionsComponent implements OnInit{

  @Input() product: ProductModel;
  isInCart: boolean;

  constructor(private cartService: CartService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isInCart = this.cartService.checkProductInCart(this.product);
  }

  onAddToCart() {
    this.cartService.addToCart(this.product);
    this.isInCart = true;
    this.snackBar.open('המוצר נוסף לעגלה', '', {duration: 3000});
  }

  onDetailsClicked() {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: this.product,
      disableClose: true,
      height: '400px',
      width: '600px',
    });
  }
}
