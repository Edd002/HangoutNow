import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConversarAmigosPage } from './tab-conversar-amigos.page';

describe('TabConversarAmigosPage', () => {
  let component: TabConversarAmigosPage;
  let fixture: ComponentFixture<TabConversarAmigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabConversarAmigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConversarAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
