import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    

  }

}
