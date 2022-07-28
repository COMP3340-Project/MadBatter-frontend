import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryrecordComponent } from './categoryrecord.component';

describe('CategoryrecordComponent', () => {
  let component: CategoryrecordComponent;
  let fixture: ComponentFixture<CategoryrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
