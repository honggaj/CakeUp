import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboDealsComponent } from './combo-deals.component';

describe('ComboDealsComponent', () => {
  let component: ComboDealsComponent;
  let fixture: ComponentFixture<ComboDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboDealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
