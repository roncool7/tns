import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public loader: boolean = false;
  public salesProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(async () => {
      this.salesProducts = await this.myProductsService.getSalesProducts();
      this.loader = false;
    }, 3000);
  }

}
