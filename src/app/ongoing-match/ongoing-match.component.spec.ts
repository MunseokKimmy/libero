import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingMatchComponent } from './ongoing-match.component';

describe('OngoingMatchComponent', () => {
  let component: OngoingMatchComponent;
  let fixture: ComponentFixture<OngoingMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
