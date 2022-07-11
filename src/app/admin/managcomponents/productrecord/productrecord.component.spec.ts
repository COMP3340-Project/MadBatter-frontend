import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrecordComponent } from './productrecord.component';

describe('ProductrecordComponent', () => {
  let component: ProductrecordComponent;
  let fixture: ComponentFixture<ProductrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
