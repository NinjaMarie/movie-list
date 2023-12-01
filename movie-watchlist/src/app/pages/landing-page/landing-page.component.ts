import { Component, OnInit } from '@angular/core';
import { mockMovieData } from 'src/app/mockData/mock-movie-data';
import { Imovie } from 'src/app/model/movie-model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  movieData: Imovie|undefined
  ngOnInit(): void {
   this.movieData = mockMovieData
  }

  onCardClicked(){
    console.log('Card is Clicked')
  }



}
