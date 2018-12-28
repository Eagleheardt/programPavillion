import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavorComponent } from './savor.component';

describe('SavorComponent', () => {
  let component: SavorComponent;
  let fixture: ComponentFixture<SavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
