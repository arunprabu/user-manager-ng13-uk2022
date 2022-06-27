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

  // property binding related
  companyName = 'Cognizant Tech';

  // two way related
  courseName = 'Angular';

  // custom property binding related 
  myAge = 50;

  // custom event binding related
  dataReceivedFromChildComp = '';

  // directives related
  isLoggedIn = false;
  skills = ['html', 'css', 'ts', 'js', 'angular'];

  constructor() {
  }

  ngOnInit(): void {
  }

  // event binding related
  handleClickMe(event: Event){
    console.log(event);
    alert('clicked');
  }

  // custom event binding related
  // Step 6 of Custom Event Binding: Receive the data from parent comp and display in html
  handleProfileLoaded(event: string){
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
