import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShedulesComponent } from './manage-shedules.component';

describe('ManageShedulesComponent', () => {
  let component: ManageShedulesComponent;
  let fixture: ComponentFixture<ManageShedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageShedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
