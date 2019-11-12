import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautoCompleteComponent } from './matauto-complete.component';

describe('MatautoCompleteComponent', () => {
  let component: MatautoCompleteComponent;
  let fixture: ComponentFixture<MatautoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatautoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
