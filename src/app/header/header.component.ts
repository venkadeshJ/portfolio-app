import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuArray:any[] = [];
  constructor() {
    this.menuArray = [
      {
        id:1,
        name:'Home',
        path:'/home',
        active:true
      },
      {
        id:2,
        name:'About',
        path:'/about',
        active:false
      },
      {
        id:3,
        name:'Portfolio',
        path:'/portfolio',
        active:false
      },
      {
        id:4,
        name:'Service',
        path:'/service',
        active:false
      },
      {
        id:5,
        name:'Contact',
        path:'/contact',
        active:false
      },
      {
        id:6,
        name:'Blog',
        path:'/blog',
        active:false
      }
    ]
  }

  ngOnInit():void {

  }
}
