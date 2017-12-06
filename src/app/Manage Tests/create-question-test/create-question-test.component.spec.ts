import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionTestComponent } from './create-question-test.component';

describe('CreateQuestionTestComponent', () => {
  let component: CreateQuestionTestComponent;
  let fixture: ComponentFixture<CreateQuestionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
