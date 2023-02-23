import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitplantComponent } from './fruitplant.component';

describe('FruitplantComponent', () => {
  let component: FruitplantComponent;
  let fixture: ComponentFixture<FruitplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitplantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
