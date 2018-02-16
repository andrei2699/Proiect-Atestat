import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTestComponent } from './preview-test.component';

describe('PreviewTestComponent', () => {
  let component: PreviewTestComponent;
  let fixture: ComponentFixture<PreviewTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
