import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevresultComponent } from './elevresult.component';

describe('ElevresultComponent', () => {
  let component: ElevresultComponent;
  let fixture: ComponentFixture<ElevresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
