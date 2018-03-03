import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})


export class GiphyComponent implements OnInit {

  // properties\
  @Input() giphy: any;
  @Input() saved: boolean;

  // constructor
  constructor(private dataSvc: DataService) { }

  // oninit
  ngOnInit() { }

  // event handler
  favourite() {
    var savedGiphys = this.dataSvc.savedGiphys.value;
    savedGiphys.push(this.giphy);
    this.saved = true;
  }

  unfavourite() {
    var savedGiphys = this.dataSvc.savedGiphys.value;
    const index = savedGiphys.indexOf(this.giphy);
    if (index !== -1) {
      savedGiphys.splice(index, 1);
    }
    this.saved = false;
  }
}
