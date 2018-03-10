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
  loggedIn = false;
  userId = '';

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
    console.log('load search results page');
    this.switch.next('search');
  }

  savedresults() {
    console.log('load saved results page');
    this.switch.next('saved');
  }

  login(username: string) {
    console.log('login button is clicked');
    if (username == 'admin') {

      this.dbSvc.getUsers().then(users => {
        this.dataSvc.updateUsers(users);
      })
    } else {

      this.dbSvc.getSavedGiphyIds(username).then(savedGiphys => {
        if (savedGiphys.length !== 0) {
          this.giphySvc.getFullGiphys(savedGiphys)
            .then(fullGiphys => {
              this.dataSvc.updateSavedGiphys(fullGiphys.data);
            });
        }
      });
    }
    this.userId = username;
    this.dataSvc.updateUser(username);
    this.loggedIn = true;
  }

  logout() {
    console.log('logout button is clicked');
    this.dataSvc.updateSavedGiphys([]);
    this.userId = '';
    this.dataSvc.updateUser('');
    this.loggedIn = false;
  }
}