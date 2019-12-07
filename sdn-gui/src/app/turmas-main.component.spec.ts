import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasMainComponent } from './turmas-main.component';

describe('TurmasMainComponent', () => {
  let component: TurmasMainComponent;
  let fixture: ComponentFixture<TurmasMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmasMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
