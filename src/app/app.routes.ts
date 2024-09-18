import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'listarPensamentos',
        pathMatch: 'full'
    },
    {
        path : 'criarPensamentos',
        component : CriarPensamentosComponent
    },
    {
        path : 'listarPensamentos',
        component : ListarPensamentosComponent
    },
    {
        path : 'pensamentos/excluirPensamento/:id',
        component : ExcluirPensamentoComponent
    },
    {
        path : 'pensamentos/editarPensamento/:id',
        component : EditarPensamentoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
