import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribureDirectiveComponent } from './attribure-directive.component';

describe('AttribureDirectiveComponent', () => {
  let component: AttribureDirectiveComponent;
  let fixture: ComponentFixture<AttribureDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttribureDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttribureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
