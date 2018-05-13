import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShootingComponent } from './dynamic-shooting.component';

describe('DynamicShootingComponent', () => {
  let component: DynamicShootingComponent;
  let fixture: ComponentFixture<DynamicShootingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicShootingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicShootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
