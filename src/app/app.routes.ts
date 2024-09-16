import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
