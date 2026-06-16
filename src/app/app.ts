// src/app/app.component.ts
import { Component, signal,HostListener } from '@angular/core';
import { RouterOutlet }        from '@angular/router';
import { RouterModule }        from '@angular/router';
import { HeaderComponent }     from './components/header/header';
import { FooterComponent }     from './components/footer/footer';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from "./components/about/about";
import { HeroComponent } from "./components/hero/hero";
import { ProjectsComponent } from "./components/projects/projects";
import { SkillsComponent } from "./components/skills/skills";
import { ContactComponent } from "./components/contact/contact";
import { AchievmentsComponent } from "./components/achievments/achievments";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, AboutComponent, HeroComponent, ProjectsComponent, SkillsComponent, ContactComponent, AchievmentsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('portfolio');
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
