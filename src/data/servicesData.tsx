import {
  FaFileContract,
  FaShieldAlt,
  FaChartLine,
  FaBuilding,
  FaUserShield,
  FaHandshake,
  FaCogs,
} from 'react-icons/fa';

export interface ServiceData {
  id: string;
  icon: any;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  details: string[];
  coverage?: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'gestione-polizze',
    icon: FaFileContract,
    title: 'Gestione Polizze',
    shortDescription: 'Analisi, sottoscrizione e gestione completa delle tue polizze assicurative con soluzioni su misura.',
    description: 'Servizio completo per la gestione delle tue polizze assicurative',
    benefits: [
      'Analisi personalizzata delle tue esigenze',
      'Confronto tra diverse compagnie assicurative',
      'Ottimizzazione dei costi e delle coperture',
      'Gestione centralizzata di tutte le polizze',
      'Assistenza continua e rinnovi automatici',
      'Monitoraggio costante delle condizioni di mercato'
    ],
    details: [
      'Effettuiamo un\'analisi approfondita della tua situazione personale o aziendale per identificare le reali necessità assicurative.',
      'Confrontiamo le offerte delle migliori compagnie del mercato per trovare la soluzione più vantaggiosa per te.',
      'Ti assistiamo nella sottoscrizione e nell\'attivazione delle polizze, gestendo tutta la documentazione necessaria.',
      'Monitoriamo costantemente le tue polizze e ti segnaliamo opportunità di miglioramento o risparmio.'
    ],
    coverage: [
      'Polizze vita e infortuni',
      'Assicurazioni auto e moto',
      'Polizze casa e abitazione',
      'RC professionale',
      'Polizze aziendali multirischio',
      'Assicurazioni viaggio e salute'
    ]
  },
  {
    id: 'gestione-sinistri',
    icon: FaShieldAlt,
    title: 'Gestione Sinistri',
    shortDescription: 'Assistenza completa nella gestione e liquidazione sinistri. Ti guidiamo in ogni fase del processo.',
    description: 'Supporto completo in caso di sinistro, dalla denuncia alla liquidazione',
    benefits: [
      'Assistenza immediata 24/7 in caso di sinistro',
      'Gestione completa della denuncia',
      'Coordinamento con periti e compagnie',
      'Supporto nella raccolta documentazione',
      'Monitoraggio liquidazioni',
      'Tutela dei tuoi diritti'
    ],
    details: [
      'In caso di sinistro, ti forniamo assistenza immediata per gestire la situazione nel modo più efficace.',
      'Ci occupiamo di presentare la denuncia alla compagnia assicurativa con tutta la documentazione necessaria.',
      'Seguiamo l\'intero iter della pratica, coordinandoci con periti, compagnie e altri soggetti coinvolti.',
      'Ti manteniamo costantemente informato sullo stato di avanzamento e interveniamo per velocizzare i tempi di liquidazione.'
    ],
    coverage: [
      'Sinistri RC Auto',
      'Danni a proprietà',
      'Infortuni personali',
      'Danni da eventi naturali',
      'Responsabilità civile',
      'Sinistri professionali'
    ]
  },
  {
    id: 'gestioni-specifiche',
    icon: FaCogs,
    title: 'Gestioni Specifiche',
    shortDescription: 'Soluzioni personalizzate per polizze all-risks, multirischi artigiani e piccole industrie, rischi speciali e rendite.',
    description: 'Gestione di polizze specializzate per esigenze particolari e settori specifici',
    benefits: [
      'Polizze All-Risks per pellicciai, orefici, costruttori',
      'Multirischi per artigiani e piccole industrie',
      'Rischi speciali per lavori complessi',
      'Rendite immediate e differite',
      'Polizze acquisite con beni e servizi',
      'Soluzioni su misura per ogni settore'
    ],
    details: [
      'Gestiamo polizze specializzate che richiedono competenze specifiche e conoscenza approfondita dei settori coinvolti.',
      'Analizziamo le peculiarità della tua attività per individuare coperture adeguate che i prodotti standard non possono offrire.',
      'Ci occupiamo della gestione completa di polizze all-risks, multirischi e coperture per rischi speciali.',
      'Offriamo consulenza dedicata per rendite assicurative, sia immediate che differite, in base alle tue esigenze finanziarie.'
    ],
    coverage: [
      'All-risks pellicciai e orefici',
      'All-risks costruttori',
      'Multirischi artigiani',
      'Multirischi piccole industrie',
      'Rischi speciali per lavori complessi',
      'Rendite immediate e differite'
    ]
  },
  {
    id: 'consulenza-rischi',
    icon: FaChartLine,
    title: 'Consulenza e Analisi Rischi',
    shortDescription: 'Valutazione professionale dei rischi aziendali e personali per una protezione ottimale.',
    description: 'Analisi approfondita dei rischi per identificare le migliori strategie di protezione',
    benefits: [
      'Risk assessment completo e professionale',
      'Identificazione di vulnerabilità nascoste',
      'Strategie personalizzate di mitigazione',
      'Report dettagliati e actionable',
      'Ottimizzazione budget assicurativo',
      'Aggiornamenti periodici dell\'analisi'
    ],
    details: [
      'Effettuiamo un\'analisi dettagliata di tutti i rischi a cui sei esposto, sia a livello personale che professionale.',
      'Identifichiamo le aree di vulnerabilità e valutiamo l\'impatto potenziale di ogni rischio.',
      'Elaboriamo strategie personalizzate per minimizzare i rischi e ottimizzare le coperture assicurative.',
      'Ti forniamo un report completo con raccomandazioni concrete e un piano d\'azione dettagliato.'
    ],
    coverage: [
      'Rischi aziendali operativi',
      'Rischi finanziari',
      'Rischi legali e normativi',
      'Rischi patrimoniali',
      'Rischi personali e familiari',
      'Cyber risk e rischi tecnologici'
    ]
  },
  {
    id: 'assicurazioni-aziendali',
    icon: FaBuilding,
    title: 'Assicurazioni Aziendali',
    shortDescription: 'Soluzioni complete per proteggere la tua azienda: RC, danni materiali, business interruption e molto altro.',
    description: 'Protezione completa per la tua azienda',
    benefits: [
      'Coperture personalizzate per il tuo settore',
      'Protezione patrimonio aziendale',
      'Tutela legale inclusa',
      'Copertura dipendenti e collaboratori',
      'Business continuity garantita',
      'Gestione centralizzata di tutte le polizze'
    ],
    details: [
      'Analizziamo le specificità della tua azienda e del tuo settore per identificare tutti i rischi a cui sei esposto.',
      'Creiamo un pacchetto assicurativo completo che protegge il patrimonio aziendale, i dipendenti e l\'attività operativa.',
      'Includiamo coperture per interruzione dell\'attività, responsabilità verso terzi e protezione dei beni aziendali.',
      'Ti affianchiamo nella gestione ordinaria e straordinaria, garantendo sempre la massima protezione.'
    ],
    coverage: [
      'RC Generale e Professionale',
      'Incendio e danni materiali',
      'Business Interruption',
      'Cyber Risk e Data Breach',
      'Flotte aziendali',
      'Infortuni dipendenti',
      'Tutela legale aziendale',
      'D&O (Directors & Officers)'
    ]
  },
  {
    id: 'assicurazioni-privati',
    icon: FaUserShield,
    title: 'Assicurazioni per Privati',
    shortDescription: 'Protezione completa per te e la tua famiglia: auto, casa, salute, vita e risparmio.',
    description: 'Soluzioni assicurative complete per la protezione personale e familiare',
    benefits: [
      'Polizze personalizzate sulle tue esigenze',
      'Protezione completa per tutta la famiglia',
      'Risparmio garantito sui premi',
      'Servizio di assistenza dedicato',
      'Flessibilità nelle coperture',
      'Gestione semplificata online'
    ],
    details: [
      'Analizziamo la tua situazione familiare e le tue esigenze di protezione per creare soluzioni su misura.',
      'Ti proponiamo le migliori polizze auto, casa, salute e vita disponibili sul mercato.',
      'Ottimizziamo i costi confrontando le offerte di diverse compagnie assicurative.',
      'Ti seguiamo nel tempo con assistenza continua, rinnovi e aggiornamenti delle coperture.'
    ],
    coverage: [
      'RC Auto e Moto',
      'Kasko e mini-kasko',
      'Assicurazione Casa',
      'Furto e incendio',
      'Polizze Vita e TCM',
      'Assicurazione sanitaria',
      'Infortuni personali',
      'Tutela legale privata',
      'Viaggi e assistenza'
    ]
  },
  {
    id: 'intermediazione',
    icon: FaHandshake,
    title: 'Intermediazione Assicurativa',
    shortDescription: 'Come broker indipendenti, lavoriamo per te trovando le migliori soluzioni sul mercato.',
    description: 'Il vantaggio di un broker indipendente che lavora solo per te',
    benefits: [
      'Totale indipendenza dalle compagnie',
      'Accesso a tutto il mercato assicurativo',
      'Negoziazione delle migliori condizioni',
      'Risparmio medio del 20-30%',
      'Consulenza imparziale e trasparente',
      'Assistenza post-vendita garantita'
    ],
    details: [
      'A differenza degli agenti assicurativi, come broker non rappresentiamo alcuna compagnia ma lavoriamo esclusivamente per i nostri clienti.',
      'Abbiamo accesso a tutto il mercato assicurativo italiano e possiamo confrontare centinaia di soluzioni diverse.',
      'Negoziamo per te le migliori condizioni contrattuali ed economiche con le compagnie assicurative.',
      'Ti assistiamo in modo continuativo, dalla scelta della polizza fino alla gestione di eventuali sinistri.'
    ],
    coverage: [
      'Accesso a oltre 50 compagnie',
      'Prodotti di tutte le categorie',
      'Soluzioni standard e personalizzate',
      'Coperture nazionali e internazionali',
      'Prodotti innovativi e tradizionali',
      'Polizze per ogni budget'
    ]
  }
];
