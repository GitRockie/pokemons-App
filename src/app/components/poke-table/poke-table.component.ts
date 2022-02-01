import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styles: [
  ]
})
export class PokeTableComponent implements OnInit {

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonService.getPokemons()
        .subscribe(
          resp => {
            console.log ( resp )
          }
        );
  }


}
