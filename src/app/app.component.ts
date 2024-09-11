import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}
