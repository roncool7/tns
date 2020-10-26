import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  public loader: boolean = false;
  public recommendedProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(async () => {
      this.recommendedProducts = await this.myProductsService.getRecommendedProducts();
      this.loader = false;
    }, 3000);
  }

}
