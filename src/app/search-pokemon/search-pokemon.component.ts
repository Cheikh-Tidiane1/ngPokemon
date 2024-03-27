import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokeListService } from '../poke-list.service';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css',
})
export class SearchPokemonComponent implements OnInit {
  
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(
    private router: Router,
    private pokemonService: PokeListService
  ) {}

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    this.router.navigate(['pokemons', pokemon.id]);
  }
}
