import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ServiceModal from '@/components/ServiceModal';
import GenericHero from '@/components/GenericHero';
import CTASection from '@/components/CTASection';
import { servicesData } from '@/data/servicesData';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function Servizi() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <Layout
      title="Servizi Assicurativi - General Brokers | Broker Milano"
      description="Scopri tutti i servizi di General Brokers: gestione polizze, sinistri, consulenza rischi, assicurazioni aziendali e per privati. Soluzioni personalizzate a Milano."
      keywords="servizi assicurativi Milano, gestione polizze, gestione sinistri, consulenza rischi, assicurazioni aziendali, assicurazioni privati"
    >
      <GenericHero
        title="I Nostri Servizi"
        description="Soluzioni assicurative complete per aziende e privati. Dalla consulenza alla gestione sinistri, siamo al tuo fianco in ogni momento."
      />

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="border border-secondary-200 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-xl text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-2">{service.title}</h2>
                      <p className="text-secondary-600">{service.shortDescription}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 4).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0 text-xs" />
                          <span className="text-secondary-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedService(index)}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
                  >
                    Scopri di pi&ugrave;
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA Richiedi Preventivo */}
          <div className="mt-16 border border-secondary-200 rounded-xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-3">Richiedi Preventivo</h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Contattaci per un preventivo gratuito e personalizzato.
            </p>
            <Link
              href="/contatti"
              className="btn-primary inline-flex items-center gap-2"
            >
              Richiedi Preventivo Gratuito
              <FaArrowRight />
            </Link>
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
      <section className="py-20 md:py-28 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Come Lavoriamo</h2>
            <p className="section-subtitle">
              Un processo semplice e trasparente per la tua sicurezza
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '1', title: 'Analisi', desc: 'Ascoltiamo le tue esigenze e analizziamo la tua situazione' },
                { num: '2', title: 'Ricerca', desc: 'Confrontiamo le offerte sul mercato per trovare le migliori soluzioni' },
                { num: '3', title: 'Proposta', desc: 'Ti presentiamo soluzioni personalizzate con informazioni chiare' },
                { num: '4', title: 'Assistenza', desc: 'Ti supportiamo nel tempo con gestione e consulenza continua' },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="consultation"
        theme="dark"
      />
    </Layout>
  );
}
