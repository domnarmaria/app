import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginafataComponent } from './paginafata.component';

describe('PaginafataComponent', () => {
  let component: PaginafataComponent;
  let fixture: ComponentFixture<PaginafataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginafataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginafataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
