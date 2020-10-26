import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent implements OnInit {
  public lolProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.lolProducts = await this.myProductsBrandsService.getLolProducts();
  }

}
