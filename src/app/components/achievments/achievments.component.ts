import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';

interface Certificate {
  img: string;
  title: string;
  issuer: string;
  date: string;
}

@Component({
  selector: 'app-achievments',
  imports:[CommonModule,FormsModule],
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.css']
})
export class AchievmentsComponent implements OnInit {
  certificates = [
    { title: 'Angular Developer', issuer: 'Infosys SpringBoard', date: 'Jun 2025', img: 'assets/Angular.png' },
    { title: 'Introduction to IoT(NPTEL)', issuer: 'Skill India', date: 'Oct 2024', img: 'assets/IoT.png' },
    { title: 'Code Sankalp', issuer: 'NRIIT', date: 'Jan 2025', img: 'assets/code.png' },
  ];
animationStates: any;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  currentImg: string | null = null;
  lightboxOpen = false;

  openLightbox(imgUrl: string): void {
    this.currentImg = imgUrl;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.currentImg = null;
  }
}
