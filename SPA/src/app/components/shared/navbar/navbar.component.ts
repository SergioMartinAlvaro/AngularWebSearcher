import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService:HeroesService,
              private router:Router
            ) { }

  heroes:Heroe[] = [];

  ngOnInit() {
  }

  buscarHeroe( termino:string ) {
    console.log(termino);
    this.heroes = this._heroesService.buscarHeroes(termino);
    this.router.navigate( ['/filter',termino] );
  }

}
