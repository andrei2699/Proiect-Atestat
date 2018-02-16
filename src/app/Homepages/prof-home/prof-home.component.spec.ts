import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfHomeComponent } from './prof-home.component';

describe('ProfHomeComponent', () => {
  let component: ProfHomeComponent;
  let fixture: ComponentFixture<ProfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
