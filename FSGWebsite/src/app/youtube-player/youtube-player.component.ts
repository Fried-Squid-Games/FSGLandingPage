import {
  Component,
  Input
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent {

  @Input() ytUrl!: string;
  @Input() ytTitle!: string;
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.ytUrl) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytUrl);
    }
  }

}
