import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  // properties
  users: any;

  // constructor
  constructor(private dataSvc: DataService) { }

  // oninit
  ngOnInit() {
    console.log('admin component created');
    this.dataSvc.usersO.subscribe(users => {
      this.users = users;
    });
  }
}
