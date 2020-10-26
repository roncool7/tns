import { SearchService } from './../../services/search.service';
import { ProductModel } from './../../models/product-model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public items: ProductModel[];
  public searchValue: string;

  constructor(private mySearchService: SearchService) {}

  ngOnInit(): void {}

  // Search
  public async search(text) {
    try {
      if (text.trim() === '' || text.includes("'")) {
        this.items = [];
        return;
      }
      this.items = await this.mySearchService.search(text);
    } catch (err) {
      alert(err.message);
    }
  }
}