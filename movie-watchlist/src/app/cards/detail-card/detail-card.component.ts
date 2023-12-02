import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IDetail } from 'src/app/model/detail-model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent {
  @Input() data: IDetail | undefined;
  @Input() imageSource: string = '';
  @Input() imageAlt: string = '';
  @Input() set iframeSource(value: string) {
    this.sanitizedVideoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  sanitizedVideoUrl: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}

  onClicked() {
    alert('Added to Watch List');
  }
}
