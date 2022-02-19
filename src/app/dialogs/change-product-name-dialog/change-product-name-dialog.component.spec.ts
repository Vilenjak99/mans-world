import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProductNameDialogComponent } from './change-product-name-dialog.component';

describe('ChangeProductNameDialogComponent', () => {
  let component: ChangeProductNameDialogComponent;
  let fixture: ComponentFixture<ChangeProductNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProductNameDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProductNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
