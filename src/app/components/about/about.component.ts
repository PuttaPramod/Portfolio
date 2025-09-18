import { Component, AfterViewInit, ElementRef,OnInit} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
constructor(private el: ElementRef) {}

  ngOnInit() {
    const numbers = this.el.nativeElement.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numEl = entry.target as HTMLElement;
          this.animateCount(numEl);
          observer.unobserve(numEl); // run once per element
        }
      });
    }, { threshold: 0.6 });

    numbers.forEach((num: Element) => observer.observe(num));
  }

  private animateCount(el: HTMLElement) {
    const target = +el.getAttribute('data-target')!;
    let current = 0;
    const increment = Math.ceil(target / 100); // smoother counting
    el.classList.add('animated');

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
        el.classList.remove('animated'); // remove effect when finished
      }
      el.textContent = current.toString();
    }, 60); // speed (40ms → ~4 seconds total)
  }
}
