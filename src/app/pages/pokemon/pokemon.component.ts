import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from './models/pokemon';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokeId: string = '';
  pokemon: Pokemon = new Pokemon();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: HomeService
  ) { 

    

  }

  ngOnInit() {

    this.route.paramMap.subscribe((res) =>{
      if (res.get('id') != null) {
        this.pokeId = res.get('id')!; 
        console.log(this.pokeId)
        this.getPokemon();
      }
    })

  
  }

  getPokemon(){
    this._service.getBySearch(this.pokeId).subscribe((res) => this.pokemon = res);
  }
}
