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
  counterValue = 0;

  constructor() { }

  ngOnInit(): void {
    

  }

  add(a: number, b: number): number{
    return a + b;
  }

  handleIncrement(){
    this.counterValue +=1;
  }

}
