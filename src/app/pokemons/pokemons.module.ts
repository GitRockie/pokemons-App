import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggregateComponent } from './pages/aggregate/aggregate.component';
import { SearchComponent } from './pages/search/search.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    AggregateComponent,
    SearchComponent,
    PokemonComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonsModule { }
