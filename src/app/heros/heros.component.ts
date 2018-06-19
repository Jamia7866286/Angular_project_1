import { Component, OnInit } from '@angular/core';
// import { HEROS } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // heros = HEROS;
  

  constructor() { }

  ngOnInit() {
  }

}
