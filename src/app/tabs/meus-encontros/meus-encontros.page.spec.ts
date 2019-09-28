import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEncontrosPage } from './meus-encontros.page';

describe('MeusEncontrosPage', () => {
  let component: MeusEncontrosPage;
  let fixture: ComponentFixture<MeusEncontrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusEncontrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusEncontrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
