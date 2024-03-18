import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeListService } from '../poke-list.service';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe,DatePipe],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css',
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon 
  constructor(private route: ActivatedRoute, private listService: PokeListService){}

  ngOnInit(): void {
    const idPokemon = this.route.snapshot.params['id']
    if(idPokemon){
      this.pokemon = this.listService.getPokemon(idPokemon)!
    }
  }
}
