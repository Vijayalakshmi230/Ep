import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar{
  isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/';
      });
  }
}