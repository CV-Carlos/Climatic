import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAndSearchComponent } from './welcome-and-search.component';

describe('WelcomeAndSearchComponent', () => {
  let component: WelcomeAndSearchComponent;
  let fixture: ComponentFixture<WelcomeAndSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeAndSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
