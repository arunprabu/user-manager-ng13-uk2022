import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EllipsisPipe } from '../shared/pipes/ellipsis.pipe';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent, EllipsisPipe ]
    })
    .compileComponents();
  });

  // setup 
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds two numbers properly', () => {
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(2, 3)).toEqual(5);
  });

  // testing return type
  it('adds two numbers and returns number as output', () => {
    expect(component.add(10, 20)).not.toBeNaN()
  });

  it('has Calculator as heading in h3 ', () => {
    const aboutCompHTML = fixture.nativeElement as HTMLElement;
    expect(aboutCompHTML.querySelector('h3')?.textContent).toContain('Calculator');
  });

  it('has counterValue with default value 0', () => {
    expect(component.counterValue).toEqual(0);
  });

  it('should increment counterValue', () => {
    // calling event handler 
    component.handleIncrement();
    component.handleIncrement();
    expect(component.counterValue).toEqual(2);
  });

  it('should increment counter value in html upon clicking incrementBtn', ()=>{

    // find the button element with the class 'incrementBtn' 
    const aboutCompHTML = fixture.debugElement;
    aboutCompHTML.query(By.css('.incrementBtn')).triggerEventHandler('click', null);

    fixture.detectChanges(); //
    const spanElTxt =  aboutCompHTML.query(By.css('span.counter')).nativeElement.innerText;
    expect(spanElTxt).toBe('1');
  });

});
