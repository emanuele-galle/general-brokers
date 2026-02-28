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
    claims: 'sinistri@generalbrokers.it',
    pec: 'info@pec.generalbrokers.it'
  },

  // Dati bancari
  iban: 'IT97 Q 05034 01689 000000001802',
  ccPostale: '12647202',

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
  companyType: 'GESTIONI ASSICURATIVE',
  vatNumber: '03740950153',
  fiscalCode: '03740950153',
  shareCapital: '€ 70.000,00 i.v.',
  cciaa: '966954',
  tribunale: '176189-5125-39',
  rui: {
    number: 'B000072481',
    section: 'B',
    full: 'Iscrizione RUI: B000072481'
  },
  ivass: 'La Società è soggetta alla vigilanza dell\'IVASS - Registro Unico degli Intermediari assicurativi e riassicurativi.',
  ivassVerifica: 'È possibile verificare la regolare iscrizione al RUI (Sezione B n. B000072481) collegandosi al sito www.ivass.it',
  isvapCircolare: 'A norma della circolare ISVAP 393/D del 17/01/2000 si comunica che il Legale Rappresentante e gestore preposto alla mediazione tramite internet è: Luigi Bonardi (Amministratore Unico - Broker - RUI: B000186864)'
} as const;
