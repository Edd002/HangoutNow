import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversarAmigosPage } from './conversar-amigos.page';

describe('ConversarAmigosPage', () => {
  let component: ConversarAmigosPage;
  let fixture: ComponentFixture<ConversarAmigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversarAmigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversarAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
