import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit-indicator-banner',
  templateUrl: './hit-indicator-banner.component.html',
  styleUrls: ['./hit-indicator-banner.component.scss']
})
export class HitIndicatorBannerComponent implements OnInit {
  @Input() subtitle: string = "";
  @Input() teamName: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
