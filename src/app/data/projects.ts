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
    slug: 'casa-marra-arzano',
    title: 'Casa Marra',
    location: 'Arzano (NA)',
    category: 'Residenziale · Interni',
    description:
      "Progetto residenziale con ampia documentazione di interni ed esterni. Lo " +
      "studio degli ambienti, dei materiali e degli arredi è stato sviluppato " +
      "attraverso una serie completa di render, a supporto delle scelte progettuali " +
      "e della comunicazione con il committente.",
    cover: 'progetti/casa-marra-arzano/01.jpg',
    images: [
      'progetti/casa-marra-arzano/01.jpg',
      'progetti/casa-marra-arzano/02.jpg',
      'progetti/casa-marra-arzano/03.jpg',
      'progetti/casa-marra-arzano/04.jpg',
      'progetti/casa-marra-arzano/05.jpg',
      'progetti/casa-marra-arzano/06.jpg',
      'progetti/casa-marra-arzano/07.jpg',
      'progetti/casa-marra-arzano/08.jpg',
      'progetti/casa-marra-arzano/09.jpg',
      'progetti/casa-marra-arzano/10.jpg',
      'progetti/casa-marra-arzano/11.jpg',
    ],
  },
  {
    slug: 'casa-silvestro-arzano',
    title: 'Casa Silvestro',
    location: 'Arzano (NA)',
    category: 'Residenziale · Ristrutturazione',
    description:
      "Ristrutturazione completa di un appartamento, seguita dal progetto architettonico " +
      "fino alla consegna. L'intervento ha riguardato il rifacimento delle pavimentazioni, " +
      "la realizzazione di controsoffitti con illuminazione integrata e il rinnovo dei " +
      "servizi igienici. La documentazione fotografica delle fasi di cantiere affianca le " +
      "immagini degli ambienti finiti, restituendo l'intero percorso di trasformazione.",
    cover: 'progetti/casa-silvestro-arzano/01.jpg',
    images: [
      'progetti/casa-silvestro-arzano/01.jpg',
      'progetti/casa-silvestro-arzano/02.jpg',
      'progetti/casa-silvestro-arzano/03.jpg',
      'progetti/casa-silvestro-arzano/04.jpg',
      'progetti/casa-silvestro-arzano/05.jpg',
      'progetti/casa-silvestro-arzano/06.jpg',
    ],
  },
  {
    slug: 'casa-mirabelli',
    title: 'Casa Mirabelli',
    category: 'Residenziale · Interni',
    description:
      "Progetto di interni per una residenza privata, con particolare attenzione al " +
      "disegno dei controsoffitti e alla luce artificiale. Le geometrie curve delle " +
      "velette e i tagli luminosi definiscono il carattere degli ambienti, mentre la " +
      "scelta di rivestimenti e finiture caratterizza le zone di servizio. La planimetria " +
      "di progetto documenta la distribuzione degli spazi.",
    cover: 'progetti/casa-mirabelli/01.jpg',
    images: [
      'progetti/casa-mirabelli/01.jpg',
      'progetti/casa-mirabelli/02.jpg',
      'progetti/casa-mirabelli/03.jpg',
      'progetti/casa-mirabelli/04.jpg',
      'progetti/casa-mirabelli/05.jpg',
      'progetti/casa-mirabelli/06.jpg',
    ],
  },
  {
    slug: 'casa-giando',
    title: 'Casa Giando',
    category: 'Residenziale · Interni',
    description:
      "Intervento su un'ampia residenza, sviluppato dalla pianta arredata fino alla " +
      "realizzazione. Il progetto ha ridefinito zona giorno, cucina e l'intera dotazione " +
      "di bagni, ciascuno con una propria identità cromatica e materica: mosaici, " +
      "rivestimenti ceramici e arredi su misura. Le immagini di cantiere e quelle degli " +
      "ambienti ultimati documentano la coerenza tra progetto ed esecuzione.",
    cover: 'progetti/casa-giando/01.jpg',
    images: [
      'progetti/casa-giando/01.jpg',
      'progetti/casa-giando/02.jpg',
      'progetti/casa-giando/03.jpg',
      'progetti/casa-giando/04.jpg',
      'progetti/casa-giando/05.jpg',
      'progetti/casa-giando/06.jpg',
      'progetti/casa-giando/07.jpg',
      'progetti/casa-giando/08.jpg',
      'progetti/casa-giando/09.jpg',
      'progetti/casa-giando/10.jpg',
      'progetti/casa-giando/11.jpg',
      'progetti/casa-giando/12.jpg',
      'progetti/casa-giando/13.jpg',
      'progetti/casa-giando/14.jpg',
    ],
  },
  {
    slug: 'casa-ferraiolo-marano',
    title: 'Casa Ferraiolo',
    location: 'Marano di Napoli (NA)',
    category: 'Residenziale · Nuova costruzione',
    description:
      "Edificio residenziale caratterizzato dall'alternanza tra volumi intonacati chiari e " +
      "corpi aggettanti in colore terra, coronati da un'ampia copertura lignea a sporto. " +
      "All'interno, la scala elicoidale collega i livelli come elemento scultoreo. Lo " +
      "studio dei bagni è stato condotto con modellazione tridimensionale, per verificare " +
      "in anticipo rivestimenti, cromie e disposizione dei sanitari.",
    cover: 'progetti/casa-ferraiolo-marano/01.jpg',
    images: [
      'progetti/casa-ferraiolo-marano/01.jpg',
      'progetti/casa-ferraiolo-marano/02.jpg',
      'progetti/casa-ferraiolo-marano/03.jpg',
      'progetti/casa-ferraiolo-marano/04.jpg',
      'progetti/casa-ferraiolo-marano/05.jpg',
      'progetti/casa-ferraiolo-marano/06.jpg',
      'progetti/casa-ferraiolo-marano/07.jpg',
      'progetti/casa-ferraiolo-marano/08.jpg',
      'progetti/casa-ferraiolo-marano/09.jpg',
      'progetti/casa-ferraiolo-marano/10.jpg',
    ],
  },
  {
    slug: 'biblioteca-liceo-imbriani',
    title: 'Biblioteca Liceo Imbriani',
    location: "Pomigliano d'Arco (NA)",
    category: 'Pubblico · Interni',
    description:
      "Progetto di riqualificazione della biblioteca scolastica, pensata come spazio di " +
      "studio e lettura condiviso. Il layout organizza banconi di consultazione, postazioni " +
      "di lettura e scaffalature perimetrali attorno alla struttura esistente, sfruttando " +
      "la luce naturale delle grandi finestrate. Dai disegni al tratto ai render " +
      "fotorealistici, la modellazione 3D ha guidato la scelta di arredi e colori.",
    cover: 'progetti/biblioteca-liceo-imbriani/01.jpg',
    images: [
      'progetti/biblioteca-liceo-imbriani/01.jpg',
      'progetti/biblioteca-liceo-imbriani/02.jpg',
      'progetti/biblioteca-liceo-imbriani/03.jpg',
      'progetti/biblioteca-liceo-imbriani/04.jpg',
      'progetti/biblioteca-liceo-imbriani/05.jpg',
    ],
  },
];

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
