import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolls-characters',
  templateUrl: './dolls-characters.component.html',
  styleUrls: ['./dolls-characters.component.css'],
})
export class DollsCharactersComponent implements OnInit {
  public loader: boolean = false;
  public dollsCharactersProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.dollsCharactersProducts = await this.myProductsService.getDollsCharactersProducts();
      this.loader = false;
    }, 3000);
  }
}
