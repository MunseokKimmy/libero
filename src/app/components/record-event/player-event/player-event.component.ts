import { Component } from '@angular/core';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.scss']
})
export class PlayerEventComponent {
  public clicked = {};
  players = [
      {
          name: "Munseok K.",
          position: "OH",
      },
      {
          name: "Jessie K.",
          position: "LIB",
      },
      {
          name: "Aldair A.",
          position: "OPP",
      },
      {
          name: "Zabdi H.",
          position: "MB",
      },
      {
          name: "Alma S.",
          position: "SET",
      },
      {
          name: "Jesus P.",
          position: "OH",
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
