import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRallyComponent } from './current-rally.component';

describe('CurrentRallyComponent', () => {
  let component: CurrentRallyComponent;
  let fixture: ComponentFixture<CurrentRallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
