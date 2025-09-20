import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // keep your own CSS
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
