import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMostFamousAttractionComponent } from './the-most-famous-attraction.component';

describe('TheMostFamousAttractionComponent', () => {
  let component: TheMostFamousAttractionComponent;
  let fixture: ComponentFixture<TheMostFamousAttractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheMostFamousAttractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMostFamousAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
