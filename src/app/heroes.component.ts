import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'heroes';
  heroes: Hero[];
  selectedHero: Hero;
  /**
   *
   */
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(x => this.heroes = x);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
