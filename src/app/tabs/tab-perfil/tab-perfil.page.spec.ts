import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPerfilPage } from './tab-perfil.page';

describe('TabPerfilPage', () => {
  let component: TabPerfilPage;
  let fixture: ComponentFixture<TabPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
