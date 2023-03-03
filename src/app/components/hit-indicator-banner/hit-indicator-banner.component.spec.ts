import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitIndicatorBannerComponent } from './hit-indicator-banner.component';

describe('HitIndicatorBannerComponent', () => {
  let component: HitIndicatorBannerComponent;
  let fixture: ComponentFixture<HitIndicatorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitIndicatorBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitIndicatorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
