/**
 * Informazioni di contatto centralizzate per General Brokers
 * Utilizzare questi dati in tutto il sito per evitare duplicazioni
 */

export const contactInfo = {
  // Contatti principali
  phone: {
    display: '02 6698.4847',
    tel: '026698.4847',
    international: '+39 02 6698.4847'
  },

  fax: {
    display: '02 6707.2163',
    tel: '026707.2163'
  },

  email: {
    general: 'info@generalbrokers.it',
    claims: 'sinistri@generalbrokers.it'
  },

  // Indirizzo
  address: {
    street: 'Via Tonale, 20',
    city: 'Milano',
    postalCode: '20125',
    full: 'Via Tonale, 20 - 20125 Milano',
    formatted: 'Via Tonale, 20\n20125 Milano'
  },

  // Social Media
  social: {
    linkedin: 'https://www.linkedin.com/company/general-brokers',
    facebook: 'https://www.facebook.com/generalbrokers'
  },

  // Orari
  hours: {
    weekdays: 'Lunedì - Venerdì: 9:00 - 18:00',
    saturday: 'Sabato: Su appuntamento',
    sunday: 'Domenica: Chiuso'
  }
} as const;

/**
 * Informazioni legali e registrazioni
 */
export const legalInfo = {
  companyName: 'General Brokers Srl',
  vatNumber: '03740950153',
  fiscalCode: '03740950153',
  shareCapital: '€ 70.000,00',
  rui: {
    number: 'B000072481',
    section: 'B',
    full: 'Iscrizione RUI: B000072481'
  },
  ivass: 'Vigilanza IVASS - Registro Unico degli Intermediari assicurativi e riassicurativi Sez. B n. B000072481'
} as const;

/**
 * Helper functions per formattazione
 */
export const formatters = {
  phoneLink: (phone: string) => `tel:${phone.replace(/\s/g, '')}`,
  emailLink: (email: string) => `mailto:${email}`,
  addressForGoogle: () => encodeURIComponent(contactInfo.address.full)
};
