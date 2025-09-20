import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showButton = false;

  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton = window.scrollY > 200;
    const btn = document.querySelector('.scroll-to-top') as HTMLElement;
    if (btn) btn.style.display = this.showButton ? 'block' : 'none';
  }
}
