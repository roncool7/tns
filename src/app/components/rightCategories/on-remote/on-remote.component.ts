import { ProductModel } from './../../../models/product-model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-remote',
  templateUrl: './on-remote.component.html',
  styleUrls: ['./on-remote.component.css'],
})
export class OnRemoteComponent implements OnInit {
  public loader: boolean = false;
  public onRemoteProducts: ProductModel[];

  constructor(private myProductsService: ProductsService) {}

  ngOnInit() {
    this.loader = true;
    setTimeout(async () => {
      this.onRemoteProducts = await this.myProductsService.getRemoteProducts();
      this.loader = false;
    }, 3000);
  }
}
