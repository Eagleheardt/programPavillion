import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadnessComponent } from './madness.component';

describe('MadnessComponent', () => {
  let component: MadnessComponent;
  let fixture: ComponentFixture<MadnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
