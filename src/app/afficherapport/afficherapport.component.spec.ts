import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherapportComponent } from './afficherapport.component';

describe('AfficherapportComponent', () => {
  let component: AfficherapportComponent;
  let fixture: ComponentFixture<AfficherapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherapportComponent]
    });
    fixture = TestBed.createComponent(AfficherapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
