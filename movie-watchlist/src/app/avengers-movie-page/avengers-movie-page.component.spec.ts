import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersMoviePageComponent } from './avengers-movie-page.component';

describe('AvengersMoviePageComponent', () => {
  let component: AvengersMoviePageComponent;
  let fixture: ComponentFixture<AvengersMoviePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvengersMoviePageComponent]
    });
    fixture = TestBed.createComponent(AvengersMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
