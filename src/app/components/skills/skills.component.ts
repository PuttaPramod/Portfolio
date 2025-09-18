import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: number;
  leftIcon: string;
  animatedLevel: number; // 👈 must be here
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule,FormsModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
skills: Skill[] = [
    { name: 'HTML', level: 90, animatedLevel: 0, leftIcon: 'fab fa-html5' },
    { name: 'CSS', level: 85, animatedLevel: 0, leftIcon: 'fab fa-css3-alt' },
    { name: 'Python', level: 83, animatedLevel: 0, leftIcon: 'fab fa-python' },
    { name: 'TypeScript', level: 80, animatedLevel: 0, leftIcon: 'fab fa-js' },
    { name: 'Angular', level: 75, animatedLevel: 0, leftIcon: 'fab fa-angular' },
    { name: 'Node.js', level: 70, animatedLevel: 0, leftIcon: 'fab fa-node' },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const skillCards = this.el.nativeElement.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(skillCards).indexOf(entry.target);
            if (index !== -1) {
              this.animateSkill(index); // ✅ pass index
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    skillCards.forEach((card: any) => observer.observe(card));
  }

  animateSkill(index: number) {
    let current = 0;
    const target = this.skills[index].level;

    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        this.skills[index].animatedLevel = current;
      }
    }, 15);
  }
}
