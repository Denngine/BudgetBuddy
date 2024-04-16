import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontodarstellungComponent } from './kontodarstellung.component';

describe('KontodarstellungComponent', () => {
  let component: KontodarstellungComponent;
  let fixture: ComponentFixture<KontodarstellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KontodarstellungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontodarstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
