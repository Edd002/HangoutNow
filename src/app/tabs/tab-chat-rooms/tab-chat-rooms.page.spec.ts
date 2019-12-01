import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChatRoomsPage } from './tab-chat-rooms.page';

describe('TabChatRoomsPage', () => {
  let component: TabChatRoomsPage;
  let fixture: ComponentFixture<TabChatRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChatRoomsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChatRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
