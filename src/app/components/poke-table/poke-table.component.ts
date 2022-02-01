import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styles: [
  ]
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string [] = ['position', 'image', 'pokename'];
  data:any [] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {

    let pokemonData:any;

    for ( let i= 1; i <=150; i++ ) {
    this.pokemonService.getPokemons( i )
        .subscribe(
          resp => {
            pokemonData = {
              position: i,
              image: resp.sprites.front_default,
              pokename: resp.name
            };
            this.data.push( pokemonData );
            this.dataSource = new MatTableDataSource<any>(this.data);
            this.dataSource.paginator = this.paginator;
            
          }
        );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
