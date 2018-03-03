import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../../services/data.service';
import { DbService } from '../../services/db.service';
import { GiphyService } from '../../services/giphy.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  // properties
  @Output() switch = new EventEmitter<string>();

  // constructor
  constructor(private dataSvc: DataService, private dbSvc: DbService, private giphySvc: GiphyService, private http: HttpClient) { }

  // oninit
  ngOnInit() {
    console.log('menu component is created');
  }

  // ondestroy
  ngOnDestroy() {
    console.log('menu component is destroyed');
  }

  // event handlers
  searchresults() {
    console.log('search button is clicked');
    this.switch.next('search');
  }

  savedresults() {
    console.log('saved button is clicked');
    this.switch.next('saved');
  }

  login(username: string) {
    console.log('login button is clicked');

    this.dbSvc.getSavedGiphys(username).then(savedGiphys => {

      console.log(savedGiphys.length);

      if (savedGiphys.length !== 0) {
        this.giphySvc.getFullGiphys(savedGiphys)
          .then(fullGiphys => {
            this.dataSvc.updateSavedGiphys(fullGiphys.data);
            this.dataSvc.updateUser(username);
          });
      }
    });
  }

  logout() {
    console.log('logout button is clicked');
    this.dataSvc.updateSavedGiphys([]);
    this.dataSvc.updateUser('');
  }
}
