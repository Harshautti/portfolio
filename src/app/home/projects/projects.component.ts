import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Toll Management System',
      description: 'Web application to manage toll collections and vehicle entries.',
      tech: 'Angular, TypeScript, HTML, CSS, Bootstrap',
      image: 'assets/projects/toll.jpg',
      github: 'https://github.com/yourname/toll-management',
      demo: '#'
    },
    {
      name: 'eKYC Application',
      description: 'Digital KYC flow with Aadhaar, PAN and selfie verification.',
      tech: 'Angular, REST API, Bootstrap',
      image: 'assets/projects/ekyc.jpg',
      github: 'https://github.com/yourname/ekyc-app',
      demo: '#'
    },
    {
      name: 'Banking Application',
      description: 'Credit card based banking application with secure flows.',
      tech: 'Angular, TypeScript, Bootstrap',
      image: 'assets/projects/bank.jpg',
      github: 'https://github.com/yourname/banking-app',
      demo: '#'
    }
  ];
}
