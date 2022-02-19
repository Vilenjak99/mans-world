import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRightComponent } from './navigation-right.component';

describe('NavigationRightComponent', () => {
  let component: NavigationRightComponent;
  let fixture: ComponentFixture<NavigationRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
