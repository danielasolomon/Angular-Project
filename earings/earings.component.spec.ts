import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringsComponent } from './earings.component';

describe('EaringsComponent', () => {
  let component: EaringsComponent;
  let fixture: ComponentFixture<EaringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EaringsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EaringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
