import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserdashboardComponent } from './advertiserdashboard.component';

describe('AdvertiserdashboardComponent', () => {
  let component: AdvertiserdashboardComponent;
  let fixture: ComponentFixture<AdvertiserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertiserdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertiserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
