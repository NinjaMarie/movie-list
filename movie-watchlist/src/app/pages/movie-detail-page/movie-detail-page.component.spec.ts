import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailPageComponent } from './movie-detail-page.component';

describe('MovieDetailPageComponent', () => {
  let component: MovieDetailPageComponent;
  let fixture: ComponentFixture<MovieDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailPageComponent]
    });
    fixture = TestBed.createComponent(MovieDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
