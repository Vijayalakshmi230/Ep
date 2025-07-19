import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar-home',
  standalone: false,
  templateUrl: './navbar-home.html',
  styleUrl: './navbar-home.css'
})
export class NavbarHome {
  isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/';
      });
  }
}