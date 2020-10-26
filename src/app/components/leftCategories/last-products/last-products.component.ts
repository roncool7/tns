import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-products',
  templateUrl: './last-products.component.html',
  styleUrls: ['./last-products.component.css']
})
export class LastProductsComponent implements OnInit {
  public loader: boolean = false;
  public lastProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(async () => {
      this.lastProducts = await this.myProductsService.getLastProducts();
      this.loader = false;
    }, 3000);
  }

}
