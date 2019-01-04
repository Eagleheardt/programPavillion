import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testslider2Component } from './testslider2.component';

describe('Testslider2Component', () => {
  let component: Testslider2Component;
  let fixture: ComponentFixture<Testslider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testslider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testslider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
