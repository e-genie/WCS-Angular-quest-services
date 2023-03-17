import { Injectable } from '@angular/core';
import { Cocktails } from './ICocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktails[]> {
    // retourne l'ensemble des cocktails
    return this.http.get<Cocktails[]>('assets/cocktails.json');
  }
}
