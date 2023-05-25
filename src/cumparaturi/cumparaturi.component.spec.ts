import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumparaturiComponent } from './cumparaturi.component';

describe('CumparaturiComponent', () => {
  let component: CumparaturiComponent;
  let fixture: ComponentFixture<CumparaturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumparaturiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumparaturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
