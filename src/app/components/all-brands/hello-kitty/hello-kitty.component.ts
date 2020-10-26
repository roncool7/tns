import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-kitty',
  templateUrl: './hello-kitty.component.html',
  styleUrls: ['./hello-kitty.component.css']
})
export class HelloKittyComponent implements OnInit {
  public helloKittyProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.helloKittyProducts = await this.myProductsBrandsService.getHelloKittyProducts();
  }

}
