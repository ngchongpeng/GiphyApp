import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { GiphyService } from '../../services/giphy.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})


export class SearchResultsComponent implements OnInit {

  // properties
  searchedGiphys = [];
  @ViewChild('searchKey') searchKey: ElementRef;
  @ViewChild('size') size: ElementRef;

  // constructor
  constructor(private giphySvc: GiphyService) { }

  // oninit
  ngOnInit() {
    console.log('search-results component is created');
  }

  // ondestroy
  ngOnDestroy() {
    console.log('search-results component is destroyed');
  }

  // event handlers
  search() {
    console.log('search button is clicked');

    var searchKey: string = this.searchKey.nativeElement.value;
    var size = this.size.nativeElement.value;
    this.giphySvc.searchGiphys(searchKey, size).then(searchedGiphys => {
      this.searchedGiphys = searchedGiphys.data;
      console.log(searchedGiphys.data);
    });
  }
}
