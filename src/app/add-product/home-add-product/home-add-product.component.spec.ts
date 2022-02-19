import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddProductComponent } from './home-add-product.component';

describe('HomeAddProductComponent', () => {
  let component: HomeAddProductComponent;
  let fixture: ComponentFixture<HomeAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
