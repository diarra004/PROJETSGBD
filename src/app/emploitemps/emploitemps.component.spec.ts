import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploitempsComponent } from './emploitemps.component';

describe('EmploitempsComponent', () => {
  let component: EmploitempsComponent;
  let fixture: ComponentFixture<EmploitempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploitempsComponent]
    });
    fixture = TestBed.createComponent(EmploitempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
