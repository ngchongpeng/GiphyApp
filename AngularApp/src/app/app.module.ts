import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SavedResultsComponent } from './components/saved-results/saved-results.component';
import { MenuComponent } from './components/menu/menu.component';

import { DataService } from './services/data.service';
import { GiphyService } from './services/giphy.service';
import { DbService } from './services/db.service';
import { GiphyComponent } from './components/giphy/giphy.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SavedResultsComponent,
    MenuComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    DataService,
    GiphyService,
    DbService
  ],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule { }
