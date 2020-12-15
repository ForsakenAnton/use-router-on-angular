import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAttractionsComponent } from './other-attractions.component';

describe('OtherAttractionsComponent', () => {
  let component: OtherAttractionsComponent;
  let fixture: ComponentFixture<OtherAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherAttractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
