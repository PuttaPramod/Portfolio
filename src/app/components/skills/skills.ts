import { Component, ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';

type Skill = {
  name: string;
  color: string;
  icon: string;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  isVisible = false;

  skills: Skill[] = [
    { name: 'Python', color: '#3776ab', icon: 'fab fa-python' },
    { name: 'HTML', color: '#f97316', icon: 'fab fa-html5' },
    { name: 'CSS', color: '#2563eb', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', color: '#eab308', icon: 'fab fa-js-square' },
    { name: 'Angular', color: '#dd0031', icon: 'fab fa-angular' },
    { name: 'React', color: '#06b6d4', icon: 'fab fa-react' },
    { name: 'TypeScript', color: '#3178c6', icon: 'fab fa-js' },
    { name: 'MongoDB', color: '#47a248', icon: 'fas fa-database' },
    { name: 'GitHub', color: '#f1502f', icon: 'fab fa-github' },
    { name: 'Node.js', color: '#3c873a', icon: 'fab fa-node' },
    { name: 'Bootstrap', color: '#7952b3', icon: 'fab fa-bootstrap' },
    { name: 'Tailwind CSS', color: '#38bdf8', icon: 'fas fa-wind' },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => {
              this.isVisible = true;
              this.cdr.markForCheck();
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(this.skillsSection.nativeElement);
    });
  }
}