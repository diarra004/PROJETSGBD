import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnseignantComponent } from './menu-enseignant.component';

describe('MenuEnseignantComponent', () => {
  let component: MenuEnseignantComponent;
  let fixture: ComponentFixture<MenuEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuEnseignantComponent]
    });
    fixture = TestBed.createComponent(MenuEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
