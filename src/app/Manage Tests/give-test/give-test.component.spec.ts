import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveTestComponent } from './give-test.component';

describe('GiveTestComponent', () => {
  let component: GiveTestComponent;
  let fixture: ComponentFixture<GiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiveTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
