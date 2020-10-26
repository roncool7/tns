import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fisher-price',
  templateUrl: './fisher-price.component.html',
  styleUrls: ['./fisher-price.component.css']
})
export class FisherPriceComponent implements OnInit {
  public fisherPriceProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.fisherPriceProducts = await this.myProductsBrandsService.getFisherPriceProducts();
  }

}
