import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarHome } from './navbar-home/navbar-home';
import { ApplyForm } from './apply-form/apply-form';
import { DisplayBikes } from './display-bikes/display-bikes';

const routes: Routes = [
  { path: 'apply', component: ApplyForm },
  { path: 'bikes', component: DisplayBikes}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
