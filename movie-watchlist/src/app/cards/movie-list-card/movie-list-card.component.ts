import { Component, Input } from '@angular/core';
import { Imovie } from 'src/app/model/movie-model';
import { IMovieList } from 'src/app/model/movieList-model';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css'],
})
export class MovieListCardComponent {
  @Input() movieId: number | undefined;
  @Input() data: IMovieList | undefined;

  get routerLink(): any {
    return ['/movie-detail', this.movieId];
  }
}
