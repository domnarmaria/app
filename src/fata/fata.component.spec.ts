import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FataComponent } from './fata.component';

describe('FataComponent', () => {
  let component: FataComponent;
  let fixture: ComponentFixture<FataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
