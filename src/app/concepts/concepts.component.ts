import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {
  
  // interpolation related
  appName = 'User Manager Plus!';
  developersCount = 5;

  constructor() { }

  ngOnInit(): void {
  }



}
