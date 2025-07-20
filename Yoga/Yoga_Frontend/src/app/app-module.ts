import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { ApplyForm } from './apply-form/apply-form';
import { Display } from './display/display';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    ApplyForm,
    Display,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
