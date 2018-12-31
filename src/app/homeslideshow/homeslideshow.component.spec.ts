import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeslideshowComponent } from './homeslideshow.component';

describe('HomeslideshowComponent', () => {
  let component: HomeslideshowComponent;
  let fixture: ComponentFixture<HomeslideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeslideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeslideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
