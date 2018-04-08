import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ConnectService {
    subject = new Subject<any>();
    

      

    getConnection(): Observable<any> {
        return this.subject.asObservable();
      }
}