import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kodkod',
  templateUrl: './kodkod.component.html',
  styleUrls: ['./kodkod.component.css']
})
export class KodkodComponent implements OnInit {
  public kodkodProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.kodkodProducts = await this.myProductsBrandsService.getKodkodProducts();
  }

}
