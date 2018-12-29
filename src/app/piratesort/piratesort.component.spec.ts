import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesortComponent } from './piratesort.component';

describe('PiratesortComponent', () => {
  let component: PiratesortComponent;
  let fixture: ComponentFixture<PiratesortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiratesortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
