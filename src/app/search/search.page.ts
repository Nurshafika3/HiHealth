import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public searchTerm: string ="";
  public items : any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {this.setFilteredItems();
  }
  setFilteredItems() {
    this.items = this.searchService.filterItems(this.searchTerm);
    }

}
