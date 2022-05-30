import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessagesDialog } from './success-messages.component';

describe('SuccessMessagesComponent', () => {
  let component: SuccessMessagesDialog;
  let fixture: ComponentFixture<SuccessMessagesDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessMessagesDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMessagesDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
