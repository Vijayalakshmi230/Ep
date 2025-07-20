import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ApplyForm } from './apply-form/apply-form';
import { Display } from './display/display';

const routes: Routes = [
  {path:"",component:Home},
  {path:"apply",component:ApplyForm},
  {path:"display",component:Display}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
