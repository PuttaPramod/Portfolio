import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {

  skills = [
    { name: 'HTML', level: 95, leftIcon: 'fa-brands fa-html5' },
    { name: 'CSS', level: 90, leftIcon: 'fa-brands fa-css3-alt' },
    { name: 'Python', level: 88, leftIcon: 'fa-brands fa-python' },
    { name: 'TypeScript', level: 85, leftIcon: 'fa-brands fa-js' },
    { name: 'Angular', level: 80, leftIcon: 'fa-brands fa-angular' },
    { name: 'Node.js', level: 75, leftIcon: 'fa-brands fa-node' },
    
  ];

  @ViewChildren('skillCircle', { read: ElementRef }) circles!: QueryList<ElementRef>;
  @ViewChildren('percentageText', { read: ElementRef }) percentages!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateSkills();
          observer.disconnect(); // ✅ run only once
        }
      });
    }, { threshold: 0.4 });

    observer.observe(document.querySelector('#skills') as Element);
  }

  animateSkills() {
    this.skills.forEach((skill, index) => {
      const circle = this.circles.toArray()[index].nativeElement;
      const percentage = this.percentages.toArray()[index].nativeElement;

      const radius = 54;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;

      let progress = 0;
      const duration = 2000;
      const step = 15;
      const increment = skill.level / (duration / step);

      const interval = setInterval(() => {
        progress += increment;
        if (progress >= skill.level) {
          progress = skill.level;
          clearInterval(interval);
        }
        circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
        percentage.textContent = Math.round(progress) + '%';
      }, step);
    });
  }
}
