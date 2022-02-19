import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsDisplayComponent } from './home-products-display.component';

describe('HomeProductsDisplayComponent', () => {
  let component: HomeProductsDisplayComponent;
  let fixture: ComponentFixture<HomeProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
