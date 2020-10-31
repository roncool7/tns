import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product-model';
import {CartService} from '../../services/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DetailsDialogComponent} from "../details-dialog/details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss']
})
export class ProductActionsComponent implements OnInit{

  @Input() product: ProductModel;
  actualAmount;
  amount = 1;
  isInCart: boolean;

  constructor(private cartService: CartService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.actualAmount = this.cartService.getProductAmount(this.product);
    this.isInCart = this.actualAmount > 0;
  }

  onAddToCart() {
    this.isInCart = true;
    this.actualAmount = this.amount;
    this.product.Amount = this.amount;
    this.cartService.addToCart(this.product);
    this.snackBar.open('המוצר נוסף לעגלה', '', {duration: 3000});
  }

  setAmount(amount: number) {
    this.amount = this.amount + amount;
  }

  onDetailsClicked() {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: {product: this.product},
      disableClose: true,
      height: '400px',
      width: '600px',
    });
  }
}
