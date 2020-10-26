import { ProductsBrandsService } from './../../../services/products-brands.service';
import { ProductModel } from './../../../models/product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hatchimals',
  templateUrl: './hatchimals.component.html',
  styleUrls: ['./hatchimals.component.css']
})
export class HatchimalsComponent implements OnInit {
  public hatchimalsProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

    async ngOnInit() {
    this.hatchimalsProducts = await this.myProductsBrandsService.getHatchimalsProducts();
  }

}
