import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimicComponent } from './nimic.component';

describe('NimicComponent', () => {
  let component: NimicComponent;
  let fixture: ComponentFixture<NimicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NimicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
