import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STUDIO } from '../../data/studio';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  readonly studio = STUDIO;
  readonly anno = new Date().getFullYear();
}
