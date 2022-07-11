import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecordComponent } from './userrecord.component';

describe('UserrecordComponent', () => {
  let component: UserrecordComponent;
  let fixture: ComponentFixture<UserrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
