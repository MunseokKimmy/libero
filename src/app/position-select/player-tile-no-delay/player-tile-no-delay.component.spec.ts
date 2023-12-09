import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTileNoDelayComponent } from './player-tile-no-delay.component';

describe('PlayerTileNoDelayComponent', () => {
  let component: PlayerTileNoDelayComponent;
  let fixture: ComponentFixture<PlayerTileNoDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTileNoDelayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTileNoDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
