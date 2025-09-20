import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showButton = false;

  async ngOnInit() {
    // Dynamically import AOS (works even if it's CommonJS)
    const AOS = (await import('aos')).default;

    // Initialize AOS
    AOS.init({
      duration: 1000,   // animation duration in ms
      once: true        // run animation only once
    });
  }


  
}
