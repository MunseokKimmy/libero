import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBenchStartingComponent } from './team-bench-starting.component';

describe('TeamBenchStartingComponent', () => {
  let component: TeamBenchStartingComponent;
  let fixture: ComponentFixture<TeamBenchStartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBenchStartingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamBenchStartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
