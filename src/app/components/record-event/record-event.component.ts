import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-event',
  templateUrl: './record-event.component.html',
  styleUrls: ['./record-event.component.scss']
})

//Some ideas on how to implement:
//Each player tile is clickable and draggable, copies on drag 
//Drag defaults to original container if not placed in a container
//Each result button is a container as well
//If the container contains something, highlight the button and the player
//If the player tile or result is clicked, then highlight it

export class RecordEventComponent implements OnInit {
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

  constructor() { }

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
