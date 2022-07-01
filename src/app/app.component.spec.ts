import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Test Pattern: Given, When, Then - similar to AAA 

// group of related test spec -- test suite
describe('AppComponent', () => {
  beforeEach(async () => {
    // Similar to AppModule
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test spec #1 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up comp ts (class) for testing
    expect(app).toBeTruthy();
  });

  it(`should have as title 'user-manager-ng13-uk2022'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up comp ts (class) for testing
    expect(app.title).toEqual('User Manager App!');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // to detect changes in html and ts
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('User Manager App! is running!');
  });

  it('adds two numbers properly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up comp ts (class) for testing
    expect(app.add(10, 20)).toEqual(30);
    expect(app.add(2, 3)).toEqual(5);
  });
});
