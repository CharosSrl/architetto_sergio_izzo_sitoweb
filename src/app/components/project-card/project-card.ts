import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
