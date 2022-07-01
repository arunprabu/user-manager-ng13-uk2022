import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in an element selector 'app-root'
  templateUrl: './app.component.html', // html - template is mandatory -- should be only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple 
})
export class AppComponent {
  // ts 
  title = 'User Manager App!';

  add(a: number, b: number){
    return a + b;
  }
}
