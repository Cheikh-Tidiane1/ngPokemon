import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeListService } from '../poke-list.service';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    templateUrl: './edit-pokemon.component.html',
    styleUrl: './edit-pokemon.component.css',
    imports: [PokemonFormComponent, LoaderComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private listService: PokeListService
  ) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.params['id'];
    if (pokemonId) {
      this.listService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon)
    }
  }
}
