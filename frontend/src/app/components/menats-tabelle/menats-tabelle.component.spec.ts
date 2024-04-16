import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenatsTabelleComponent } from './menats-tabelle.component';

describe('MenatsTabelleComponent', () => {
  let component: MenatsTabelleComponent;
  let fixture: ComponentFixture<MenatsTabelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenatsTabelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenatsTabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
