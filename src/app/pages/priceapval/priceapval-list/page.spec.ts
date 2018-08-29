import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceapvalListComponent } from './page.component';

describe('PriceapvalListComponent', () => {
  let component: PriceapvalListComponent;
  let fixture: ComponentFixture<PriceapvalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceapvalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceapvalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
