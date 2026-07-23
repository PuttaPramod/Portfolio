import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  isScrolled = false;
  mobileMenu = false;
  activeSection = 'hero';

  @HostListener('window:scroll')
  onScroll() {

    this.isScrolled = window.scrollY > 30;

    const sections = [
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'contact'
    ];

    for (const id of sections) {
      const section = document.getElementById(id);

      if (section) {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          this.activeSection = id;
        }
      }
    }
  }

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  closeMenu() {
    this.mobileMenu = false;
  }
}