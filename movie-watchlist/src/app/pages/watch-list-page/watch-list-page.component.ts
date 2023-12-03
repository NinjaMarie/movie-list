import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { mockDetailData } from 'src/app/mockData/mock-detail-data';
import { IWatchList } from 'src/app/model/watchList-card-model';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css'],
})
export class WatchListPageComponent implements OnInit {
  watchList: number[] | undefined;
  watchListWithDetails$: Observable<IWatchList[]> | undefined;
  // watchListData: IWatchList | undefined;

  constructor(private watchListService: WatchListService) {}
  ngOnInit(): void {
    // this.watchListData = mockDetailData;
    this.createSubscription();
  }

  createSubscription() {
    this.watchListService.getWatchList().subscribe((listOfMovie) => {
      this.watchList = Array.from(listOfMovie);
      this.watchListWithDetails$ = this.getWatchListWithDetails(this.watchList);
    });
  }

  private getWatchListWithDetails(
    watchList: number[]
  ): Observable<IWatchList[]> {
    const movieDetailsObservables: Observable<IWatchList>[] = watchList.map(
      (movieId) => {
        return this.watchListService.getMovieDetails(movieId);
      }
    );
    return forkJoin(movieDetailsObservables);
  }

  onRemoveClicked(): void {
    alert('Remove Button Clicked');
  }
}
