import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

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
  //   { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '', component: ListPokemonComponent, title: 'Liste Pokémons' },
];
