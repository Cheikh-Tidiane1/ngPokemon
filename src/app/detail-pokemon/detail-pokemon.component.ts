import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeListService } from '../poke-list.service';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe,DatePipe,RouterLink],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css',
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon 
  constructor(private route: ActivatedRoute, private listService: PokeListService,private router: Router){}

  ngOnInit(): void {
    const idPokemon = this.route.snapshot.params['id']
    if(idPokemon){
      this.pokemon = this.listService.getPokemon(idPokemon)!
    }
  }

  // goToPokemon(){
  //   this.router.navigate(['pokemons'])
  // }
}
