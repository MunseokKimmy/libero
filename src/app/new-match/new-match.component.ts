import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { Form, FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PlayerTeamLookupService } from '../services/player-team-lookup.service';

@Component({
   selector: 'app-new-match',
   templateUrl: './new-match.component.html',
   styleUrls: ['./new-match.component.scss']
})
export class NewMatchComponent implements OnInit {
   team1Name = new FormControl('');
   team2Name = new FormControl('');
   gameType = new FormControl('');
   matchOrSet = new FormControl('');
   titleDescription = new FormControl('');
   options: string[] = [];
   gtOptions: string[] = ['4s', '6s', '9on9'];
   msOptions: string[] = ['Single Match', 'Best of 3', 'Best of 5'];
   form: Form;
   filteredOptions: Observable<string[]>;
   constructor(public playerTeamLookupService: PlayerTeamLookupService) { 
      this.options = playerTeamLookupService.getTeams("");
   }

   ngOnInit(): void {
      this.filteredOptions = this.team1Name.valueChanges.pipe(
         startWith(''),
         map(value => this._filter(value || '')),
      );
   }

   private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
   }


}
