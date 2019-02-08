import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratepokerComponent } from './piratepoker.component';

describe('PiratepokerComponent', () => {
  let component: PiratepokerComponent;
  let fixture: ComponentFixture<PiratepokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiratepokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratepokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
