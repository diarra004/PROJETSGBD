import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEvaluationComponent } from './fiche-evaluation.component';

describe('FicheEvaluationComponent', () => {
  let component: FicheEvaluationComponent;
  let fixture: ComponentFixture<FicheEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheEvaluationComponent]
    });
    fixture = TestBed.createComponent(FicheEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
