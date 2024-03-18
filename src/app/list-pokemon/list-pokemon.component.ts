import { Component, OnInit } from '@angular/core';
import { PokeListService } from '../poke-list.service';
import { BorderCardDirective } from '../border-card.directive';
import { Pokemon } from '../pokemon';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [BorderCardDirective, DatePipe, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  constructor(private pokeService: PokeListService) {}
  ngOnInit(): void {
    this.pokemonList = this.pokeService.pokemons;
  }
}
