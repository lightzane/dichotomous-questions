import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DichotomousQuestionsComponent } from './dichotomous-questions.component';

describe('DichotomousQuestionsComponent', () => {
  let component: DichotomousQuestionsComponent;
  let fixture: ComponentFixture<DichotomousQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DichotomousQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DichotomousQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
