import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-select-tile',
  templateUrl: './player-select-tile.component.html',
  styleUrls: ['./player-select-tile.component.scss']
})
export class PlayerSelectTileComponent implements OnChanges {
  @Input() name: string = "";
  @Input() username: string = "";
  @Input() profilePictureId: string; //idk how to implement this yet.
  @Input() color: string = "#F6F6F6";
  @Input() selected: boolean = false;
  @Input() expanded: boolean = false;

  expandDelay: boolean = this.expanded;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['expanded']) {
      if (changes['expanded'].currentValue) {
        setTimeout(() => {
          this.expandDelay = changes['expanded'].currentValue;
        }, 500);
      } else {
        this.expandDelay = changes['expanded'].currentValue;
      }
    }

  }

  getInitials() {
    const fullName = this.name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
}
