import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantlistComponent } from './plantlist.component';

describe('PlantlistComponent', () => {
  let component: PlantlistComponent;
  let fixture: ComponentFixture<PlantlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
