import Layout from '@/components/Layout';
import Image from 'next/image';
import {
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaFileAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClipboardList,
  FaSearchDollar,
  FaHandshake,
  FaPhone,
  FaLightbulb
} from 'react-icons/fa';

export default function RelazionePreventiva() {
  return (
    <Layout
      title="Relazione Preventiva - Risk Management | General Brokers Milano"
      description="Relazione Preventiva personalizzata per aziende e famiglie. Analisi rischi, gestione assicurativa e Risk Management professionale da General Brokers Milano."
      keywords="relazione preventiva, risk management, analisi rischi, gestione assicurativa, broker Milano, consulenza rischi aziendali"
    >
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Milano Bosco verticale.jpg"
            alt="Risk Management - Relazione Preventiva General Brokers Milano"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
        </div>

        <div className="container-custom text-center relative z-10 px-4">
          <div className="inline-block bg-accent-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-accent-400/30">
            <span className="text-xs md:text-sm font-semibold text-accent-100 tracking-wide">Servizio Esclusivo</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8">
            Relazione Preventiva
          </h1>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
            Il servizio professionale di <strong>Risk Management</strong> per una gestione completa
            e consapevole dei tuoi rischi assicurativi
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#come-richiederla"
              className="btn-primary bg-white text-primary-600 hover:bg-accent-50 hover:text-accent-700 inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold shadow-2xl text-sm md:text-base"
            >
              Richiedi la Tua Relazione
              <FaArrowRight />
            </a>
            <a
              href="#cosa-include"
              className="btn-outline border-white text-white hover:bg-white/10 inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold text-sm md:text-base"
            >
              Scopri di Più
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Introduzione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Che Cos'è
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Risk Management <span className="text-gradient">Professionale</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Una metodologia evoluta per la gestione completa dei rischi assicurativi
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 mb-12">
            <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
              <p>
                Nel corso degli anni si è affermata una modalità di valutazione delle previsioni,
                che vede nella prestazione di una serie di servizi il compendio ideale per una
                <strong className="text-primary-600"> visione complessiva</strong> di tutte le problematiche
                legate alla gestione dei rischi.
              </p>
              <p>
                Quest'insieme di servizi ha preso il nome di <strong className="text-accent-600">Risk Management</strong>.
              </p>
            </div>
          </div>

          {/* Evoluzione Timeline */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary-600 h-full">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Prima</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Un settore autonomo ed esclusivo per le <strong>grandi Aziende</strong>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-accent-600 h-full">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Poi</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Un servizio esterno offerto dai brokers alle <strong>medie e piccole Aziende</strong>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-secondary-600 h-full">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-secondary-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Ora</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Disponibile tramite General Brokers per <strong>Famiglie e Aziende</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Il Nostro Approccio */}
      <section className="relative section-padding overflow-hidden">
        {/* Sfondo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Il Nostro Metodo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Non Vendiamo Polizze, <span className="text-gradient">Vendiamo Servizi</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
            <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
              <p>
                Il Risk Management opera a favore di una <strong className="text-primary-600">consulenza</strong> (e non del mezzo, la polizza) che,
                partendo dall'analisi dei rischi per approdare alle implicazioni economiche,
                fornisce un'<strong className="text-accent-600">assistenza a 360°</strong>.
              </p>
              <p>
                Il broker ed il suo Cliente perseguono <strong>lo stesso obiettivo</strong>: soddisfare quel bisogno di sicurezza
                che solo con l'intervento di un professionista, estraneo agli interessi delle varie compagnie d'assicurazione,
                può essere raggiunto e mantenuto nel tempo.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <FaLightbulb className="text-5xl text-accent-300 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                Questo approccio crea le premesse per intendere veramente
                <strong className="text-accent-200"> chi sia e da quale parte stia il broker</strong>
              </p>
              <p className="text-lg text-primary-100">
                Contrariamente ai sedicenti consulenti, che in realtà vendono solo polizze
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Due Target: Aziende e Famiglie */}
      <section id="cosa-include" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-700 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Per Chi
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Due Soluzioni <span className="text-gradient">Su Misura</span>
            </h2>
            <p className="text-xl text-secondary-600">
              La Relazione Preventiva è disponibile sia per aziende che per famiglie
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Per l'Azienda */}
            <div className="group relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-600">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-200 to-transparent rounded-bl-full opacity-30"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaBuilding className="text-4xl text-white" />
                </div>

                <h3 className="text-3xl font-bold text-secondary-900 mb-6">Per l'Azienda</h3>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-bold text-primary-700 mb-3">ASPETTI GENERALI:</h4>
                  <div className="space-y-2 text-secondary-700">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Nozioni di Rischio</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Il Risk Management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Scelta del Criterio di Gestione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Ruolo dell'Assicurazione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Ruolo del Broker</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-bold text-primary-700 mb-3">PROBLEMATICHE ASSICURATIVE:</h4>
                  <div className="space-y-2 text-secondary-700">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Analisi dell'Azienda</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Rischi Specifici dell'Azienda</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Prospetto Contratti in Corso</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Analisi Dettagliata Contratti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Coperture Mancanti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Note Conclusive</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-primary-700 mb-3">VERIFICHE ANNUALI:</h4>
                  <div className="space-y-2 text-secondary-700">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Prospetto Contratti Gestiti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Prospetto Sinistri Gestiti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 text-lg flex-shrink-0 mt-1" />
                      <span>Note d'Aggiornamento</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Per la Famiglia */}
            <div className="group relative bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-accent-600">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-200 to-transparent rounded-bl-full opacity-30"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FaUsers className="text-4xl text-white" />
                </div>

                <h3 className="text-3xl font-bold text-secondary-900 mb-6">Per la Famiglia</h3>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-bold text-accent-700 mb-3">ASPETTI GENERALI:</h4>
                  <div className="space-y-2 text-secondary-700">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Nozioni di Rischio</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Il Risk Management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Scelta del Criterio di Gestione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Ruolo dell'Assicurazione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Ruolo del Broker</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-bold text-accent-700 mb-3">PROBLEMATICHE ASSICURATIVE:</h4>
                  <div className="space-y-2 text-secondary-700">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Analisi della Famiglia</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Rischi della Famiglia</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Prospetto Contratti in Corso</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Analisi Dettagliata Contratti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Coperture Mancanti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Il Mandato Standard</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-accent-700 mb-3">VERIFICHE ANNUALI:</h4>
                  <div className="space-y-2 text-secondary-700">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Prospetto Contratti Gestiti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent-600 text-lg flex-shrink-0 mt-1" />
                      <span>Prospetto Sinistri Gestiti</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Il Processo */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Come Funziona
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Il Processo <span className="text-gradient">in 4 Fasi</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                icon: FaClipboardList,
                title: 'Analisi',
                description: 'Studio approfondito della tua situazione attuale e dei rischi specifici',
                color: 'primary'
              },
              {
                step: '2',
                icon: FaSearchDollar,
                title: 'Valutazione',
                description: 'Esame dettagliato dei contratti in corso e identificazione gap',
                color: 'accent'
              },
              {
                step: '3',
                icon: FaFileAlt,
                title: 'Relazione',
                description: 'Redazione della Relazione Preventiva completa e personalizzata',
                color: 'secondary'
              },
              {
                step: '4',
                icon: FaHandshake,
                title: 'Monitoraggio',
                description: 'Verifiche annuali e aggiornamenti continui del tuo programma',
                color: 'primary'
              }
            ].map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${phase.color}-600 to-${phase.color}-700 rounded-t-2xl`}></div>

                  <div className={`w-16 h-16 bg-gradient-to-br from-${phase.color}-600 to-${phase.color}-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-3xl text-white" />
                  </div>

                  <div className={`inline-block bg-${phase.color}-100 text-${phase.color}-700 px-4 py-1 rounded-full text-sm font-bold mb-3`}>
                    Fase {phase.step}
                  </div>

                  <h4 className="text-xl font-bold text-secondary-900 mb-3">{phase.title}</h4>
                  <p className="text-secondary-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="relative section-padding overflow-hidden">
        {/* Sfondo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              I Vantaggi
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Perché Richiedere una <span className="text-gradient">Relazione Preventiva</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: 'Visione Completa',
                description: 'Panoramica totale di tutte le problematiche legate alla gestione dei rischi',
                color: 'primary'
              },
              {
                icon: FaChartLine,
                title: 'Pianificazione Budget',
                description: 'Strumento ideale per la pianificazione economica e delle previsioni',
                color: 'accent'
              },
              {
                icon: FaClipboardList,
                title: 'Analisi Professionale',
                description: 'Esame approfondito condotto da professionisti indipendenti',
                color: 'secondary'
              },
              {
                icon: FaHandshake,
                title: 'Assistenza Continua',
                description: 'Monitoraggio costante e verifiche annuali del tuo programma',
                color: 'primary'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-600">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color}-600 to-${benefit.color}-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">{benefit.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Come Richiederla */}
      <section id="come-richiederla" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-700 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Richiedi Ora
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Come Richiedere la <span className="text-gradient">Relazione Preventiva</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Contattaci per ricevere la tua Relazione Preventiva personalizzata
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-10 md:p-14 shadow-2xl text-white">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-6">È Semplice e Gratuito</h3>
              <p className="text-xl text-primary-100 leading-relaxed">
                La Relazione Preventiva è un servizio esclusivo che offriamo gratuitamente
                per valutare insieme la tua situazione assicurativa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/contatti"
                className="group bg-white rounded-2xl p-8 text-center hover:bg-primary-50 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <FaFileAlt className="text-4xl text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Compila il Form</h4>
                <p className="text-sm text-secondary-600">
                  Inviaci una richiesta tramite il modulo contatti
                </p>
              </a>

              <a
                href="tel:026698.4847"
                className="group bg-white rounded-2xl p-8 text-center hover:bg-primary-50 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <FaPhone className="text-4xl text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Chiamaci</h4>
                <p className="text-sm text-secondary-600">
                  02 6698.4847
                </p>
              </a>

              <a
                href="mailto:info@generalbrokers.it"
                className="group bg-white rounded-2xl p-8 text-center hover:bg-primary-50 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <FaArrowRight className="text-4xl text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Invia Email</h4>
                <p className="text-sm text-secondary-600">
                  info@generalbrokers.it
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto per una Gestione Professionale dei Tuoi Rischi?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Richiedi subito la tua Relazione Preventiva gratuita. Il nostro team di esperti è pronto ad analizzare la tua situazione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contatti"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center gap-2"
            >
              Richiedi Relazione Gratuita
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
