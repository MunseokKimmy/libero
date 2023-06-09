import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit-indicator-banner',
  templateUrl: './hit-indicator-banner.component.html',
  styleUrls: ['./hit-indicator-banner.component.scss']
})
export class HitIndicatorBannerComponent implements OnInit {
  @Input() subtitle: string = "";
  @Input() teamName: string = "";
  @Input() team1: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
