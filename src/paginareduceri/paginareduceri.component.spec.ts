import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginareduceriComponent } from './paginareduceri.component';

describe('PaginareduceriComponent', () => {
  let component: PaginareduceriComponent;
  let fixture: ComponentFixture<PaginareduceriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginareduceriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginareduceriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
