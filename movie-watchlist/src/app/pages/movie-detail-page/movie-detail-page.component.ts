import { Component, OnInit } from '@angular/core';
import { TRAILER_LINK } from 'src/app/constants';
import { mockDetailData } from 'src/app/mockData/mock-detail-data';
import { IDetail } from 'src/app/model/detail-model';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css'],
})
export class MovieDetailPageComponent implements OnInit {
  detailData: IDetail | undefined;
  videoUrl: string = 'https://www.youtube.com/embed/LdOM0x0XDMo';
  ngOnInit(): void {
    this.detailData = mockDetailData;
    console.log('DATA HERE', mockDetailData);
  }
}
