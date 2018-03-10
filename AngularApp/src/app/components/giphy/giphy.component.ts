import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { DataService } from '../../services/data.service';
import { DbService } from '../../services/db.service';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})


export class GiphyComponent implements OnInit, OnDestroy {

  // properties\
  @Input() giphy: any;
  @Input() saved: boolean;

  // constructor
  constructor(private dataSvc: DataService, private dbSvc: DbService) { }

  // oninit
  ngOnInit() {
    console.log('giphy component is created');
  }

  // ondestroy
  ngOnDestroy() {
    console.log('giphy component is destroyed');
  }

  // event handler
  favourite() {
    var savedGiphys = this.dataSvc.savedGiphys.value;
    this.dbSvc.addGiphy(this.giphy);
    savedGiphys.push(this.giphy);
    this.saved = true;
  }

  unfavourite() {
    var savedGiphys = this.dataSvc.savedGiphys.value;
    const index = savedGiphys.indexOf(this.giphy);
    if (index !== -1) {
      savedGiphys.splice(index, 1);
    }
    this.dbSvc.removeGiphy(this.giphy);
    this.saved = false;
  }
}
