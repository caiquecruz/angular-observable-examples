import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Heroes, ListHeroes } from './heroes';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesServiceService {

  heroesApi = '../../assets/dota2.json';

  constructor(private http: Http) {

   }

  getHeroesApi(): Observable<ListHeroes> {
    return this.http.get(this.heroesApi)
    .map((res) => res.json() as ListHeroes);
  }


}