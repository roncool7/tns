import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchens-dallhouses',
  templateUrl: './kitchens-dallhouses.component.html',
  styleUrls: ['./kitchens-dallhouses.component.css'],
})
export class KitchensDallhousesComponent implements OnInit {
  public loader: boolean = false;
  public kitchensDallhousesProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.kitchensDallhousesProducts = await this.myProductsService.getKitchensDallhousesProducts();
      this.loader = false;
    }, 3000);
  }
}
