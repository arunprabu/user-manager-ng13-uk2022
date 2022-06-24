import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
    <div class="card">
      <div class="card-body">
        <p>Age is: {{age}}</p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

  // Step 1: create a variable 
  @Input() age = 20; // Step 2: Make it a custom property using @Input()
  
  constructor() { }

  ngOnInit(): void {
  }

}
