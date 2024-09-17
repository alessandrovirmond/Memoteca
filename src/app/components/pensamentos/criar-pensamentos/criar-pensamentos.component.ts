import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pensamento } from '../pensamento';
import { ListarPensamentosComponent } from '../listar-pensamentos/listar-pensamentos.component';
import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule, RouterModule, ListarPensamentosComponent],
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})

export class CriarPensamentosComponent  {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router){ }


  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
