import { Project } from '../models/project';

/**
 * Elenco dei progetti dello studio.
 * Le descrizioni sono testi indicativi in italiano, liberamente modificabili
 * dall'architetto. Le immagini si trovano in public/progetti/<slug>/.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'grisolia-resort-sibari',
    title: 'Grisolia Resort',
    location: 'Sibari (CS)',
    category: 'Ricettivo · Resort',
    year: '2026',
    description:
      "Progetto di un complesso ricettivo immerso nel verde della piana di Sibari. " +
      "L'intervento integra volumi residenziali, area piscina e spazi comuni, con un " +
      "disegno del paesaggio che valorizza la vegetazione mediterranea e il rapporto " +
      "tra interno ed esterno. Lo sviluppo è accompagnato da modellazione 3D e render " +
      "fotorealistici per la verifica delle scelte architettoniche e materiche.",
    cover: 'progetti/grisolia-resort-sibari/01.png',
    images: [
      'progetti/grisolia-resort-sibari/01.png',
      'progetti/grisolia-resort-sibari/02.png',
      'progetti/grisolia-resort-sibari/03.png',
      'progetti/grisolia-resort-sibari/04.png',
    ],
    video: 'progetti/grisolia-resort-sibari/video.mp4',
  },
  {
    slug: 'quartiere-sulmona-pomigliano',
    title: 'Quartiere Sulmona',
    location: "Pomigliano d'Arco (NA)",
    category: 'Urbanistica · Residenziale',
    description:
      "Studio di riqualificazione urbana di un comparto residenziale. Il progetto " +
      "ridisegna spazi pubblici, percorsi e relazioni tra gli edifici, con attenzione " +
      "alla qualità dell'abitare, alla vivibilità degli spazi collettivi e " +
      "all'inserimento armonico nel tessuto urbano esistente.",
    cover: 'progetti/quartiere-sulmona-pomigliano/01.jpg',
    images: [
      'progetti/quartiere-sulmona-pomigliano/01.jpg',
      'progetti/quartiere-sulmona-pomigliano/02.jpg',
      'progetti/quartiere-sulmona-pomigliano/03.jpg',
      'progetti/quartiere-sulmona-pomigliano/04.jpg',
      'progetti/quartiere-sulmona-pomigliano/05.jpg',
    ],
  },
  {
    slug: 'stir-gisec-santa-maria-capua-vetere',
    title: 'STIR GISEC',
    location: 'Santa Maria Capua Vetere (CE)',
    category: 'Impianti · Infrastrutture',
    description:
      "Intervento sull'impianto STIR per il trattamento dei rifiuti. Il progetto ha " +
      "previsto rilievi, modellazione informativa BIM e studio degli interventi " +
      "edilizi e impiantistici, con l'obiettivo di migliorare funzionalità, sicurezza " +
      "ed efficienza dell'intera struttura.",
    cover: 'progetti/stir-gisec-santa-maria-capua-vetere/01.png',
    images: [
      'progetti/stir-gisec-santa-maria-capua-vetere/01.png',
      'progetti/stir-gisec-santa-maria-capua-vetere/02.jpg',
      'progetti/stir-gisec-santa-maria-capua-vetere/03.jpg',
      'progetti/stir-gisec-santa-maria-capua-vetere/04.jpg',
    ],
  },
  {
    slug: 'izzos-farm-somma-vesuviana',
    title: "Izzo's Farm",
    location: 'Somma Vesuviana (NA)',
    category: 'Residenziale · Rurale',
    year: '2026',
    description:
      "Progetto di una residenza rurale alle pendici del Vesuvio. L'edificio dialoga " +
      "con il paesaggio agricolo circostante attraverso materiali naturali, ampie " +
      "aperture e spazi esterni vivibili. I render fotorealistici restituiscono " +
      "l'atmosfera e l'integrazione dell'opera nel contesto.",
    cover: 'progetti/izzos-farm-somma-vesuviana/01.png',
    images: [
      'progetti/izzos-farm-somma-vesuviana/01.png',
      'progetti/izzos-farm-somma-vesuviana/02.png',
      'progetti/izzos-farm-somma-vesuviana/03.png',
    ],
  },
  {
    slug: 'villa-malfi-pomigliano',
    title: 'Villa Malfi',
    location: "Pomigliano d'Arco (NA)",
    category: 'Residenziale · Villa',
    year: '2026',
    description:
      "Progetto di una villa unifamiliare, dallo schizzo iniziale fino ai render " +
      "definitivi. L'impianto architettonico ricerca equilibrio tra volumi, luce " +
      "naturale e spazi verdi, con soluzioni d'interni curate nel dettaglio. Il " +
      "percorso progettuale documenta l'evoluzione dall'idea alla rappresentazione " +
      "fotorealistica.",
    cover: 'progetti/villa-malfi-pomigliano/01.png',
    images: [
      'progetti/villa-malfi-pomigliano/01.png',
      'progetti/villa-malfi-pomigliano/02.png',
      'progetti/villa-malfi-pomigliano/03.png',
      'progetti/villa-malfi-pomigliano/04.png',
      'progetti/villa-malfi-pomigliano/05.jpg',
      'progetti/villa-malfi-pomigliano/06.jpg',
      'progetti/villa-malfi-pomigliano/07.jpg',
      'progetti/villa-malfi-pomigliano/08.jpg',
    ],
  },
  {
    slug: 'palazzo-storico-via-bari-napoli',
    title: 'Palazzo Storico Via Bari',
    location: 'Napoli (NA)',
    category: 'Restauro · Recupero',
    description:
      "Intervento di recupero e valorizzazione di un palazzo storico nel cuore di " +
      "Napoli. Il progetto coniuga rispetto dell'identità architettonica originaria e " +
      "adeguamento funzionale, attraverso analisi dei degradi, rilievi diagnostici e " +
      "interventi conservativi mirati.",
    cover: 'progetti/palazzo-storico-via-bari-napoli/01.jpg',
    images: [
      'progetti/palazzo-storico-via-bari-napoli/01.jpg',
      'progetti/palazzo-storico-via-bari-napoli/02.jpg',
      'progetti/palazzo-storico-via-bari-napoli/03.jpg',
    ],
  },
  {
    slug: 'casa-accoglienza-san-cipriano',
    title: 'Casa di Accoglienza',
    location: "San Cipriano d'Aversa (CE)",
    category: 'Sociale · Residenziale',
    description:
      "Progetto di una casa di accoglienza pensata come spazio sicuro e funzionale. " +
      "La modellazione 3D ha guidato la definizione degli ambienti, privilegiando " +
      "comfort, accessibilità e qualità degli spazi destinati all'ospitalità.",
    cover: 'progetti/casa-accoglienza-san-cipriano/01.jpg',
    images: ['progetti/casa-accoglienza-san-cipriano/01.jpg'],
  },
  {
    slug: 'casa-mirabella-melito',
    title: 'Casa Mirabella',
    location: 'Melito di Napoli (NA)',
    category: 'Residenziale · Interni',
    description:
      "Progetto residenziale con studio approfondito degli interni. La distribuzione " +
      "degli spazi, la scelta dei materiali e l'illuminazione sono stati definiti " +
      "tramite render fotorealistici, per offrire al committente una visione chiara " +
      "del risultato finale.",
    cover: 'progetti/casa-mirabella-melito/01.png',
    images: [
      'progetti/casa-mirabella-melito/01.png',
      'progetti/casa-mirabella-melito/02.png',
      'progetti/casa-mirabella-melito/03.png',
      'progetti/casa-mirabella-melito/04.png',
      'progetti/casa-mirabella-melito/05.png',
      'progetti/casa-mirabella-melito/06.png',
    ],
  },
  {
    slug: 'casa-esposito-pomigliano',
    title: 'Casa Esposito',
    location: "Pomigliano d'Arco (NA)",
    category: 'Residenziale',
    description:
      "Progetto di una residenza privata con soluzioni su misura per le esigenze " +
      "della famiglia. L'intervento punta a ottimizzare gli spazi e a garantire " +
      "comfort abitativo, efficienza e una forte identità architettonica.",
    cover: 'progetti/casa-esposito-pomigliano/01.jpg',
    images: [
      'progetti/casa-esposito-pomigliano/01.jpg',
      'progetti/casa-esposito-pomigliano/02.jpg',
    ],
  },
  {
    slug: 'casa-sansone-arzano',
    title: 'Casa Sansone',
    location: 'Arzano (NA)',
    category: 'Residenziale · Interni',
    description:
      "Progetto residenziale con ampia documentazione di interni ed esterni. Lo " +
      "studio degli ambienti, dei materiali e degli arredi è stato sviluppato " +
      "attraverso una serie completa di render, a supporto delle scelte progettuali " +
      "e della comunicazione con il committente.",
    cover: 'progetti/casa-sansone-arzano/01.jpg',
    images: [
      'progetti/casa-sansone-arzano/01.jpg',
      'progetti/casa-sansone-arzano/02.jpg',
      'progetti/casa-sansone-arzano/03.jpg',
      'progetti/casa-sansone-arzano/04.jpg',
      'progetti/casa-sansone-arzano/05.jpg',
    ],
  },
  {
    slug: 'b-n-b-borbone-napoli',
    title: 'B&B I Borbone',
    location: 'Napoli (NA)',
    category: 'Ricettivo · B&B',
    description:
      "Progetto di ristrutturazione e allestimento di un bed & breakfast nel cuore di " +
      "Napoli. L'intervento valorizza gli ambienti esistenti con un linguaggio sobrio " +
      "ed accogliente, pensato per offrire agli ospiti spazi confortevoli e di " +
      "carattere.",
    cover: 'progetti/b-n-b-borbone-napoli/01.jpeg',
    images: [
      'progetti/b-n-b-borbone-napoli/01.jpeg',
      'progetti/b-n-b-borbone-napoli/02.jpeg',
      'progetti/b-n-b-borbone-napoli/03.jpeg',
      'progetti/b-n-b-borbone-napoli/04.jpeg',
      'progetti/b-n-b-borbone-napoli/05.jpeg',
      'progetti/b-n-b-borbone-napoli/06.jpeg',
      'progetti/b-n-b-borbone-napoli/07.jpeg',
      'progetti/b-n-b-borbone-napoli/08.jpeg',
    ],
  },
  {
    slug: 'casa-f-esposito',
    title: 'Casa F. Esposito',
    location: "Pomigliano d'Arco (NA)",
    category: 'Residenziale',
    description:
      "Progetto di una residenza privata a Pomigliano d'Arco. L'intervento punta a " +
      "ottimizzare la distribuzione degli spazi interni, garantendo comfort abitativo " +
      "e una forte identità architettonica su misura per le esigenze della famiglia.",
    cover: 'progetti/casa-f-esposito/01.jpeg',
    images: [
      'progetti/casa-f-esposito/01.jpeg',
      'progetti/casa-f-esposito/02.jpeg',
      'progetti/casa-f-esposito/03.jpeg',
      'progetti/casa-f-esposito/04.jpeg',
      'progetti/casa-f-esposito/05.jpeg',
    ],
  },
];

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
