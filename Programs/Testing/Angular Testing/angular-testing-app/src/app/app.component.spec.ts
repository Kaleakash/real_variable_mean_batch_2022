import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);  // id of Component 
    const app = fixture.componentInstance;    // app is referene of component 
    expect(app).toBeTruthy();           // reference created true or false. 
  });

  it(`should have as title 'angular-testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-app');
  });

  it(`Component property testing`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.id).toEqual(100);
    expect(app.name).toBe("Raj Deep");
    expect(app.age).toBeGreaterThan(20);
    expect(app.names.length).toEqual(4);

  });

  it(`Component function testing`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.disInfo()).toContain("Welcome");
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();    // load the dom 
    const compiled = fixture.nativeElement as HTMLElement;
    //expect(compiled.getElementsByTagName('h1')[0].textContent).toContain('Angular');
    //expect(compiled.querySelector("h1")?.textContent).toContain('Angular');
    //expect(compiled.querySelector(".myClass")?.textContent).toContain('Angular');
    //expect(compiled.querySelector("#abc")?.textContent).toContain('Angular');
    expect(compiled.getElementsByClassName("myClass")[0]?.textContent).toContain('Angular');
  });
  
});
