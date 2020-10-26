import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-wheels',
  templateUrl: './on-wheels.component.html',
  styleUrls: ['./on-wheels.component.css'],
})
export class OnWheelsComponent implements OnInit {
  public loader: boolean = false;
  public onWheelsProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.onWheelsProducts = await this.myProductsService.getWheelsProducts();
      this.loader = false;
    }, 3000);
  }
}
