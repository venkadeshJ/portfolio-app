import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  yearsOfExperience: number = 0;
  projectsWorked: number = 0;

  ngOnInit():void{
    this.animateNumbers();
  }

  animateNumbers() {
    let yearsTarget = 3;
    let projectsTarget = 10;
    const interval = setInterval(() => {
      if (this.yearsOfExperience < yearsTarget) {
        this.yearsOfExperience++;
      }
      if (this.projectsWorked < projectsTarget) {
        this.projectsWorked++;
      }
      if (this.yearsOfExperience === yearsTarget && this.projectsWorked === projectsTarget) {
        clearInterval(interval);
      }
    }, 80); 
  }
}
