import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-event',
  templateUrl: './record-event.component.html',
  styleUrls: ['./record-event.component.scss']
})
export class RecordEventComponent implements OnInit {

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
  }
}
