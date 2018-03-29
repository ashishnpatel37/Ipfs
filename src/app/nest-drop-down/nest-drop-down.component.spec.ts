import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestDropDownComponent } from './nest-drop-down.component';

describe('NestDropDownComponent', () => {
  let component: NestDropDownComponent;
  let fixture: ComponentFixture<NestDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
