import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListService } from './poke-list.service';
import {BorderCardDirective} from './border-card.directive'
import { Pokemon } from './pokemon';
import { DatePipe} from '@angular/common';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BorderCardDirective,DatePipe,PokemonTypeColorPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  val: string;
  pokemonList: Pokemon[];
  constructor(private pokeService: PokeListService) {}
  ngOnInit(): void {
    this.pokemonList = this.pokeService.pokemons;
  }
}
