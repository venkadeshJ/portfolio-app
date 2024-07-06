import { Component } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent {
  menuArray: any[] = [];
  constructor(private router: Router) {
    this.menuArray = [
      {
        id: 1,
        name: "Home",
        path: "/home",
        active: true
      },
      {
        id: 2,
        name: "Portfolio",
        path: "/portfolio",
        active: false
      }
    ];
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveNavItem();
      }
    });
  }
  ngOnInit(): void {}
  setActiveNavItem() {
    const currentPath = this.router.url;
    this.menuArray.forEach(item => {
      item.active = (item.path === currentPath);
    });
  }
  onNavLinkClick(id: number) {
    this.menuArray.forEach(item => {
      item.active = (item.id === id);
    });
  }
}
