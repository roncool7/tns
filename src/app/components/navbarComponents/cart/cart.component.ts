import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    phone: new FormControl('', [Validators.required, Validators.min(10), Validators.maxLength(10), Validators.pattern("^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl(''),
  });

  deliveryOption;
  deliveryOptions = [
    {title: 'משלוח רגיל-עד 5 ימי עסקים שליח עד הבית 30 ₪', price: 30},
    {title: 'משלוח מהיר-עד 3 ימי עסקים שליח עד הבית 45 ₪', price: 45},
    {title: 'משלוח אקספרס-מהיום להיום שליח עד הבית(מוגבל-לאזורים) 55 ₪', price: 55},
    {title: 'איסוף עצמי-תחנה מרכזית דימונה', price: 0}];

  constructor(private cartService: CartService,
              private router: Router,
              private snackBar: MatSnackBar) {

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
    if (this.totalPrice > 300) {
      this.deliveryOptions = [{title: 'משלוח חינם בקנייה מעל 300 ש״ח', price: 0}].concat(this.deliveryOptions);
      this.deliveryOption = this.deliveryOptions[0];
    }
    this.step = 2;
  }

  async onSubmit() {
    const res = await this.cartService.checkOut(this.deliveryForm.value, this.deliveryOption);

    if (res !== 'Success') {
      this.snackBar.open('נסה שנית', 'שגיאה', {duration: 5000});
    } else {
      this.cartService.emptyCart();
      this.snackBar.open('ניצור קשר בקרוב', 'הזמנה נשלחה', {duration: 5000});
      this.router.navigateByUrl("/home");
    }
  }

}
