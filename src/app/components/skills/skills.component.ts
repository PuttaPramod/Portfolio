import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports:[CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    { name: 'Angular', level: 90, leftIcon: 'bi bi-lightning-charge-fill', rightIcon: 'bi bi-braces' },
    { name: 'CSS', level: 80, leftIcon: 'bi bi-palette-fill', rightIcon: 'bi bi-filetype-css' },
    { name: 'HTML', level: 95, leftIcon: 'bi bi-code-slash', rightIcon: 'bi bi-filetype-html' },
    { name: 'TypeScript', level: 85, leftIcon: 'bi bi-lightbulb-fill', rightIcon: 'bi bi-braces-asterisk' }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const progressBars: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target as HTMLElement;
          const value = progress.getAttribute('data-progress');
          if (value) {
            progress.style.width = value + '%';
          }
          observer.unobserve(progress);
        }
      });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  }
}
