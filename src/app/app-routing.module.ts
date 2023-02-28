import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { NewMatchComponent } from './new-match/new-match.component';

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
    path: 'match-history',
    component: MatchHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
