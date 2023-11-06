import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectTileComponent } from './player-select-tile.component';

describe('PlayerSelectTileComponent', () => {
  let component: PlayerSelectTileComponent;
  let fixture: ComponentFixture<PlayerSelectTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSelectTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSelectTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
