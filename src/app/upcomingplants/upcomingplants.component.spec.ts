import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingplantsComponent } from './upcomingplants.component';

describe('UpcomingplantsComponent', () => {
  let component: UpcomingplantsComponent;
  let fixture: ComponentFixture<UpcomingplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingplantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
