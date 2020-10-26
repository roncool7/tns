import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pj-masks',
  templateUrl: './pj-masks.component.html',
  styleUrls: ['./pj-masks.component.css']
})
export class PjMasksComponent implements OnInit {
  public pjMasksProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.pjMasksProducts = await this.myProductsBrandsService.getPjProducts();
  }

}
