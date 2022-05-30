import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/app/components/admin/pages/cadastro/cadastro.component';
import { UnidadesComponent } from 'src/app/components/admin/pages/unidades/unidades.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'unidades',
    component: UnidadesComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
