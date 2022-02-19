import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProductsDisplayComponent } from './grid-products-display.component';

describe('GridProductsDisplayComponent', () => {
  let component: GridProductsDisplayComponent;
  let fixture: ComponentFixture<GridProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridProductsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
