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


  constructor() { }

  history: string[] = ['Serve'];
  // , 'Serve Receive', 'Second Hit', 'Third Hit', 'Dig'];
  ngOnInit(): void {
    
  }

  reset() {
    
  }


}
