import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { EncontrosDisponiveisPage } from './encontros-disponiveis.page';

describe('EncontrosDisponiveisPage', () => {
  let component: EncontrosDisponiveisPage;
  let fixture: ComponentFixture<EncontrosDisponiveisPage>;
  let encontrosDisponiveisPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncontrosDisponiveisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(EncontrosDisponiveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    encontrosDisponiveisPage = fixture.nativeElement;
    const items = encontrosDisponiveisPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
