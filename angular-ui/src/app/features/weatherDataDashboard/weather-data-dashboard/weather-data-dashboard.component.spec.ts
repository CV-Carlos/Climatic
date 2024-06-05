import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataDashboardComponent } from './weather-data-dashboard.component';

describe('WeatherDataDashboardComponent', () => {
  let component: WeatherDataDashboardComponent;
  let fixture: ComponentFixture<WeatherDataDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDataDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherDataDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
