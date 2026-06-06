# Studio di Progettazione — Arch. Sergio Izzo

Sito web vetrina dello Studio di Progettazione dell'Architetto Sergio Izzo.
Applicazione **Angular 20**, completamente in italiano, **senza backend** ed
eseguibile in locale.

## Requisiti

- [Node.js](https://nodejs.org/) 20 o superiore
- npm (incluso con Node.js)

## Avvio in locale

Dalla cartella del progetto (`studio-izzo-web`):

```bash
# 1. Installa le dipendenze (solo la prima volta)
npm install

# 2. Avvia il server di sviluppo
npm start
```

Poi apri il browser su **http://localhost:4200**.

> Il comando `npm start` esegue `ng serve`. Per usare una porta diversa:
> `npx ng serve --port 4321`.

## Build di produzione

```bash
npm run build
```

I file ottimizzati vengono generati nella cartella `dist/studio-izzo-web`.
Per visualizzarli basta servire quella cartella con un qualsiasi web server
statico (es. `npx http-server dist/studio-izzo-web/browser`).

## Struttura dei contenuti

Tutti i contenuti modificabili si trovano in `src/app/data/`:

- `studio.ts` — dati anagrafici e di contatto dello studio.
- `projects.ts` — elenco dei progetti (titolo, luogo, descrizione, immagini).
- `services.ts` — elenco dei servizi offerti.

Le immagini dei progetti, il logo e l'insegna si trovano in `public/`:

- `public/brand/` — logo e insegna dello studio.
- `public/progetti/<nome-progetto>/` — immagini ed eventuali video di ciascun
  progetto.

### Aggiungere o modificare un progetto

1. Crea una sottocartella in `public/progetti/` con le immagini del progetto.
2. Aggiungi una voce all'array `PROJECTS` in `src/app/data/projects.ts`,
   indicando `slug`, `title`, `location`, `category`, `description`, `cover`
   (immagine di copertina) e l'elenco `images`. Il campo `video` è opzionale.

Le descrizioni dei progetti attualmente presenti sono testi indicativi,
liberamente modificabili.

## Pagine del sito

- **Home** — presentazione, progetti in evidenza, servizi e contatti.
- **Chi Siamo** (`/chi-siamo`) — biografia e percorso professionale.
- **Progetti** (`/progetti`) — galleria di tutti i progetti.
- **Dettaglio progetto** (`/progetti/:slug`) — immagini, descrizione e video.
- **Servizi** (`/servizi`) — elenco completo dei servizi.
- **Contatti** (`/contatti`) — recapiti, pulsante email e mappa.

## Note

- La mappa nella pagina Contatti richiede una connessione a internet; il resto
  del sito funziona completamente offline.
