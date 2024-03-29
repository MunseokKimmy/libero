import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NewMatchComponent } from './new-match/new-match.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { OngoingMatchComponent } from './ongoing-match/ongoing-match.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HitIndicatorBannerComponent } from './components/hit-indicator-banner/hit-indicator-banner.component';
import { RecordEventComponent } from './components/record-event/record-event.component';
import { CarouselModule } from 'primeng/carousel';
import { IconButtonsComponent } from './components/buttons/icon-buttons/icon-buttons.component';
import { SubIconButtonComponent } from './components/buttons/sub-icon-button/sub-icon-button.component';
import { DragulaModule } from 'ng2-dragula';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoadingPageComponent,
    SplashScreenComponent,
    NewMatchComponent,
    MatchHistoryComponent,
    OngoingMatchComponent,
    ScoreboardComponent,
    HitIndicatorBannerComponent,
    RecordEventComponent,
    IconButtonsComponent,
    SubIconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    DragulaModule.forRoot(),
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NoopAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    SplashScreenStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
