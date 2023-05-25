import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaparComponent } from './paginapar.component';

describe('PaginaparComponent', () => {
  let component: PaginaparComponent;
  let fixture: ComponentFixture<PaginaparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaparComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
