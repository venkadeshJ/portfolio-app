import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  yearsOfExperience: number = 0;
  projectsWorked: number = 0;
  getImagePath(imageName: string): string {
    return `../../assets/images/${imageName}.jpg`;
  }
  constructor(private router : Router){
    
  }
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

  navigateToPortfolio(){
    this.router.navigate(['/portfolio']);
  }
}
