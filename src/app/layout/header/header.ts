import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { STUDIO } from '../../data/studio';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly studio = STUDIO;
  readonly menuAperto = signal(false);

  readonly voci = [
    { label: 'Home', path: '/' },
    { label: 'Chi Siamo', path: '/chi-siamo' },
    { label: 'Progetti', path: '/progetti' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Contatti', path: '/contatti' },
  ];

  toggleMenu(): void {
    this.menuAperto.update((v) => !v);
  }

  chiudiMenu(): void {
    this.menuAperto.set(false);
  }
}
