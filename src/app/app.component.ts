import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListService } from './poke-list.service';
import {BorderCardDirective} from './border-card.directive'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BorderCardDirective],
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
