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

  products: ProductModel[];
  displayedColumns = ['Product_Image', 'Product_Name', 'Amount', 'Product_Price', 'Delete'];
  invoiceDisplayedColumns = ['Product_Image', 'Product_Name', 'Amount', 'Product_Price'];
  totalPrice = 0;

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

  deliveryOption;
  deliveryOptions = [
    {title: 'משלוח רגיל-עד 5 ימי עסקים שליח עד הבית 30 ₪', price: 30},
    {title: 'משלוח מהיר-עד 3 ימי עסקים שליח עד הבית 45 ₪', price: 45},
    {title: 'משלוח אקספרס-מהיום להיום שליח עד הבית(מוגבל-לאזורים) 55 ₪', price: 55},
    {title: 'איסוף עצמי-תחנה מרכזית דימונה', price: 0}];

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.deliveryOption = this.deliveryOptions[0];
  }

  getProducts() {
    this.products = this.cartService.getProducts();
    this.totalPrice = 0;
    this.products.forEach((product) => {
      this.totalPrice += (product.Amount * product.Product_Price);
    });
  }

  removeFromCart(productID) {
    this.cartService.removeFromCart(productID);
    this.getProducts();
  }

  changeAmount(productID, newAmount) {
    this.cartService.changeAmount(productID, newAmount);
    this.getProducts();
  }

  next() {
    this.step = 2;
  }

  onSubmit() {
    const res = this.cartService.checkOut(this.deliveryForm.value);
  }

}
