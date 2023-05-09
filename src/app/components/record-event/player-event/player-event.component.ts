import { Component } from '@angular/core';
import { ColorType } from '../../buttons/icon-buttons/button-color';
import { Results } from '../dto/button-text';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.scss']
})
export class PlayerEventComponent {
  results = Results;
  colorType = ColorType;
  public clicked = {};
  players = [
      {
          name: "Munseok K.",
          position: "OH",
          number: "#44"
      },
      {
          name: "Jessie K.",
          position: "LIB",
          number: "#45"
      },
      {
          name: "Aldair A.",
          position: "OP",
          number: "#08"
      },
      {
          name: "Zabdi H.",
          position: "MB",
          number: "#12"
      },
      {
          name: "Alma S.",
          position: "SET",
          number: "#14"
      },
      {
          name: "Jesus P.",
          position: "OH",
          number: "#00"
      },
  ]
  ngOnInit(): void {
    this.players.forEach((element, index) => {
        this.clicked[element.name] = false;
    });
  }

  onPlayerClick(key: string) {
    console.log("huh")
    this.clicked[key] = true;
    console.log(this.clicked);
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }
}
