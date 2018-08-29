import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnMangComponent } from './page.component';

describe('ColumnMangComponent', () => {
  let component: ColumnMangComponent;
  let fixture: ComponentFixture<ColumnMangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnMangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
