import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';

interface Project {
  title: string;
  description: string;
  image: string;
  demo: string;
  repo: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule,RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  projects: Project[] = [
    {
      title: 'Todo App',
      description: 'A responsive todo application built with Angular and Firebase.',
      image: 'assets/todo.png',
      demo: 'https://your-demo-url.com',
      repo: 'https://github.com/yourname/todo-app'
    },
    // Add more projects here
  ];
  lightboxOpen = false;
  currentImg: string | null = null;

  openLightbox(imgUrl: string): void {
    this.currentImg = imgUrl;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.currentImg = null;
  }

  
}
