import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../pages/home/home.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  pokes: string[] = [];

  constructor(private _service: HomeService){}

  ngOnInit(): void {
    this._service.pokemonesHistorial.asObservable().subscribe((res) => {
      if(res.length == 0){
        this.pokes = this._service.poke.reverse();
      }else{
        this.pokes = res.reverse()
      }
    });  
  }  

}
