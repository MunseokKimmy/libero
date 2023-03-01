import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.scss']
})
export class NewMatchComponent implements OnInit {

  constructor(
    private splashScreenStateService: SplashScreenStateService
 ) { }
 
 ngOnInit(): void {
    setTimeout(() => {
       this.splashScreenStateService.stop();
    }, 500);
 }


}
