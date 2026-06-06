import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  readonly progetti = PROJECTS;
}
