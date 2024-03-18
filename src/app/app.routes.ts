import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'pokemons',
    component: ListPokemonComponent,
    title: 'Liste Pokémons',
  },
  {
    path: 'pokemons/:id',
    component: DetailPokemonComponent,
    title: 'Detail Pokémon',
  },
  { path: '', component: ListPokemonComponent, title: 'Liste Pokémons' },
  { path: '**', component: PageNotFoundComponent, title: 'Oops Error 404 !' }
];
