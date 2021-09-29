import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  buttonPressed: string;
  constructor() {
    this.buttonPressed = 'futbol'
  }

  ngOnInit(): void {
  }

  changeCurrentActiveSport(sport: string): void {
    this.buttonPressed = sport
    console.log(this.buttonPressed);
  }
}
