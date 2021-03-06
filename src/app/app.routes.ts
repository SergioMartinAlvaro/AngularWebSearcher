import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearcherComponent } from './components/searcher/searcher.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'filter/:search', component: SearcherComponent},
  { path: 'filter/heroe/:id', component: HeroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

//UseHash hace que si la ruta se recarga no se pierdan los parametros
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
