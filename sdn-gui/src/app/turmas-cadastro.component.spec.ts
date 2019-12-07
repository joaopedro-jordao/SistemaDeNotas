import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasCadastroComponent } from './turmas-cadastro.component';

describe('TurmasCadastroComponent', () => {
  let component: TurmasCadastroComponent;
  let fixture: ComponentFixture<TurmasCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmasCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
