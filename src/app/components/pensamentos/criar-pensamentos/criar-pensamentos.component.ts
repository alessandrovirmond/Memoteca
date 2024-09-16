import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})

export class CriarPensamentosComponent  {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }


  criarPensamento(){
    alert("criado");
  }

  cancelar(){
    alert("criado");
  }

}
