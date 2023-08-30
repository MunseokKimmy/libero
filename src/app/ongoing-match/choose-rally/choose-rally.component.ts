import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game, GameRally, TeamScored } from '../record-event/dto/game.dto';
import { Observable } from 'rxjs/internal/Observable';
import { Results } from '../record-event/dto/button-text';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface RalliesData {
  rallies: Map<number, GameRally>;
  rallyArray: GameRally[];
}
@Component({
  selector: 'app-choose-rally',
  templateUrl: './choose-rally.component.html',
  styleUrls: ['./choose-rally.component.scss']
})

export class ChooseRallyComponent {
  resultEnum = Results;
  teamScoredEnum = TeamScored;
  rallies: Map<number, GameRally>;
  rallyArray: GameRally[] = [];
  constructor(public dialogRef: MatDialogRef<ChooseRallyComponent>, @Inject(MAT_DIALOG_DATA) public data: RalliesData) {
    console.log(data);
    this.rallies = data.rallies;
    this.rallyArray = data.rallyArray;
  }


  selectRally(rallyId: number) {
    this.dialogRef.close(rallyId);
  }
}
