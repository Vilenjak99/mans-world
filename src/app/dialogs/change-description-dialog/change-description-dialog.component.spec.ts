import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDescriptionDialogComponent } from './change-description-dialog.component';

describe('ChangeDescriptionDialogComponent', () => {
  let component: ChangeDescriptionDialogComponent;
  let fixture: ComponentFixture<ChangeDescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDescriptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
