export interface Project {
  /** Identificativo usato nell'URL (es. /progetti/villa-malfi-pomigliano) */
  slug: string;
  /** Titolo del progetto */
  title: string;
  /** LocalitÃ  dell'intervento */
  location: string;
  /** Categoria/tipologia (es. Residenziale, Restauro, Urbanistica) */
  category: string;
  /** Anno o periodo di riferimento (opzionale) */
  year?: string;
  /** Descrizione estesa in italiano */
  description: string;
  /** Percorso dell'immagine di copertina */
  cover: string;
  /** Galleria di immagini del progetto */
  images: string[];
  /** Percorso di un eventuale video del progetto */
  video?: string;
}

export interface Service {
  title: string;
  description: string;
}
