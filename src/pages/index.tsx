import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FourPillars from '@/components/FourPillars';
import CioCheServe from '@/components/CioCheServe';
import ServiceModal from '@/components/ServiceModal';
import StatsGrid from '@/components/StatsGrid';
import { servicesData } from '@/data/servicesData';
import {
  FaArrowRight,
} from 'react-icons/fa';

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  return (
    <Layout
      title="Broker Assicurativo Milano | General Brokers dal 1977"
      description="General Brokers: broker assicurativo indipendente a Milano dal 1977. Gestione polizze, sinistri e consulenza personalizzata per privati e aziende. Certificazione IVASS RUI B000072481."
      keywords="broker assicurativo Milano, intermediario assicurativo, gestione sinistri Milano, polizze assicurative, consulenza assicurativa, General Brokers, IVASS, assicurazioni aziende Milano, assicurazioni privati"
    >
      {/* Hero Section con brand identity storica */}
      <HeroSection />

      {/* Four Pillars - Elementi identitari chiave */}
      <FourPillars />

      {/* Office Gallery - Immagini dell'ufficio */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Il Nostro Ufficio a Milano</h2>
            <p className="section-subtitle">
              Vieni a trovarci nella nostra sede in Via Tonale, 20 - Milano
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/office/office-1.jpg"
                alt="Sede General Brokers Milano - Via Tonale 20 - Reception e area accoglienza clienti"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/office/office-2.jpg"
                alt="Ufficio broker assicurativo General Brokers Milano - Area consulenza"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/office/office-3.jpg"
                alt="Sala riunioni General Brokers - Consulenza assicurativa personalizzata Milano"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CiòCheServe - Filosofia aziendale */}
      <CioCheServe />

      {/* Services Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">I Nostri Servizi Assicurativi</h2>
            <p className="section-subtitle">
              Soluzioni assicurative complete per privati e aziende a Milano
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="card">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-secondary-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <button
                    onClick={() => setSelectedService(index)}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
                  >
                    Scopri di più <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
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


      {/* Certificazioni e Garanzie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Certificazioni IVASS e Garanzie</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Broker assicurativo certificato dal 1977 - Iscrizione RUI B000072481
            </p>
          </div>

          {/* Loghi Certificazioni */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-center">
                <img
                  src="/images/logo/ivass-logo.jpg"
                  alt="IVASS - Istituto per la Vigilanza sulle Assicurazioni"
                  className="h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-secondary-600">
                  Registro Unico Intermediari
                </p>
                <p className="text-sm font-mono text-primary-600 font-bold">
                  RUI B000072481
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/logo/aiba-logo.png"
                  alt="AIBA - Associazione Italiana Brokers di Assicurazioni"
                  className="h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-secondary-600">
                  Associazione Italiana Brokers
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
            Pronto a Proteggere Ciò che Conta?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Contattaci per una consulenza personalizzata. Il nostro team di esperti è pronto ad ascoltare le tue esigenze.
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiamaci: 02 6698.4847
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
