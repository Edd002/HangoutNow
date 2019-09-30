import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { TabEncontrosDisponiveisPage } from './tab-encontros-disponiveis.page';

describe('TabEncontrosDisponiveisPage', () => {
  let component: TabEncontrosDisponiveisPage;
  let fixture: ComponentFixture<TabEncontrosDisponiveisPage>;
  let tabEncontrosDisponiveisPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEncontrosDisponiveisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(TabEncontrosDisponiveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    tabEncontrosDisponiveisPage = fixture.nativeElement;
    const items = tabEncontrosDisponiveisPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
