import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-courtyard',
  templateUrl: './sports-courtyard.component.html',
  styleUrls: ['./sports-courtyard.component.css'],
})
export class SportsCourtyardComponent implements OnInit {
  public loader: boolean = false;
  public sportsCourtyardProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.sportsCourtyardProducts = await this.myProductsService.getSportsCourtyardProducts();
      this.loader = false;
    }, 3000);
  }
}
