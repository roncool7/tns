import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ben-ten',
  templateUrl: './ben-ten.component.html',
  styleUrls: ['./ben-ten.component.css']
})
export class BenTenComponent implements OnInit {
  public benTenProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.benTenProducts = await this.myProductsBrandsService.getBenTenProducts();
  }

}
