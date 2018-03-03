import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DbService {

    // constructor
    constructor(private http: HttpClient) { }

    // methods
    getSavedGiphys(username: string): any {
        var staticUrl = 'http://localhost:8080/GiphyJava/getsavedgiphys';
        return this.http.get(staticUrl + '/' + username).take(1).toPromise();
    }
}