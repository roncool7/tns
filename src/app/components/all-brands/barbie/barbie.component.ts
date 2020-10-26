import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barbie',
  templateUrl: './barbie.component.html',
  styleUrls: ['./barbie.component.css']
})
export class BarbieComponent implements OnInit {
  public barbieProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.barbieProducts = await this.myProductsBrandsService.getBarbieProducts();
  }

}
