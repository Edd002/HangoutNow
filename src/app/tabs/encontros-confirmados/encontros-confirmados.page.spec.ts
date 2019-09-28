import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrosConfirmadosPage } from './encontros-confirmados.page';

describe('EncontrosConfirmadosPage', () => {
  let component: EncontrosConfirmadosPage;
  let fixture: ComponentFixture<EncontrosConfirmadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncontrosConfirmadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontrosConfirmadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
