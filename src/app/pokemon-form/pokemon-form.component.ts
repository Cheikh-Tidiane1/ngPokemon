import { Component, Input, OnInit } from '@angular/core';
import { PokeListService } from '../poke-list.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css',
  imports: [FormsModule, PokemonTypeColorPipe],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  constructor(
    private pokemonService: PokeListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType(event: Event, type: string) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.slice(index, 1);
    }
  }

  onSubmit() {
    console.log('submit ok');
    this.router.navigate(['/pokemons', this.pokemon.id]);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }
}
