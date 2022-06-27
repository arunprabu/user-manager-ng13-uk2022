import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  // Step 1: find out what element has used appColorizer directive 
  // Step 2: change the bg color

  @HostBinding('style.border') border: string = '';

  constructor( private elementRef: ElementRef, private renderer: Renderer2) { 
    console.log('Inside Constructor');

    console.log(this.elementRef.nativeElement);
    const divEl = this.elementRef.nativeElement;

    // change the bg color using js  -- Not Recommended
    // divEl.style.backgroundColor = 'red';

    // change the bg color using angular's class -- Renderer2  -- Recommended
    this.renderer.setStyle(divEl, 'background-color', 'red');
    this.renderer.setStyle(divEl, 'height', '200px');
    this.renderer.setStyle(divEl, 'color', '#fff');

    const myParaEl = this.renderer.createElement('p');
    const myParaText = this.renderer.createText('Powered by Colorizer Directive');
    this.renderer.appendChild(myParaEl, myParaText);
    this.renderer.setStyle(myParaEl, 'font-size', '9px');
    this.renderer.appendChild(divEl, myParaEl); 
    
  }

  // Handling events inside Directive
  @HostListener('click', ['$event.target'])
  handleClick( targetEl: any): void {
    console.log(targetEl);
    this.renderer.setStyle(targetEl, 'background-color', 'green');

    // const myBtnEl = this.renderer.createElement('button');
    // const myBtnText = this.renderer.createText('Click Me');
    // this.renderer.appendChild(myBtnEl, myBtnText);
    // this.renderer.appendChild(targetEl, myBtnEl); 
  }

  @HostListener('mouseover', ['$event.target'])
  handleMouseover( targetEl: any): void {
    console.log(targetEl);
    this.renderer.setStyle(targetEl, 'background-color', 'yellow');

    this.border = 'dashed 5px #000';
  }

  @HostListener('mouseout', ['$event.target'])
  handleMouseout( targetEl: any): void {
    console.log(targetEl);
    this.renderer.setStyle(targetEl, 'background-color', 'red');
  }

}
