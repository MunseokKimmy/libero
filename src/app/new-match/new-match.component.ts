import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state.service';
import { Form, FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

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
   options: string[] = ['Lakers', 'Magic', 'Heat'];
   form: Form;
   filteredOptions: Observable<string[]>;
   constructor() { }

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
