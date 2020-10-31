import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: ProductModel[] = [{Product_Image: '', Product_Name: 'NAme', Product_Price: 123}];
  // products: ProductModel[] = [];
  step = 1;

  deliveryForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    houseNumber: new FormControl('', Validators.required),
    floor: new FormControl(''),
    aprtNumber: new FormControl(''),
    city: new FormControl('', Validators.required),
    zip: new FormControl(''),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    comments: new FormControl(''),
  });

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    console.log(this.products);
  }

  onSubmit() {
    console.log(this.deliveryForm);
    this.cartService.checkOut();
  }

}
