import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteprofComponent } from './noteprof.component';

describe('NoteprofComponent', () => {
  let component: NoteprofComponent;
  let fixture: ComponentFixture<NoteprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
