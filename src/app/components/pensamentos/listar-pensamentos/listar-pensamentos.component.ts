import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { NgFor, NgIf } from '@angular/common';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';




@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterModule, PensamentoComponent, NgFor, NgIf],
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})

export class ListarPensamentosComponent implements OnInit {
  
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService){ }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos;
    })
  }


}
