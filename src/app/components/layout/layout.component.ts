import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public isShow: boolean;

  // Top button get value when scroll gtag('config', 'G-0XVTPX1GRK');
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    if (e.target['scrollingElement'].scrollTop > 100) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor(private router: Router,private titleService: Title) {}

  // Scroll to top when route change
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'G-0XVTPX1GRK', {
          'page_title' : this.titleService.getTitle(),
          'page_path': event.urlAfterRedirects
        });
      }
    });

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
