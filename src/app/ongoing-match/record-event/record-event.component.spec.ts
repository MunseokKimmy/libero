import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEventComponent } from './record-event.component';

describe('RecordEventComponent', () => {
  let component: RecordEventComponent;
  let fixture: ComponentFixture<RecordEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
