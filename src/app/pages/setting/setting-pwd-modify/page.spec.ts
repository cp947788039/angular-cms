import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPwdModifyComponent } from './page.component';

describe('SettingPwdModifyComponent', () => {
  let component: SettingPwdModifyComponent;
  let fixture: ComponentFixture<SettingPwdModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPwdModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPwdModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
