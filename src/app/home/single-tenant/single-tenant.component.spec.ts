import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTenantComponent } from './single-tenant.component';

describe('SingleTenantComponent', () => {
  let component: SingleTenantComponent;
  let fixture: ComponentFixture<SingleTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
