import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevHomeComponent } from './elev-home.component';

describe('ElevHomeComponent', () => {
  let component: ElevHomeComponent;
  let fixture: ComponentFixture<ElevHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
