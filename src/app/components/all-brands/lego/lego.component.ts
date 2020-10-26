import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.component.html',
  styleUrls: ['./lego.component.css']
})
export class LegoComponent implements OnInit {
  public legoProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.legoProducts = await this.myProductsBrandsService.getLegoProducts();
  }

}
