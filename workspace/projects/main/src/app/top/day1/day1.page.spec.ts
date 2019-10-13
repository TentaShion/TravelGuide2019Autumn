import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1Page } from './day1.page';

describe('Day1Page', () => {
  let component: Day1Page;
  let fixture: ComponentFixture<Day1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
