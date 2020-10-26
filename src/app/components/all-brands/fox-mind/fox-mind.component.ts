import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox-mind',
  templateUrl: './fox-mind.component.html',
  styleUrls: ['./fox-mind.component.css'],
})
export class FoxMindComponent implements OnInit {
  public foxMindProducts: ProductModel[];
  constructor(private myProductsBrandsService: ProductsBrandsService) {}

  async ngOnInit() {
    this.foxMindProducts = await this.myProductsBrandsService.getFoxMindProducts();
  }
}
