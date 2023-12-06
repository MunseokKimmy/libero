import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerShortCheckTileComponent } from './player-short-check-tile.component';

describe('PlayerShortCheckTileComponent', () => {
  let component: PlayerShortCheckTileComponent;
  let fixture: ComponentFixture<PlayerShortCheckTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerShortCheckTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerShortCheckTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
