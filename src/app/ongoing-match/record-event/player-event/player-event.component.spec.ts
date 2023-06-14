import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEventComponent } from './player-event.component';

describe('PlayerEventComponent', () => {
  let component: PlayerEventComponent;
  let fixture: ComponentFixture<PlayerEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
