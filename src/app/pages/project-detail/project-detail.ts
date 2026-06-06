import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PROJECTS, findProject } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('slug') ?? ''))
  );

  readonly project = computed(() => findProject(this.slug() ?? ''));

  /** Indice immagine aperta nel lightbox, oppure null se chiuso. */
  readonly lightboxIndex = signal<number | null>(null);

  /** Progetti correlati (esclude quello corrente). */
  readonly correlati = computed(() =>
    PROJECTS.filter((p) => p.slug !== this.project()?.slug).slice(0, 3)
  );

  apriLightbox(i: number): void {
    this.lightboxIndex.set(i);
  }

  chiudiLightbox(): void {
    this.lightboxIndex.set(null);
  }

  precedente(): void {
    const p = this.project();
    const i = this.lightboxIndex();
    if (!p || i === null) return;
    this.lightboxIndex.set((i - 1 + p.images.length) % p.images.length);
  }

  successiva(): void {
    const p = this.project();
    const i = this.lightboxIndex();
    if (!p || i === null) return;
    this.lightboxIndex.set((i + 1) % p.images.length);
  }
}
