import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { STUDIO } from '../../data/studio';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly studio = STUDIO;

  /** URL della mappa, marcato come sicuro per l'uso in un iframe. */
  readonly mappaUrl: SafeResourceUrl;

  constructor() {
    const query = encodeURIComponent(
      `${this.studio.indirizzo}, ${this.studio.cap} ${this.studio.citta}`
    );
    this.mappaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${query}&output=embed`
    );
  }
}
