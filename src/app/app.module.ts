import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { OngoingMatchComponent } from './ongoing-match/ongoing-match.component';
import { ScoreboardComponent } from './ongoing-match/scoreboard/scoreboard.component';
import { HitIndicatorBannerComponent } from './components/hit-indicator-banner/hit-indicator-banner.component';
import { CarouselModule } from 'primeng/carousel';
import { IconButtonsComponent } from './components/buttons/icon-buttons/icon-buttons.component';
import { SubIconButtonComponent } from './components/buttons/sub-icon-button/sub-icon-button.component';
import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from './material.module';
import { IconModule } from './icons.module';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './services/event.service';
import { GameService } from './services/game.service';
import { DatePipe } from '@angular/common';
import { ChooseRallyComponent } from './ongoing-match/choose-rally/choose-rally.component';
import { PlayerEventComponent } from './ongoing-match/record-event/player-event/player-event.component';
import { RecordEventComponent } from './ongoing-match/record-event/record-event.component';
import { CurrentRallyComponent } from './ongoing-match/current-rally/current-rally.component';
import { MatDividerModule } from '@angular/material/divider';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MenuButtonsComponent } from './components/buttons/menu-buttons/menu-buttons.component';
import { SquareMenuButtonComponent } from './components/buttons/square-menu-button/square-menu-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { PlayerTeamLookupService } from './services/player-team-lookup.service';
import { ProgressButtonsComponent } from './components/buttons/progress-buttons/progress-buttons.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { PlayerSelectTileComponent } from './player-select/player-select-tile/player-select-tile.component';
import {MatCardModule} from '@angular/material/card';
import { TruncatePipe } from './pipes/truncate-pipe';
import { PositionSelectComponent } from './position-select/position-select.component';
import { PlayerShortCheckTileComponent } from './position-select/player-short-check-tile/player-short-check-tile.component';
import { PlayerTileNoDelayComponent } from './position-select/player-tile-no-delay/player-tile-no-delay.component';
import { GamePreviewComponent } from './game-preview/game-preview.component';
import { FirstInitialPipe } from './pipes/first-initial-pipe';
import { TeamBenchStartingComponent } from './game-preview/team-bench-starting/team-bench-starting.component';
import { InitialsPipe } from './pipes/initials-pipe';
import { PlayerIconTileComponent } from './components/player-icon-tile/player-icon-tile.component';

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
    TruncatePipe,
    FirstInitialPipe,
    InitialsPipe,
    HitIndicatorBannerComponent,
    RecordEventComponent,
    IconButtonsComponent,
    SubIconButtonComponent,
    PlayerEventComponent,
    ChooseRallyComponent,
    CurrentRallyComponent,
    TopBarComponent,
    MenuButtonsComponent,
    SquareMenuButtonComponent,
    ProgressButtonsComponent,
    PlayerSelectComponent,
    PlayerSelectTileComponent,
    PositionSelectComponent,
    PlayerShortCheckTileComponent,
    PlayerTileNoDelayComponent,
    GamePreviewComponent,
    TeamBenchStartingComponent,
    PlayerIconTileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    DragulaModule.forRoot(),
    IconModule,
    HttpClientModule,
    MatAutocompleteModule,
    MaterialModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    OverlayModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    SplashScreenStateService,
    EventService,
    GameService,
    PlayerTeamLookupService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
