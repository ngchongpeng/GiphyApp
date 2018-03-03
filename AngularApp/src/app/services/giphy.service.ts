import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GiphyService {

    // properties
    private apiKey = 'evq9lbqsewLWCAzDpxUu8el2e5EUMc9P';

    // constructor
    constructor(private http: HttpClient) { }

    // methods
    searchGiphys(searchKey: string, size: string): any {

        var apiUrl = 'https://api.giphy.com/v1/gifs/search';
        var httpParams = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', searchKey)
            .set('limit', size);

        return this.http.get(apiUrl, { params: httpParams })
            .take(1)
            .toPromise();
    }

    getFullGiphys(savedGiphys: any): any {

        var ids = '';
        for (let i = 0; i < savedGiphys.length; i++) {
            ids += (savedGiphys[i].GiphyId + ',');
        }

        var apiUrl = 'https://api.giphy.com/v1/gifs'
        var httpParams = new HttpParams()
            .set('api_key', this.apiKey)
            .set('ids', ids);

        return this.http.get(apiUrl, { params: httpParams })
            .take(1).toPromise();
    }
}