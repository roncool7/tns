import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public isShow: boolean;

  // Top button get value when scroll
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    if (e.target['scrollingElement'].scrollTop > 100) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor(private router: Router) {}

  // Scroll to top when route change
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  // top button
  public topFunction() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
