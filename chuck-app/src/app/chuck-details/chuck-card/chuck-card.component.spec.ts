import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckCardComponent } from './chuck-card.component';

describe('ChuckCardComponent', () => {
  let component: ChuckCardComponent;
  let fixture: ComponentFixture<ChuckCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuckCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
