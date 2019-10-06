import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncontrosConfirmadosComponent } from './modal-encontros-confirmados.component';

describe('ModalEncontrosConfirmadosComponent', () => {
  let component: ModalEncontrosConfirmadosComponent;
  let fixture: ComponentFixture<ModalEncontrosConfirmadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEncontrosConfirmadosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEncontrosConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
