import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STUDIO } from '../../data/studio';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly studio = STUDIO;

  readonly tappe = [
    {
      anno: '1990 →',
      titolo: 'Esperienza sul campo',
      testo:
        "Oltre trent'anni nel mondo dell'edilizia, seguendo progetti pubblici e privati con un approccio integrato.",
    },
    {
      anno: '2004',
      titolo: 'Consulente Tecnico',
      testo:
        'Consulente Tecnico del Tribunale di Nola, al servizio della giustizia.',
    },
    {
      anno: '2005',
      titolo: 'Valutazioni immobiliari',
      testo:
        'Supporto a UniCredit Banca nelle valutazioni immobiliari e nelle analisi tecniche per operazioni di rilievo.',
    },
    {
      anno: '2015 →',
      titolo: 'Dimensione accademica',
      testo:
        "Tutor d'Aula presso Ingegneria Civile Edile Ambientale (DIcDEA) dell'Università «Luigi Vanvitelli»; dal 2018 Cultore della Materia in Architettura e Disegno Industriale.",
    },
  ];
}
