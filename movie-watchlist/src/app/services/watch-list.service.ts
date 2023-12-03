import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IWatchList } from '../model/watchList-card-model';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private watchList: Set<number> = new Set<number>();
  private watchListSubject: BehaviorSubject<Set<number>> = new BehaviorSubject<
    Set<number>
  >(this.watchList);

  addToWatchList(movieId: number) {
    this.watchList.add(movieId);
  }

  removeToWatchList(movieId: number) {
    this.watchList.delete(movieId);
  }

  isInWatchList(movieId: number) {
    this.watchList.has(movieId);
  }

  getWatchList(): BehaviorSubject<Set<number>> {
    return this.watchListSubject;
  }

  getMovieDetails(movieId: number): Observable<IWatchList> {
    return of({
      movieId: movieId,
      title: 'Movie ${movieId}',
      description: 'Description for Movie ${movieId}',
    });
  }
}
