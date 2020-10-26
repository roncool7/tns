import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.css'],
})
export class BabiesComponent implements OnInit {
  public loader: boolean = false;
  public babiesProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.babiesProducts = await this.myProductsService.getBabiesProducts();
      this.loader = false;
    }, 3000);
  }
}
