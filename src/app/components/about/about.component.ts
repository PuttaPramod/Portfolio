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
        
        // Add entrance animation to the container
        const container = numEl.closest('.stat-card, .stat-item, .counter-card');
        if (container) {
          container.classList.add('animate-in');
        }
        
        // Add number animation classes
        numEl.classList.add('counting');
        
        // Start the count animation
        this.animateCount(numEl);
        
        // Add completion animation after count finishes
        setTimeout(() => {
          numEl.classList.add('count-complete');
          
          // Animate related elements (icons, labels)
          const icon = container?.querySelector('.stat-icon, .counter-icon');
          const label = container?.querySelector('.stat-label, .counter-label');
          
          if (icon) icon.classList.add('icon-bounce');
          if (label) label.classList.add('label-slide-up');
          
        }, 2000); // Adjust based on your count duration
        
        observer.unobserve(numEl);
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
