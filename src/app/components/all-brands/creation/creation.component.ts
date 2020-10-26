import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  public creationProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.creationProducts = await this.myProductsBrandsService.getCreationProducts();
  }

}
