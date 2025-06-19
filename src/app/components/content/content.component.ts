import { Component } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { EducationComponent } from '../education/education.component';
import { ProfileComponent } from '../profile/profile.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-content',
  imports: [
    ArticlesComponent,
    SubscribeComponent,
    ExperienceComponent,
    ProjectsComponent,
    TestimonialsComponent,
    EducationComponent,
    ProfileComponent,
    SkillsComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
