import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityAddComponent } from './page.component';

describe('AuthorityAddComponent', () => {
  let component: AuthorityAddComponent;
  let fixture: ComponentFixture<AuthorityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
