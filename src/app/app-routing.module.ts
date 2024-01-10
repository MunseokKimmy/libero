import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { OngoingMatchComponent } from './ongoing-match/ongoing-match.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { PositionSelectComponent } from './position-select/position-select.component';
import { GamePreviewComponent } from './game-preview/game-preview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }, 
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'new-match',
    component: NewMatchComponent
  },
  {
    path: 'player-select/:team',
    component: PlayerSelectComponent,
  },
  {
    path: 'position-select/:team',
    component: PositionSelectComponent,
  },
  {
    path: 'match-history',
    component: MatchHistoryComponent
  },
  {
    path: 'game-preview',
    component: GamePreviewComponent
  },
  {
    path: 'ongoing-game',
    component: OngoingMatchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
