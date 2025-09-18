import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  lightboxOpen = false;
  currentImg = '';

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }

  openLightbox(imgUrl: string): void {
    console.log('Opening lightbox with image:', imgUrl);
    this.currentImg = imgUrl;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
  
  closeLightbox(): void {
    console.log('Closing lightbox');
    this.lightboxOpen = false;
    this.currentImg = '';
    document.body.style.overflow = 'auto'; // Restore scroll
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.lightboxOpen) {
      this.closeLightbox();
    }
  }

  onLightboxBackgroundClick(event: MouseEvent): void {
    this.closeLightbox();
  }

  onLightboxContentClick(event: MouseEvent): void {
    event.stopPropagation(); // Prevent closing when clicking on lightbox content
  }

  // Added test method to verify event bindings
  testClick(): void {
    console.log('Test button clicked');
  }
}
