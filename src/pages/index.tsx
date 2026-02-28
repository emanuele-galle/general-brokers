import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServiceModal from '@/components/ServiceModal';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';
import { yearsOfExperience, foundingYear } from '@/data/companyStats';
import { contactInfo } from '@/data/contactInfo';
import {
  FaArrowRight,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <Layout
      title="Broker Assicurativo Milano | General Brokers dal 1977"
      description="General Brokers: broker assicurativo indipendente a Milano dal 1977. Gestione polizze, sinistri e consulenza personalizzata per privati e aziende. Certificazione IVASS RUI B000072481."
      keywords="broker assicurativo Milano, intermediario assicurativo, gestione sinistri Milano, polizze assicurative, consulenza assicurativa, General Brokers, IVASS, assicurazioni aziende Milano, assicurazioni privati"
    >
      {/* Hero */}
      <HeroSection />

      {/* Citazione Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="font-heading text-2xl md:text-3xl leading-relaxed text-secondary-800 mb-4">
            Con la nostra esperienza, competenza e professionalit&agrave; non ti abbandoneremo.
          </p>
          <p className="font-heading text-2xl md:text-3xl font-bold text-primary-600">
            Mai!
          </p>
          <div className="divider-red mx-auto mt-8"></div>
        </div>
      </section>

      {/* I Nostri Servizi */}
      <section className="py-20 md:py-28 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">I Nostri Servizi</h2>
            <p className="section-subtitle">
              Soluzioni assicurative per privati e aziende
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(index)}
                className="flex items-start gap-3 text-left group py-3"
              >
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </span>
                  <p className="text-sm text-secondary-500 mt-0.5">{service.shortDescription}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
            >
              Scopri tutti i servizi
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
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

      {/* Numeri */}
      <section className="relative text-white min-h-[600px] md:min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero/Galleria-Vittorio-Emanuele.webp" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 flex items-center min-h-[600px] md:min-h-[700px]">
          <div className="w-full py-20 md:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto text-center">
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{foundingYear}</p>
                <p className="text-white text-sm uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Fondazione</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{yearsOfExperience}+</p>
                <p className="text-white text-sm uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Anni</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">500+</p>
                <p className="text-white text-sm uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Clienti</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">100%</p>
                <p className="text-white text-sm uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">Indipendenti</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
      </section>

      {/* Il Nostro Ufficio */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/office/office-1.jpg"
                alt="Sede General Brokers Milano - Via Tonale 20"
                className="w-full h-80 lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div>
              <h2 className="section-title mb-8">Il Nostro Ufficio</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary-900">Indirizzo</p>
                    <p className="text-secondary-600">{contactInfo.address.street}, {contactInfo.address.postalCode} {contactInfo.address.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary-900">Telefono</p>
                    <a href={`tel:${contactInfo.phone.tel}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                      {contactInfo.phone.display}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary-900">Email</p>
                    <a href={`mailto:${contactInfo.email.general}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                      {contactInfo.email.general}
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mt-8 group"
              >
                Vieni a trovarci
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificazioni inline */}
      <section className="py-12 bg-secondary-50 border-t border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <a href="https://www.ivass.it/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-28 h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="/images/logo/ivass-logo.jpg" alt="IVASS" fill className="object-contain" />
              </div>
            </a>
            <a href="https://aiba.it/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-28 h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="/images/logo/aiba-logo.png" alt="AIBA" fill className="object-contain" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-20 md:py-28 bg-secondary-700 text-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="font-heading text-xl md:text-2xl italic text-white/70 mb-8 leading-relaxed">
            &ldquo;Standoti vicino e guardandoci in faccia ogni volta che ne sentirai la necessit&agrave;&rdquo;
          </p>
          <div className="divider-red mx-auto mb-8"></div>
          <Link
            href="/contatti"
            className="btn-primary bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2"
          >
            Contattaci
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
