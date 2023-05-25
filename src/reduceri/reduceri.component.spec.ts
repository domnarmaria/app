import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceriComponent } from './reduceri.component';

describe('ReduceriComponent', () => {
  let component: ReduceriComponent;
  let fixture: ComponentFixture<ReduceriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduceriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
