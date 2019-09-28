import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrosMapaPage } from './encontros-mapa.page';

describe('EncontrosMapaPage', () => {
  let component: EncontrosMapaPage;
  let fixture: ComponentFixture<EncontrosMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncontrosMapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontrosMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
