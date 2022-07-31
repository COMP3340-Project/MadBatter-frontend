import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagpageComponent } from './managpage.component';

describe('ManagpageComponent', () => {
  let component: ManagpageComponent;
  let fixture: ComponentFixture<ManagpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
