import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, repeat } from 'rxjs';
import { Response } from '../model/response'

const url = 'https://meowfacts.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCatFacts(repeatNumber?: number): Observable<Response> {
    return this.http.get(url).pipe(repeat(repeatNumber ?? 1)) as Observable<any>;
  }
}
