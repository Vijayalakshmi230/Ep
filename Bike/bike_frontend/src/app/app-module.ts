import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { NavbarHome } from './navbar-home/navbar-home';
import { ApplyForm } from './apply-form/apply-form';
import { DisplayBikes } from './display-bikes/display-bikes';
import { Footer } from './footer/footer';


@NgModule({
  declarations: [
    App,
    NavbarHome,
    ApplyForm,
    DisplayBikes,
    Footer,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
