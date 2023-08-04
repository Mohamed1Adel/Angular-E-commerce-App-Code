import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeteilsComponent } from './product-deteils.component';

describe('ProductDeteilsComponent', () => {
  let component: ProductDeteilsComponent;
  let fixture: ComponentFixture<ProductDeteilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeteilsComponent]
    });
    fixture = TestBed.createComponent(ProductDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
