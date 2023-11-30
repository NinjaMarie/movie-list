import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../model/movie-model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() data: Imovie | undefined 

}
