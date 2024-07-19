import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inicio } from './models/home';
import { environment } from '../../../environments/environment';
import { Pokemon } from '../pokemon/models/pokemon';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public pokemonesHistorial: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private _http: HttpClient) { }

  getPokemones() {
    return this._http.get<Inicio>(`${environment.api_url}pokemon`)
  }

  getByPaginator(url: string) {
    return this._http.get<Inicio>(`${url}`)
  }

  getBySearch(name: string) {
    return this._http.get<Pokemon>(`${environment.api_url}pokemon/${name}`)
  }

  get poke() {
    let pokes: string[] = [];
    if (localStorage.getItem('poke-historial') != null) {
      pokes = JSON.parse(localStorage.getItem('poke-historial')!);
    }
    localStorage.setItem('poke-historial', JSON.stringify(pokes));
    return pokes
  }

  set poke(pokes: string[]) {
    this.pokemonesHistorial.next(pokes);
    localStorage.setItem('poke-historial', JSON.stringify(pokes));
  }


}
