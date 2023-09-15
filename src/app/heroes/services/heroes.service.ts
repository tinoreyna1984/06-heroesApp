import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Hero[]> {

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string):Observable<Hero|undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(e => of(undefined))
      );
  }

  getSuggestions(query: string):Observable<Hero[]>{
    return this.http.get<Hero[]|[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

}
