import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { SERVICES } from '../../data/services';
import { STUDIO } from '../../data/studio';
import { ProjectCardComponent } from '../../components/project-card/project-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly studio = STUDIO;
  readonly progettiInEvidenza = PROJECTS.slice(0, 3);
  readonly servizi = SERVICES.slice(0, 6);
}
