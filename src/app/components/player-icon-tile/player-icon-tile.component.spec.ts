import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerIconTileComponent } from './player-icon-tile.component';

describe('PlayerIconTileComponent', () => {
  let component: PlayerIconTileComponent;
  let fixture: ComponentFixture<PlayerIconTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerIconTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerIconTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
