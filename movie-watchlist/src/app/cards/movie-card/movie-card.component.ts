import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovie } from '../../model/movie-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() data: Imovie | undefined
  @Input() routerLink: string = ''
  @Input() imageSource: string = ''



}
