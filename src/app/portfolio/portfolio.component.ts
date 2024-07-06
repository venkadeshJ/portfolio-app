import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects:any[] =[];

  constructor(){
    this. projects = [
      {
        id:1,
        name: 'Project One',
        description: 'This project is a dynamic web application developed using Angular and TypeScript. It features a responsive design with Bootstrap, providing an optimal user experience across various devices.',
        technologies: 'Angular, TypeScript, Bootstrap',
        image: '../../assets/images/newsthree.jpg'
      },
      {
        id:2,
        name: 'Project Two',
        description: 'A comprehensive task management tool built with React and JavaScript. The project allows users to create, edit, and track tasks seamlessly.',
        technologies: 'React, JavaScript, CSS',
        image: '../../assets/images/newstwo.jpg'
      },
      {
        id:3,
        name: 'Project Three',
        description: 'A mobile-friendly e-commerce platform developed using Angular and Node.js. This project integrates a robust backend to manage product listings, user accounts, and order processing.',
        technologies: 'Nodejs, JavaScript, CSS',
        image: '../../assets/images/newsone.jpg'
      },
      {
        id:4,
        name: 'Project Four',
        description: 'This project is a dynamic web application developed using Angular and TypeScript. It features a responsive design with Bootstrap, providing an optimal user experience across various devices.',
        technologies: 'Nodejs, JavaScript, CSS',
        image: '../../assets/images/newsone.jpg'
      },
      {
        id:5,
        name: 'Project Five',
        description: 'A mobile-friendly e-commerce platform developed using Angular and Node.js. This project integrates a robust backend to manage product listings, user accounts, and order processing.',
        technologies: 'Nodejs, JavaScript, CSS',
        image: '../../assets/images/newstwo.jpg'
      },
      {
        id:6,
        name: 'Project Six',
        description: 'A comprehensive task management tool built with React and JavaScript. The project allows users to create, edit, and track tasks seamlessly..',
        technologies: 'Nodejs, JavaScript, CSS',
        image: '../../assets/images/newsthree.jpg'
      },
    ];
  }

  ngOnInit() : void{

  }
}
