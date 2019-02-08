import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratespadesComponent } from './piratespades.component';

describe('PiratespadesComponent', () => {
  let component: PiratespadesComponent;
  let fixture: ComponentFixture<PiratespadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiratespadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratespadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
