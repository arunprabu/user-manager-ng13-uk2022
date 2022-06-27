import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button type="button" (click)="handleSendDataToParent()">Send Data to Parent</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Let's have the data 
  private profileName = 'Steve'; 

  // Step 2: Let's create an obj of EventEmitter 
  @Output() profileLoaded = new EventEmitter(); // Step 3: Let's make it a custom event by using @Output()

  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataToParent(){
    console.log('Before sending the data to parent');
    // Step 4: Emit / Trigger the event along with it send the data as well
    this.profileLoaded.emit(this.profileName);
    console.log('After the data sent to parent');
  }


}
