import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  mockDetailCardData,
  mockDetailData,
} from 'src/app/mockData/mock-detail-data';
import { IDetail } from 'src/app/model/detail-model';
import { IDetailCard } from 'src/app/model/detailCard-model';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css'],
})
export class MovieDetailPageComponent implements OnInit {
  movieId: number | undefined;
  detailData: IDetailCard | undefined;
  avengersVideoUrl: string = 'https://www.youtube.com/embed/tmeOjFno6Do';
  guardiansVideoUrl: string = 'https://www.youtube.com/embed/d96cjJhvlMA';
  knivesVideoUrl: string = 'https://www.youtube.com/embed/qGqiHJTsRkQ';
  spiderManVideoUrl: string = 'https://www.youtube.com/embed/tg52up16eq0';
  tenetVideoUrl: string = 'https://www.youtube.com/embed/LdOM0x0XDMo';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.createSubscription();
    this.routeDetailPages();
  }

  createSubscription() {
    this.detailData = mockDetailCardData;
  }

  routeDetailPages() {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
    });
  }
}
