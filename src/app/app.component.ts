// src/app/app.component.ts
import { Component, signal,HostListener } from '@angular/core';
import { RouterOutlet }        from '@angular/router';
import { RouterModule }        from '@angular/router';
import { HeaderComponent }     from './components/header/header.component';
import { FooterComponent }     from './components/footer/footer.component';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from "./components/about/about.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, CommonModule, AboutComponent, HeroComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  title = signal('portfolio');
}
