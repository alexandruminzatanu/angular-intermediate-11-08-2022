import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './joke.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeItemService {

  constructor(private httpClient: HttpClient) { }

  getJokeFromCategory(category: string): Observable<Joke> {
    return this.httpClient.get<Joke>(`https://api.chucknorris.io/jokes/random?category=${category}`);
  }
}
