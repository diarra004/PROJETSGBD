import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavebarMenuComponent } from './navebar-menu.component';

describe('NavebarMenuComponent', () => {
  let component: NavebarMenuComponent;
  let fixture: ComponentFixture<NavebarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavebarMenuComponent]
    });
    fixture = TestBed.createComponent(NavebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
