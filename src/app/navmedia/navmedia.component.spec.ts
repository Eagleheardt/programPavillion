import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmediaComponent } from './navmedia.component';

describe('NavmediaComponent', () => {
  let component: NavmediaComponent;
  let fixture: ComponentFixture<NavmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
