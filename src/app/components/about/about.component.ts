import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // Animate numbers only once
          if (entry.target.classList.contains('stat-card')) {
            const numElement = entry.target.querySelector('.stat-number') as HTMLElement;
            if (numElement && !numElement.classList.contains('counted')) {
              this.animateCount(numElement);
              numElement.classList.add('counted');
            }
          }
        }
      });
    }, { threshold: 0.3 });

    // Observe all elements with animate-on-scroll
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));
  }

  private animateCount(element: HTMLElement) {
    const target = +element.getAttribute('data-target')!;
    let current = 0;
    const increment = Math.ceil(target / 100);

    const updateCount = () => {
      current += increment;
      if (current > target) current = target;
      element.innerText = current.toString();

      if (current < target) {
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  }
}
