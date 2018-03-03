import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

    // properties
    user = new BehaviorSubject<any>('');
    userO = this.user.asObservable();
    savedGiphys = new BehaviorSubject<any>([]);
    savedGiphysO = this.savedGiphys.asObservable();
    searchedGiphys = new BehaviorSubject<any>([]);
    searchedGiphysO = this.searchedGiphys.asObservable();

    // methods
    updateSavedGiphys(savedGiphys: any) {
        this.savedGiphys.next(savedGiphys);
    }

    updateUser(username: string) {
        this.user.next(username);
    }
}