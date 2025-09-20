import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // keep your own CSS
})
export class FooterComponent implements OnInit {
  async ngOnInit() {
    // Load AOS dynamically so Vite doesn't treat it as ESM
    const AOS = (await import('aos')).default;


    // Initialize
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
