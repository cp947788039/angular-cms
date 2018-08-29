import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleModifyComponent } from './page.component';

describe('RoleModifyComponent', () => {
  let component: RoleModifyComponent;
  let fixture: ComponentFixture<RoleModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
