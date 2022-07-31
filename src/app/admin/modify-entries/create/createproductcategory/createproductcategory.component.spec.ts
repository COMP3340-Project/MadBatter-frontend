import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductcategoryComponent } from './createproductcategory.component';

describe('CreateproductcategoryComponent', () => {
  let component: CreateproductcategoryComponent;
  let fixture: ComponentFixture<CreateproductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproductcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
