import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEncontrosMapaPage } from './tab-encontros-mapa.page';

describe('TabEncontrosMapaPage', () => {
  let component: TabEncontrosMapaPage;
  let fixture: ComponentFixture<TabEncontrosMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEncontrosMapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEncontrosMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
