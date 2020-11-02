import { SearchService } from './../../services/search.service';
import { ProductModel } from './../../models/product-model';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../details-dialog/details-dialog.component";
import {FormControl} from "@angular/forms";
import {isString} from "util";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public items: ProductModel[];
  public searchValue: string;
  public breakpoint:any;
  searchTerm: FormControl = new FormControl();

  constructor(private mySearchService: SearchService) {
    this.searchTerm.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      filter((input) => !!input && isString(input))
    ).subscribe(async input => {
      try {
        if (input.trim() === '' || input.includes("'")) {
          this.items = [];
          return;
        }
        this.items = await this.mySearchService.search(input);
      } catch (err) {
        alert(err.message);
      }
    });
  }

  ngOnInit(): void {this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;}

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }
}
