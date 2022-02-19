import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvancedSearchComponent } from './home-advanced-search.component';

describe('HomeAdvancedSearchComponent', () => {
  let component: HomeAdvancedSearchComponent;
  let fixture: ComponentFixture<HomeAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdvancedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
