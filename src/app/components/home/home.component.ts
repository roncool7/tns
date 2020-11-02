import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // Responsive for mobile
  public breakpoint:any;

  ngOnInit():void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }
}
