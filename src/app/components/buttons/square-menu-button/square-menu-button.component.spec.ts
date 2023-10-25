import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareMenuButtonComponent } from './square-menu-button.component';

describe('SquareMenuButtonComponent', () => {
  let component: SquareMenuButtonComponent;
  let fixture: ComponentFixture<SquareMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
