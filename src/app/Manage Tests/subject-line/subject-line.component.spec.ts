import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLineComponent } from './subject-line.component';

describe('SubjectLineComponent', () => {
  let component: SubjectLineComponent;
  let fixture: ComponentFixture<SubjectLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
