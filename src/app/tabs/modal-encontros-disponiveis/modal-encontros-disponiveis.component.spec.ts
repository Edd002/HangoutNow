import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncontrosDisponiveisComponent } from './modal-encontros-disponiveis.component';

describe('ModalEncontrosDisponiveisComponent', () => {
  let component: ModalEncontrosDisponiveisComponent;
  let fixture: ComponentFixture<ModalEncontrosDisponiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEncontrosDisponiveisComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEncontrosDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
