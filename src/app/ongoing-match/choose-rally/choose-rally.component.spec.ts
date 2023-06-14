import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRallyComponent } from './choose-rally.component';

describe('ChooseRallyComponent', () => {
  let component: ChooseRallyComponent;
  let fixture: ComponentFixture<ChooseRallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseRallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
