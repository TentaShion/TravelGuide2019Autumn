import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Page } from './day2.page';

describe('Day2Page', () => {
  let component: Day2Page;
  let fixture: ComponentFixture<Day2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
