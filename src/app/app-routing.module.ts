import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { OngoingMatchComponent } from './ongoing-match/ongoing-match.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ongoing-game',
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
    path: 'match-history',
    component: MatchHistoryComponent
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
