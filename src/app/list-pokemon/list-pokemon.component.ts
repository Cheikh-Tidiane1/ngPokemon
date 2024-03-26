import { Component, OnInit } from '@angular/core';
import { PokeListService } from '../poke-list.service';
import { BorderCardDirective } from '../border-card.directive';
import { Pokemon } from '../pokemon';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { SearchPokemonComponent } from "../search-pokemon/search-pokemon.component";
@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    templateUrl: './list-pokemon.component.html',
    styleUrl: './list-pokemon.component.css',
    imports: [BorderCardDirective, DatePipe, PokemonTypeColorPipe, NgStyle, RouterLink, SearchPokemonComponent]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  constructor(private pokeService: PokeListService, private router: Router) {}
  ngOnInit(): void {
    this.pokeService.getPokemonList().subscribe(pokemon => this.pokemonList = pokemon);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemons', pokemon.id]);
  }
}
