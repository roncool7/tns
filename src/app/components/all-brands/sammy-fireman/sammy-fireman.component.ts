import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sammy-fireman',
  templateUrl: './sammy-fireman.component.html',
  styleUrls: ['./sammy-fireman.component.css']
})
export class SammyFiremanComponent implements OnInit {
  public sammyFiremanProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.sammyFiremanProducts = await this.myProductsBrandsService.getSammyFiremanProducts();
  }

}
