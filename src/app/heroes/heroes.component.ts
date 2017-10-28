import { Component, OnInit } from '@angular/core';
import { Heroes, ListHeroes } from './heroes';
import { HeroesServiceService } from './heroes-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroesServiceService]

})
export class HeroesComponent implements OnInit {

  listHeroes: ListHeroes;

  constructor(private heroesServiceService: HeroesServiceService) {
    this.listHeroes = new ListHeroes;
   }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
     this.heroesServiceService.getHeroesApi()
    .subscribe(
      (response) => {
        if (response === null ) {
          return;
        }
        this.listHeroes = response;
      }
    );
  }

}
