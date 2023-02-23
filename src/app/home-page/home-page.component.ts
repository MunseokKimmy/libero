import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private splashScreenStateService: SplashScreenStateService
 ) { }
 
 ngOnInit(): void {
    setTimeout(() => {
       this.splashScreenStateService.stop();
    }, 5000);
 }

}
