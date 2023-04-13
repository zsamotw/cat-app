import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, repeat } from 'rxjs';
import { Response } from '../models/response.interface'

const url = 'https://meowfacts.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class CatService {

  requestsNumberOnInit = 20;
  requestsNumberOnScroll = 10;

  constructor(private http: HttpClient) { }

  getCatFacts(repeatNumber?: number): Observable<Response> {
    return this.http.get(url).pipe(repeat(repeatNumber ?? 1)) as unknown as Observable<Response>;
  }
}
