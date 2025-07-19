import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { NavBar } from './nav-bar/nav-bar';
import { DisplayEmp } from './display-emp/display-emp';
import { ApplyForm } from './apply-form/apply-form';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    NavBar,
    DisplayEmp,
    ApplyForm,
    Footer
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
