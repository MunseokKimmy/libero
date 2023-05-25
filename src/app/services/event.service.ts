import { Injectable } from "@angular/core";
import { Results } from "../components/record-event/dto/button-text";
import { EventType } from "../components/record-event/dto/event-type";


@Injectable()
export class EventService {
  private resultToNextEvent: Map<Results, EventType> = new Map<Results, EventType>([
    [Results.Ace, EventType.Serve],
    [Results.Kill, EventType.Serve],
    [Results["Zero Serve"], EventType["Serve Receive"]],
    [Results.Pass, EventType["Second Hit"]],
    [Results["Free Ball"], EventType.Block],
    [Results["Zero Atk"], EventType.Block],
    [Results.Set, EventType["Third Hit"]],
    [Results.Block, EventType.Serve],
    [Results["Zero Block"], EventType["First Hit"]],
    [Results["Block Touch"], EventType["First Hit"]],
    [Results["No Block"], EventType["First Hit"]],
    [Results["Dead Ball"], EventType.Serve],
    [Results["Rec. Err"], EventType.Serve],
    [Results["Serve Err"], EventType.Serve],
    [Results["BH Err"], EventType.Serve],
    [Results["Atk Err"], EventType.Serve],
    [Results["Block Err"], EventType.Serve]
  ]);

  constructor() {
    
  }

  getNextEvent(result: Results): EventType {
    return this.resultToNextEvent.get(result);
  }
}