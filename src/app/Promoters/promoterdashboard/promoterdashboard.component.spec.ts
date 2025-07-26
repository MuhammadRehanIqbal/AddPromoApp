import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterdashboardComponent } from './promoterdashboard.component';

describe('PromoterdashboardComponent', () => {
  let component: PromoterdashboardComponent;
  let fixture: ComponentFixture<PromoterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoterdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
