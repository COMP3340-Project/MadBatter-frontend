import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductcategoryComponent } from './deleteproductcategory.component';

describe('DeleteproductcategoryComponent', () => {
  let component: DeleteproductcategoryComponent;
  let fixture: ComponentFixture<DeleteproductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteproductcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
