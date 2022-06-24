import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link">Back to Top</a>
        </li>
      </app-menu>
      <p class="copyrightText" style="border: dashed 1px green">Copyright 2022</p>
    </footer>
  `,
  styles: [
    `
      .copyrightText{
        color: grey;
        background-color: #eee;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
