import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-saved-results',
  templateUrl: './saved-results.component.html',
  styleUrls: ['./saved-results.component.css']
})


export class SavedResultsComponent implements OnInit {

  // properties
  savedGiphys = [];
  sub: Subscription;


  // constructor
  constructor(private dataSvc: DataService) { }

  // oninit
  ngOnInit() {
    console.log('saved-results component is created');
    this.savedGiphys = this.dataSvc.savedGiphys.value;
    this.sub = this.dataSvc.savedGiphysO.subscribe(savedGiphys => {
      console.log('update in value is triggered in saved component');
      this.savedGiphys = savedGiphys;
    });
  }

  // ondestory
  ngOnDestroy() {
    console.log('saved-results component is destroyed');
    this.sub.unsubscribe();
  }
}
