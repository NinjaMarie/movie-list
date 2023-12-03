import { Component, OnInit } from '@angular/core';
import { mockMovieCardsData } from 'src/app/mockData/mock-movie-data';
import { mockMovieList } from 'src/app/mockData/mock-movieList-data';
import { ImovieCard } from 'src/app/model/movieCards-model';
import { IMovieList } from 'src/app/model/movieList-model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  movieData: ImovieCard | undefined;
  movieListData: IMovieList[] = [];
  ngOnInit(): void {
    this.movieData = mockMovieCardsData;
    this.movieListData = mockMovieList;
  }

  sort(property: string): void {
    this.movieListData.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }
}
