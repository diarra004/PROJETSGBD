import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadickeComponent } from './madicke.component';

describe('MadickeComponent', () => {
  let component: MadickeComponent;
  let fixture: ComponentFixture<MadickeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadickeComponent]
    });
    fixture = TestBed.createComponent(MadickeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
