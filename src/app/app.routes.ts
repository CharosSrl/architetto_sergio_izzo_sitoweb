import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.HomeComponent),
    title: 'Studio di Progettazione — Arch. Sergio Izzo',
  },
  {
    path: 'chi-siamo',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.AboutComponent),
    title: 'Chi Siamo — Studio di Progettazione',
  },
  {
    path: 'progetti',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.ProjectsComponent),
    title: 'Progetti — Studio di Progettazione',
  },
  {
    path: 'progetti/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then(
        (m) => m.ProjectDetailComponent
      ),
    title: 'Progetto — Studio di Progettazione',
  },
  {
    path: 'servizi',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.ServicesComponent),
    title: 'Servizi — Studio di Progettazione',
  },
  {
    path: 'contatti',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.ContactComponent),
    title: 'Contatti — Studio di Progettazione',
  },
  { path: '**', redirectTo: '' },
];
