import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIconButtonComponent } from './sub-icon-button.component';

describe('SubIconButtonComponent', () => {
  let component: SubIconButtonComponent;
  let fixture: ComponentFixture<SubIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
