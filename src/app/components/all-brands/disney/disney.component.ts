import { ProductModel } from './../../../models/product-model';
import { ProductsBrandsService } from './../../../services/products-brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.css']
})
export class DisneyComponent implements OnInit {
  public disneyProducts: ProductModel[];

  constructor(private myProductsBrandsService: ProductsBrandsService) { }

  async ngOnInit() {
    this.disneyProducts = await this.myProductsBrandsService.getDisneyProducts();
  }

}
