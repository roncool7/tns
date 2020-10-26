import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viper',
  templateUrl: './viper.component.html',
  styleUrls: ['./viper.component.css'],
})
export class ViperComponent implements OnInit {
  public viperProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) {}

  async ngOnInit() {
    this.viperProducts = await this.myProductsBrandsService.getViperProducts();
  }
}
