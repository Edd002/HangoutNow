import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEncontrosConfirmadosPage } from './tab-encontros-confirmados.page';

describe('TabEncontrosConfirmadosPage', () => {
  let component: TabEncontrosConfirmadosPage;
  let fixture: ComponentFixture<TabEncontrosConfirmadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEncontrosConfirmadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEncontrosConfirmadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
