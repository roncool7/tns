import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-thinking',
  templateUrl: './box-thinking.component.html',
  styleUrls: ['./box-thinking.component.css'],
})
export class BoxThinkingComponent implements OnInit {
  public loader: boolean = false;
  public boxThinkingProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.boxThinkingProducts = await this.myProductsService.getBoxThinkingProducts();
      this.loader = false;
    }, 3000);
  }
}
