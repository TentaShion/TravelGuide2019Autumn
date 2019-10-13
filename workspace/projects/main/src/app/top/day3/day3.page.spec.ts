import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Page } from './day3.page';

describe('Day3Page', () => {
  let component: Day3Page;
  let fixture: ComponentFixture<Day3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
