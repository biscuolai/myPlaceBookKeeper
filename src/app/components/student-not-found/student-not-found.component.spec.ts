import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotFoundComponent } from './student-not-found.component';

describe('StudentNotFoundComponent', () => {
  let component: StudentNotFoundComponent;
  let fixture: ComponentFixture<StudentNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
