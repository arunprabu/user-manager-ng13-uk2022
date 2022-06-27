import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in an element selector 'app-root'
  templateUrl: './app.component.html', // html - template is mandatory -- should be only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple 
})
export class AppComponent {
  // ts 
  title = 'user-manager-ng13-uk2022';
}
