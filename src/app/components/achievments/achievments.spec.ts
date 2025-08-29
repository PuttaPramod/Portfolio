import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achievments } from './achievments';

describe('Achievments', () => {
  let component: Achievments;
  let fixture: ComponentFixture<Achievments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Achievments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Achievments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
