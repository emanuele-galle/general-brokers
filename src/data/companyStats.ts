/**
 * Statistiche e informazioni aziendali centralizzate per General Brokers
 * Utilizzare questi dati in tutto il sito per evitare duplicazioni
 */

/**
 * Anno di fondazione e anni di esperienza
 */
export const foundingYear = 1977;
export const currentYear = new Date().getFullYear();
export const yearsOfExperience = currentYear - foundingYear;

/**
 * Statistiche aziendali
 */
export const companyStats = {
  founded: foundingYear,
  experience: yearsOfExperience,
  experienceText: `${yearsOfExperience}+ anni`,
  experienceFull: `${yearsOfExperience}+ anni di esperienza`,

  // Tagline e messaggi chiave
  tagline: "l'assicurezza firmata",
  taglineFull: "l'assicurezza firmata dal 1977",

  // Messaggi di brand
  brandMessages: {
    security: 'Mettere in mani sicure i reali bisogni di sicurezza',
    service: 'Un servizio dinamico, accurato, imparziale e personalizzato',
    independence: 'Broker assicurativo indipendente',
    expertise: 'Competenza, affidabilità e soluzioni personalizzate'
  },

  // Numeri chiave (aggiornare questi valori secondo necessità)
  metrics: {
    clients: '500+',
    policies: '1000+',
    satisfaction: '98%',
    team: '10+'
  }
} as const;

/**
 * Valori aziendali
 */
export const companyValues = [
  {
    title: 'Indipendenza',
    description: 'Lavoriamo esclusivamente nell\'interesse dei nostri clienti, senza vincoli con compagnie assicurative',
    icon: 'FaAward'
  },
  {
    title: 'Competenza',
    description: 'Formazione continua e certificazioni professionali per garantire la massima qualità del servizio',
    icon: 'FaGraduationCap'
  },
  {
    title: 'Esperienza',
    description: `Dal ${foundingYear} al servizio di aziende e privati con professionalità e dedizione`,
    icon: 'FaCertificate'
  },
  {
    title: 'Trasparenza',
    description: 'Analisi chiare e complete per permetterti di fare scelte consapevoli',
    icon: 'FaCheckCircle'
  }
] as const;

/**
 * Timeline aziendale
 */
export const milestones = [
  {
    year: '1977',
    title: 'Fondazione',
    description: 'General Brokers nasce a Milano come broker assicurativo indipendente, con l\'obiettivo di offrire consulenza imparziale ai clienti.'
  },
  {
    year: '1990',
    title: 'Espansione Servizi',
    description: 'Ampliamento del portafoglio servizi con focus su grandi aziende e rischi complessi. Apertura della divisione corporate.'
  },
  {
    year: '2005',
    title: 'Certificazione RUI',
    description: 'Ottenimento della certificazione RUI e adeguamento alle nuove normative IVASS per intermediari assicurativi.'
  },
  {
    year: '2015',
    title: 'Innovazione Digitale',
    description: 'Implementazione di sistemi digitali per la gestione clienti e sinistri, mantenendo il tocco personale del servizio.'
  },
  {
    year: currentYear.toString(),
    title: 'Oggi',
    description: `${yearsOfExperience} anni di esperienza, centinaia di clienti soddisfatti e un team di professionisti certificati sempre al vostro servizio.`
  }
] as const;

/**
 * Certificazioni e accreditamenti
 */
export const certifications = [
  {
    name: 'RUI',
    description: 'Registro Unico Intermediari',
    number: 'B000072481',
    icon: 'FaCertificate'
  },
  {
    name: 'IVASS',
    description: 'Istituto Vigilanza Assicurazioni',
    verified: true,
    icon: 'FaCheckCircle'
  }
] as const;

/**
 * Helper functions
 */
export const helpers = {
  getExperienceYears: () => yearsOfExperience,
  getFoundedText: () => `dal ${foundingYear}`,
  getExperienceText: () => `${yearsOfExperience}+ anni di esperienza`,
  getTagline: () => companyStats.tagline,
  getFullTagline: () => companyStats.taglineFull
};
