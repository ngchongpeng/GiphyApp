import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DataService } from '../services/data.service';


@Injectable()
export class DbService {

    // constructor
    constructor(private http: HttpClient, private dataSvc: DataService) { }

    // methods
    getSavedGiphyIds(username: string): any {

        var staticUrl = 'http://localhost:8080/GiphyJava/getsavedgiphys';
        return this.http.get(staticUrl + '/' + username).take(1).toPromise();
    }

    addGiphy(giphy: any) {

        var staticUrl = 'http://localhost:8080/GiphyJava/addgiphy';
        var username = this.dataSvc.user.value;
        var giphyId = giphy.id;

        var httpParams = new HttpParams()
            .set('UserId', username)
            .set('GiphyId', giphyId);

        this.http.post(staticUrl, '', { params: httpParams })
            .subscribe();
    }

    removeGiphy(giphy: any) {

        var staticUrl = 'http://localhost:8080/GiphyJava/removegiphy';
        var username = this.dataSvc.user.value;
        var giphyId = giphy.id;

        var httpParams = new HttpParams()
            .set('UserId', username)
            .set('GiphyId', giphyId);

        this.http.post(staticUrl, '', { params: httpParams })
            .subscribe();
    }

    getUsers(): any {
        var staticUrl = 'http://localhost:8080/GiphyJava/getusers';
        return this.http.get(staticUrl).take(1).toPromise();
    }
}