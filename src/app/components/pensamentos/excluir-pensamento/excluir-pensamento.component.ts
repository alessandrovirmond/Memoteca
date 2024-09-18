import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService, 
    private router: Router, 
    private route: ActivatedRoute){ }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

    excluirPensamento() {
      if(this.pensamento.id){
        this.service.excluir(this.pensamento.id).subscribe(() => {
          this.router.navigate(['/listarPensamentos'])
        })
      }
    }

    cancelar(){
      this.router.navigate(['/listarPensamentos'])
    }

}
