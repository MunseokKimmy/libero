import { Injectable } from "@angular/core";
import { Results } from "../components/record-event/dto/button-text";
import { EventType } from "../components/record-event/dto/event-type";


@Injectable()
export class EventService {
  private resultToNextEvent: Map<Results, EventType> = new Map<Results, EventType>([
    [Results.Ace, EventType["End of Rally"]],
    [Results.Kill, EventType["End of Rally"]],
    [Results["Zero Serve"], EventType["Serve Receive"]],
    [Results.Pass, EventType["Second Hit"]],
    [Results["Free Ball"], EventType.Block],
    [Results["Zero Atk"], EventType.Block],
    [Results.Set, EventType["Third Hit"]],
    [Results.Block, EventType["End of Rally"]],
    [Results["Zero Block"], EventType["First Hit"]],
    [Results["Block Touch"], EventType["First Hit"]],
    [Results["No Block"], EventType["First Hit"]],
    [Results["Dead Ball"], EventType["End of Rally"]],
    [Results["Rec. Err"], EventType["End of Rally"]],
    [Results["Serve Err"], EventType["End of Rally"]],
    [Results["BH Err"], EventType["End of Rally"]],
    [Results["Atk Err"], EventType["End of Rally"]],
    [Results["Block Err"], EventType["End of Rally"]]
  ]);

  constructor() {
    
  }

  getNextEvent(result: Results): EventType {
    return this.resultToNextEvent.get(result);
  }
}