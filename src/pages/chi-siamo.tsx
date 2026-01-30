import Layout from '@/components/Layout';
import Image from 'next/image';
import { contactInfo, legalInfo } from '@/data/contactInfo';
import { yearsOfExperience } from '@/data/companyStats';
import {
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaExclamationTriangle,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaCheckCircle,
  FaAward
} from 'react-icons/fa';

export default function ChiSiamo() {
  return (
    <Layout
      title="Chi Siamo - General Brokers | Broker Assicurativo Milano dal 1977"
      description="General Brokers: broker assicurativo indipendente a Milano dal 1977. Competenza, indipendenza e servizio personalizzato per famiglie e aziende."
    >
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Galleria-Vittorio-Emanuele.webp"
            alt="Galleria Vittorio Emanuele Milano - General Brokers"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 px-4">
            Chi Siamo
          </h1>
          <div className="w-16 md:w-20 h-1 bg-white/40 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Dal <strong>1977</strong> a Milano, un preciso punto di riferimento per persone e piccole aziende
            che sentono il bisogno di essere seguiti da un consulente assicurativo <strong>indipendente</strong>.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section id="broker" className="relative section-padding overflow-hidden">
        {/* Sfondo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-accent-50"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              La Nostra Missione
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Broker vs Agente: <span className="text-gradient">La Differenza</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Mettere in mani sicure quello che hai costruito per la tua famiglia e la tua azienda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card Broker */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-primary-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Il Broker</h3>
              </div>
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  Il broker rappresenta <strong className="text-primary-600">TE, il cliente</strong>, e si sostituisce nella gestione complessiva
                  di tutte le problematiche assicurative presenti e future.
                </p>
                <div className="flex items-start gap-3 bg-primary-50 p-4 rounded-xl">
                  <FaCheckCircle className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                  <p className="font-semibold">
                    Unico interlocutore professionista, indipendente da tutte le Compagnie
                  </p>
                </div>
              </div>
            </div>

            {/* Card Agente */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-secondary-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-2xl flex items-center justify-center">
                  <FaHandshake className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">L'Agente</h3>
              </div>
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  L'agente rappresenta <strong>una compagnia d'assicurazione</strong> e agisce esclusivamente
                  nell'interesse della stessa, fino a quando ne ha convenienza.
                </p>
                <div className="flex items-start gap-3 bg-secondary-100 p-4 rounded-xl">
                  <FaExclamationTriangle className="text-secondary-600 text-xl flex-shrink-0 mt-1" />
                  <p className="font-semibold">
                    Vincolato agli interessi della compagnia che rappresenta
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Box */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6 opacity-30">"</div>
              <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                Standoti vicino e guardandoci in faccia ogni volta che ne sentirai la necessità
              </p>
              <div className="w-20 h-1 bg-white/30 mx-auto mb-4"></div>
              <p className="text-lg text-primary-100 italic">
                Così, come si usa in quei villaggi non ancora globali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="societa" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Cosa Facciamo per Te
            </h2>
            <p className="text-xl text-secondary-600">
              Tre aree di competenza al servizio della tua sicurezza
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Gestione Polizze */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaFileAlt className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Gestione Polizze</h3>
                <p className="text-sm text-secondary-600 mb-6 italic font-semibold">
                  Check-up assicurativi, analisi costi e amministrazione
                </p>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Relazione panoramica su polizze in corso</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Consulenza in tempo reale telefonica e a domicilio</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Controllo scadenze e aggiornamenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>Gestione personalizzata con professionista esperto</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Gestione Sinistri */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaExclamationTriangle className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Gestione Sinistri</h3>
                <p className="text-sm text-secondary-600 mb-6 italic font-semibold">
                  Istruzione pratica, scelta di fiduciari e definizione
                </p>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent-600 mt-1 flex-shrink-0" />
                  <span>Istruisce personalmente tutte le pratiche</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent-600 mt-1 flex-shrink-0" />
                  <span>Contatta la Compagnia per tuo conto</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent-600 mt-1 flex-shrink-0" />
                  <span>Incarica periti, legali ed esperti specifici</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-accent-600 mt-1 flex-shrink-0" />
                  <span>Responsabile a 360° per tutta la durata</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Consulenza Specialistica */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaLightbulb className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Consulenza Specialistica</h3>
                <p className="text-sm text-secondary-600 mb-6 italic font-semibold">
                  Polizze all-risks, multirischi e rischi speciali
                </p>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                  <span>All-risks per pellicciai, orefici, costruttori</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                  <span>Multirischi per artigiani e piccole industrie</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                  <span>Rischi speciali per opere complesse</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                  <span>Rendite differite e immediate</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Broker Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Sfondo con pattern geometrico */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-primary-50"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Il Metodo General Brokers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Come Lavoriamo <span className="text-gradient">Per Te</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A differenza dell'agente, il broker lavora solo per te
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">Analizza</h3>
              <p className="text-secondary-600 text-center leading-relaxed">
                I tuoi bisogni reali attraverso un'analisi approfondita
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-600 to-accent-700 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">Confronta</h3>
              <p className="text-secondary-600 text-center leading-relaxed">
                Il mercato per te trovando le migliori soluzioni
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaHandshake className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">Negozia</h3>
              <p className="text-secondary-600 text-center leading-relaxed">
                Le migliori condizioni economiche per te
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 text-center">Assiste</h3>
              <p className="text-secondary-600 text-center leading-relaxed">
                Sempre al tuo fianco in ogni momento
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-l-4 border-primary-600">
            <p className="text-xl text-secondary-700 leading-relaxed text-center max-w-4xl mx-auto">
              Un unico <strong className="text-primary-600">interlocutore professionale</strong>,
              indipendente da tutte le Compagnie, che tutela i tuoi interessi con
              <strong className="text-accent-600"> competenza e trasparenza</strong> assoluta.
            </p>
          </div>
        </div>
      </section>

      {/* Enti e Certificazioni */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-700 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Certificati e Vigilati
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              La Tua Sicurezza è <span className="text-gradient">Garantita</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Operiamo sotto la vigilanza degli enti di settore
            </p>
          </div>

          {/* Box RUI */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                    <FaAward className="text-4xl text-accent-300" />
                    <h3 className="text-2xl font-bold">Registro RUI</h3>
                  </div>
                  <p className="text-primary-100 text-lg">
                    Registro Unico degli Intermediari Assicurativi
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                  <p className="text-sm text-primary-100 mb-1">Sezione B - Numero</p>
                  <p className="text-3xl font-mono font-bold">{legalInfo.rui.number}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Loghi Enti */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* IVASS */}
            <a
              href="https://www.ivass.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full h-32 mb-6 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src="/images/logo/ivass-logo.jpg"
                  alt="IVASS - Istituto per la Vigilanza sulle Assicurazioni"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-center font-bold text-secondary-900 mb-2">IVASS</h4>
              <p className="text-center text-sm text-secondary-600">
                Istituto Vigilanza Assicurazioni
              </p>
            </a>

            {/* AIBA */}
            <a
              href="https://aiba.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full h-32 mb-6 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src="/images/logo/aiba-logo.png"
                  alt="AIBA - Associazione Italiana Brokers di Assicurazioni"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-center font-bold text-secondary-900 mb-2">AIBA</h4>
              <p className="text-center text-sm text-secondary-600">
                Associazione Italiana Brokers
              </p>
            </a>

            {/* CONSAP */}
            <a
              href="https://www.consap.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full h-32 mb-6 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src="/images/logo/consap_logo.jpg"
                  alt="CONSAP - Concessionaria Servizi Assicurativi Pubblici"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-center font-bold text-secondary-900 mb-2">CONSAP</h4>
              <p className="text-center text-sm text-secondary-600">
                Servizi Assicurativi Pubblici
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section className="relative section-padding overflow-hidden">
        {/* Sfondo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              I Nostri Valori
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              {yearsOfExperience} Anni di <span className="text-gradient">Eccellenza</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Tre pilastri che guidano ogni nostra azione
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Indipendenza */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaShieldAlt className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Indipendenza</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Nessun vincolo con compagnie assicurative. Lavoriamo esclusivamente per i nostri clienti,
                  garantendo imparzialità totale.
                </p>
              </div>
            </div>

            {/* Competenza */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaAward className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Competenza</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Oltre {yearsOfExperience} anni nel settore, formazione continua e certificazioni professionali
                  per consulenza di eccellenza.
                </p>
              </div>
            </div>

            {/* Personalizzazione */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-100 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaUsers className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Personalizzazione</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ogni cliente è unico. Analizziamo con attenzione ogni situazione per creare
                  soluzioni su misura, mai standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sede Milano */}
      <section id="dove-siamo" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-700 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Vieni a Trovarci
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              La Nostra Sede a <span className="text-gradient">Milano</span>
            </h2>
            <p className="text-xl text-secondary-600">
              Ti aspettiamo in Via Tonale, 20
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Info */}
              <div className="space-y-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Indirizzo</h3>
                  </div>
                  <p className="text-lg ml-15">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.postalCode} {contactInfo.address.city}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Telefono</h3>
                  </div>
                  <p className="text-lg ml-15">
                    <a href={`tel:${contactInfo.phone.tel}`} className="text-accent-200 hover:text-white font-semibold transition-colors">
                      {contactInfo.phone.display}
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3 text-primary-100 italic">
                  <FaCheckCircle className="text-accent-300 text-xl flex-shrink-0 mt-1" />
                  <p>
                    Facilmente raggiungibile con mezzi pubblici<br />
                    Spazi confortevoli per consulenze personalizzate
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="/contatti#mappa"
                  className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center gap-2"
                >
                  Vedi Mappa e Indicazioni
                  <FaArrowRight />
                </a>
                <a
                  href="/contatti"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center gap-2"
                >
                  Prenota un Appuntamento
                  <FaArrowRight />
                </a>
                <a
                  href={`tel:${contactInfo.phone.tel}`}
                  className="text-center text-white hover:text-accent-200 font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <FaPhone />
                  Chiamaci Ora
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Conclusione */}
      <section className="relative section-padding overflow-hidden">
        {/* Sfondo gradiente scuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-900"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-5xl relative z-10">
          <div className="text-center">
            <p className="text-2xl md:text-3xl leading-relaxed mb-12 text-primary-200 font-semibold">
              Cosa significa nei fatti ed in poche parole?
            </p>

            {/* Content Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-accent-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-3xl text-accent-300" />
                </div>
                <p className="text-white leading-relaxed">
                  Anche se non sei il signor FIAT puoi ottenere <strong>servizi ad elevato valore aggiunto</strong>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-primary-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-3xl text-primary-300" />
                </div>
                <p className="text-white leading-relaxed">
                  <strong>Competenza, professionalità e organizzazione</strong> accessibili senza grandi sforzi economici
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-accent-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-3xl text-accent-300" />
                </div>
                <p className="text-white leading-relaxed">
                  Siamo <strong>interessati a Te</strong> che hai fatto della Tua famiglia una ragione di vita
                </p>
              </div>
            </div>

            {/* Quote finale */}
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl">
              <div className="space-y-8">
                <div className="text-6xl md:text-7xl text-accent-300 opacity-50">"</div>
                <p className="text-2xl md:text-4xl font-heading italic leading-relaxed text-white">
                  Non siamo James Joyce<br />
                  e non siamo a Dublino,<br />
                  <strong className="text-accent-300">siamo a Milano.</strong>
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-primary-400 mx-auto rounded-full"></div>
                <p className="text-xl md:text-2xl text-primary-200">
                  E sono quasi <strong className="text-white">cinquant'anni</strong>
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-primary-400 mx-auto rounded-full"></div>
                <p className="text-3xl md:text-4xl font-bold text-white mt-8">
                  Tutto qua!
                </p>
                <p className="text-lg text-secondary-400 italic">
                  Forse avresti voluto una conclusione più ridondante? Noi non lo crediamo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vuoi Saperne di Più?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Contattaci per una consulenza gratuita. Siamo qui per ascoltarti e trovare le soluzioni migliori per te.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contatti"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center gap-2"
            >
              Richiedi Consulenza Gratuita
              <FaArrowRight />
            </a>
            <a
              href="tel:026698.4847"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center gap-2"
            >
              <FaPhone />
              Chiamaci: 02 6698.4847
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
