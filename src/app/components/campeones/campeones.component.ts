import { Component, OnInit } from '@angular/core';
import { Campeon } from 'src/app/entities/campeon';
import { CAMPEONES } from 'src/app/entities/campeones';

@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent implements OnInit {
  listaCampeones = CAMPEONES
  campeonElegido: Campeon | undefined;
/*
  aleatorio = Math.floor(Math.random()*this.listaCampeones.length)
  campeonGanador: Campeon = this.listaCampeones[this.aleatorio];
*/
  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(campeonSeleccionado: Campeon){
    console.log(campeonSeleccionado);
    this.campeonElegido = campeonSeleccionado;
  }
}