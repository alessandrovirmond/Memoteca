import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentosComponent } from './listar-pensamentos.component';
import { NgFor } from '@angular/common';
import { PensamentoService } from '../pensamento.service';
import { ExcluirPensamentoComponent } from '../excluir-pensamento/excluir-pensamento.component';

describe('ListarPensamentosComponent', () => {
  let component: ListarPensamentosComponent;
  let fixture: ComponentFixture<ListarPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPensamentosComponent, NgFor, PensamentoService, ExcluirPensamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
