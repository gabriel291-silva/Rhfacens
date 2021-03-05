import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bdcurriculocomponent } from './bdcurriculos/bdcurri.component';
import { Logincomponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:Logincomponent},
  {path:'bdcurriculo', component:Bdcurriculocomponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
