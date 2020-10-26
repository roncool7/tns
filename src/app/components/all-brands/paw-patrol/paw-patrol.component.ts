import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paw-patrol',
  templateUrl: './paw-patrol.component.html',
  styleUrls: ['./paw-patrol.component.css']
})
export class PawPatrolComponent implements OnInit {
  public pawPatrolProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.pawPatrolProducts = await this.myProductsBrandsService.getPawPatrolProducts();
  }

}
