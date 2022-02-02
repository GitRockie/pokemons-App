import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styles: [
  ]
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokeType = [];
  pokeImg = '';


  constructor( private pokemonService: PokemonService,
               private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params
      .subscribe(
        params => {
          this.getPokemon(params ['id']);
        }
      )              
  }

  ngOnInit(): void {
  }

  getPokemon(id:number) {
    this.pokemonService.getPokemons(id)
        .subscribe(
          resp => {
            this.pokemon = resp;
            this.pokeImg = this.pokemon.sprites.front_default;
            this.pokeType = resp.types[0].type.name;
          }
        );
  }

}
