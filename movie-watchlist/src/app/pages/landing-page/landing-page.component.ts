import { Component, OnInit } from '@angular/core';
import { mockMovieData } from 'src/app/mockData/mock-movie-data';
import { mockMovieList } from 'src/app/mockData/mock-movieList-data';
import { Imovie } from 'src/app/model/movie-model';
import { IMovieList } from 'src/app/model/movieList-model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  movieData: Imovie | undefined;
  movieListData: IMovieList[] = [];
  ngOnInit(): void {
    this.movieData = mockMovieData;
    this.movieListData = mockMovieList;
  }

  sort(property: string): void {
    this.movieListData.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }
}
