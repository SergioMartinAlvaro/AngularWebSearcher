import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService,
              private router:Router
  ) {
    //Recogemos datos de la url, se devuelve un observer
    this.activatedRoute.params.subscribe(params =>  {
      this.heroe = this._heroesService.getHeroe(params["id"]);
  })
  }

  volver(idx:number) {
    this.router.navigate( ['heroes'] );
  }

}
