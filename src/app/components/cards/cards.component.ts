import { Component, OnInit } from '@angular/core';
import { CARDS } from 'src/app/entities/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  listaCards = CARDS

  constructor() { }

  ngOnInit(): void {
  }

}
