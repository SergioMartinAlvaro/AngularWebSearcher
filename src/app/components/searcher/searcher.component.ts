import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroesFilter:Heroe[] = [];

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params =>  {

      this.heroesFilter = this._heroesService.buscarHeroes(params["search"]);
    })
  }

  ngOnInit() {
  }

  verHeroe(idx:number) {
    this.router.navigate( ['/filter/heroe', idx] );
  }

}
