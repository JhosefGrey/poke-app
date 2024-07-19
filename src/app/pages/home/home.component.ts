import { Component, OnInit } from '@angular/core';
import { Inicio } from './models/home';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  objInicio: Inicio = new Inicio();
  termino: string = '';

  constructor(private _service: HomeService, private _router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._service.getPokemones().subscribe((res) => {
      this.objInicio = res;
      console.log(res)
    });
  }

  prev() {
    this._service.getByPaginator(this.objInicio.previous!).subscribe((res) => this.objInicio = res)

  }

  next() {
    this._service.getByPaginator(this.objInicio.next!).subscribe((res) => this.objInicio = res)
  }

  search() {

    if (this.termino.trim().length === 0) return;

    this._service.getBySearch(this.termino).subscribe((res) => {
      let pokes = this._service.poke;
      pokes.push(this.termino);
      this._service.poke = pokes;
      this.showDetail(res.name)
    });
  }

  showDetail(id: string) {
    this._router.navigate(['/pokemon', id]);
  }

}