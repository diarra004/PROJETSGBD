import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichepvComponent } from './affichepv.component';

describe('AffichepvComponent', () => {
  let component: AffichepvComponent;
  let fixture: ComponentFixture<AffichepvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichepvComponent]
    });
    fixture = TestBed.createComponent(AffichepvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
