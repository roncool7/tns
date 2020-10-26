import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lego-gunz',
  templateUrl: './lego-gunz.component.html',
  styleUrls: ['./lego-gunz.component.css'],
})
export class LegoGunzComponent implements OnInit {
  public loader: boolean = false;
  public legoGunzProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.legoGunzProducts = await this.myProductsService.getLegoGunzProducts();
      this.loader = false;
    }, 3000);
  }
}
