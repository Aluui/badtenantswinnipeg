import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyTextComponent } from './readonly-text.component';

describe('ReadonlyTextComponent', () => {
  let component: ReadonlyTextComponent;
  let fixture: ComponentFixture<ReadonlyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
