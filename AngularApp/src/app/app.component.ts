import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  // properties
  title: string;
  display: string;

  // oninit
  ngOnInit() {
    console.log('app component is created');
    this.title = 'app';
    this.display = 'saved';
  }

  // ondestroy
  ngOnDestroy() {
    console.log('app component is destroyed');
  }

  // event handlers
  switch(display: string) {
    this.display = display;
  }
}
