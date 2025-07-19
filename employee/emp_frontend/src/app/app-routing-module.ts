import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { ApplyForm } from './apply-form/apply-form';
import { DisplayEmp } from './display-emp/display-emp';

const routes: Routes = [
  {path:'apply-form', component:ApplyForm},
  {path:'display-emp', component:DisplayEmp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
