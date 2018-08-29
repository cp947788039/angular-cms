import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityModifyComponent } from './page.component';

describe('AuthorityModifyComponent', () => {
  let component: AuthorityModifyComponent;
  let fixture: ComponentFixture<AuthorityModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
