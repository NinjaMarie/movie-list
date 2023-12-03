import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWatchList } from 'src/app/model/watchList-card-model';

@Component({
  selector: 'app-watch-list-card',
  templateUrl: './watch-list-card.component.html',
  styleUrls: ['./watch-list-card.component.css'],
})
export class WatchListCardComponent {
  @Input() data: IWatchList | undefined;
  @Input() imageSource: string = '';
  @Output() removeButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  handleRemoveButton(): void {
    this.removeButtonClicked.emit();
    alert('Movie Removed');
  }
}
