import { Component, computed, effect, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { map } from 'rxjs';
import { PROJECTS, findProject } from '../../data/projects';

const BASE_URL = 'https://architettosergioizzo.netlify.app';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly titleSvc = inject(Title);
  private readonly metaSvc = inject(Meta);
  private readonly dialogEl = viewChild<ElementRef<HTMLDialogElement>>('lb');

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

  private touchStartX = 0;

  constructor() {
    effect(() => {
      const p = this.project();
      if (!p) return;
      const desc = p.description.slice(0, 160);
      this.titleSvc.setTitle(`${p.title} · ${p.location} — Arch. Sergio Izzo`);
      this.metaSvc.updateTag({ name: 'description', content: desc });
      this.metaSvc.updateTag({ property: 'og:title', content: `${p.title} · ${p.location}` });
      this.metaSvc.updateTag({ property: 'og:description', content: desc });
      this.metaSvc.updateTag({ property: 'og:image', content: `${BASE_URL}/${p.cover}` });
      this.metaSvc.updateTag({ property: 'og:url', content: `${BASE_URL}/progetti/${p.slug}` });
    });
  }

  apriLightbox(i: number): void {
    this.lightboxIndex.set(i);
    this.dialogEl()?.nativeElement.showModal();
  }

  chiudiLightbox(): void {
    this.dialogEl()?.nativeElement.close();
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

  /** Chiude cliccando il backdrop (l'area fuori dall'immagine). */
  onBackdropClick(event: MouseEvent): void {
    const dialog = this.dialogEl()?.nativeElement;
    if (!dialog) return;
    const r = dialog.getBoundingClientRect();
    const outside =
      event.clientX < r.left || event.clientX > r.right ||
      event.clientY < r.top  || event.clientY > r.bottom;
    if (outside) this.chiudiLightbox();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const delta = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) < 40) return;
    delta < 0 ? this.successiva() : this.precedente();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.lightboxIndex() === null) return;
    if (event.key === 'ArrowLeft')  this.precedente();
    if (event.key === 'ArrowRight') this.successiva();
  }
}
