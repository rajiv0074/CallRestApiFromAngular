import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRestApiComponent } from './call-rest-api.component';

describe('CallRestApiComponent', () => {
  let component: CallRestApiComponent;
  let fixture: ComponentFixture<CallRestApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRestApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
