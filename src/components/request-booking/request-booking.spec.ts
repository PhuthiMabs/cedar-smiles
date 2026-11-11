import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestBooking } from './request-booking';

describe('RequestBooking', () => {
  let component: RequestBooking;
  let fixture: ComponentFixture<RequestBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestBooking],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
