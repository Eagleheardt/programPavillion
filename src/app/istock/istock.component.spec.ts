import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstockComponent } from './istock.component';

describe('IstockComponent', () => {
  let component: IstockComponent;
  let fixture: ComponentFixture<IstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
