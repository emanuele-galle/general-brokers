import { useState } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import images from '@/utils/images';
import ServiceModal from '@/components/ServiceModal';
import ServiceCategories from '@/components/ServiceCategories';
import CTASection from '@/components/CTASection';
import { servicesData } from '@/data/servicesData';
import {
  FaFileContract,
  FaShieldAlt,
  FaChartLine,
  FaBuilding,
  FaUserShield,
  FaHandshake,
  FaArrowRight,
  FaPhone
} from 'react-icons/fa';

export default function Servizi() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Old services data for reference (will be replaced)
  const servicesOld = [
    {
      icon: FaFileContract,
      title: 'Gestione Polizze',
      description: 'Analisi completa delle tue esigenze assicurative, sottoscrizione e gestione di polizze personalizzate per ogni situazione.',
      features: [
        'Analisi del rischio personalizzata',
        'Ricerca delle migliori soluzioni sul mercato',
        'Sottoscrizione e attivazione polizze',
        'Gestione e rinnovi',
        'Assistenza continua'
      ],
      href: '/servizi/gestione-polizze'
    },
    {
      icon: FaShieldAlt,
      title: 'Gestione Sinistri',
      description: 'Supporto completo in caso di sinistro: dalla denuncia alla liquidazione, ti assistiamo in ogni fase del processo.',
      features: [
        'Assistenza immediata in caso di sinistro',
        'Gestione delle denunce',
        'Coordinamento con le compagnie',
        'Supporto nella documentazione',
        'Monitoraggio delle liquidazioni'
      ],
      href: '/servizi/gestione-sinistri'
    },
    {
      icon: FaChartLine,
      title: 'Consulenza e Analisi Rischi',
      description: 'Valutazione professionale dei rischi aziendali e personali per identificare le aree di vulnerabilità e le migliori strategie di protezione.',
      features: [
        'Risk assessment completo',
        'Identificazione delle vulnerabilità',
        'Strategie di mitigazione del rischio',
        'Ottimizzazione delle coperture',
        'Report dettagliati'
      ],
      href: '/servizi/consulenza-rischi'
    },
    {
      icon: FaBuilding,
      title: 'Assicurazioni Aziendali',
      description: 'Soluzioni complete per proteggere la tua azienda: dalla responsabilità civile alla protezione del patrimonio aziendale.',
      features: [
        'Responsabilità Civile aziendale',
        'Danni materiali a beni aziendali',
        'Business Interruption',
        'Cyber Risk',
        'Flotte aziendali'
      ],
      href: '/servizi/assicurazioni-aziendali'
    },
    {
      icon: FaUserShield,
      title: 'Assicurazioni per Privati',
      description: 'Protezione completa per te e la tua famiglia: auto, casa, salute, vita e risparmio con soluzioni su misura.',
      features: [
        'RC Auto e Moto',
        'Assicurazione Casa',
        'Tutela Salute',
        'Polizze Vita',
        'Previdenza e risparmio'
      ],
      href: '/servizi/assicurazioni-privati'
    },
    {
      icon: FaHandshake,
      title: 'Intermediazione Assicurativa',
      description: 'Come broker indipendenti, analizziamo il mercato per trovare le soluzioni più vantaggiose per te, senza vincoli con compagnie.',
      features: [
        'Confronto di diverse compagnie',
        'Negoziazione delle condizioni',
        'Indipendenza e imparzialità',
        'Ottimizzazione dei costi',
        'Servizio personalizzato'
      ],
      href: '/servizi'
    }
  ];

  return (
    <Layout
      title="Servizi Assicurativi - General Brokers | Broker Milano"
      description="Scopri tutti i servizi di General Brokers: gestione polizze, sinistri, consulenza rischi, assicurazioni aziendali e per privati. Soluzioni personalizzate a Milano."
      keywords="servizi assicurativi Milano, gestione polizze, gestione sinistri, consulenza rischi, assicurazioni aziendali, assicurazioni privati"
    >
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Milano Bosco verticale.jpg"
            alt="Bosco Verticale Milano - Servizi General Brokers"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">I Nostri Servizi</h1>
            <p className="text-lg md:text-xl text-primary-50">
              Soluzioni assicurative complete per aziende e privati. Dalla consulenza alla gestione sinistri, siamo al tuo fianco in ogni momento.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories - 4 Macro Aree */}
      <ServiceCategories />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-2xl text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-2">{service.title}</h2>
                      <p className="text-secondary-600">{service.shortDescription}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-secondary-900">Vantaggi principali:</h3>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 5).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span className="text-secondary-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedService(index)}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
                  >
                    Scopri di più
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modals */}
      {servicesData.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <ServiceModal
            key={service.id}
            isOpen={selectedService === index}
            onClose={() => setSelectedService(null)}
            title={service.title}
            icon={<IconComponent />}
            description={service.description}
            benefits={service.benefits}
            details={service.details}
            coverage={service.coverage}
          />
        );
      })}

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Come Lavoriamo</h2>
            <p className="section-subtitle">
              Un processo semplice e trasparente per la tua sicurezza
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Analisi</h3>
                <p className="text-sm text-secondary-600">
                  Ascoltiamo le tue esigenze e analizziamo la tua situazione
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Ricerca</h3>
                <p className="text-sm text-secondary-600">
                  Confrontiamo le offerte sul mercato per trovare le migliori soluzioni
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Proposta</h3>
                <p className="text-sm text-secondary-600">
                  Ti presentiamo soluzioni personalizzate con informazioni chiare
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Assistenza</h3>
                <p className="text-sm text-secondary-600">
                  Ti supportiamo nel tempo con gestione e consulenza continua
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="custom"
        title="Hai bisogno di una consulenza?"
        description="I nostri esperti sono pronti ad aiutarti a trovare la soluzione assicurativa più adatta alle tue esigenze."
      />
    </Layout>
  );
}
