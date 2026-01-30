import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import CTASection from '@/components/CTASection';
import {
  FaIdCard,
  FaHospital,
  FaUserMd,
  FaAmbulance,
  FaHeartbeat,
  FaCheckCircle,
  FaPhone,
  FaDownload,
  FaEnvelope,
  FaClock,
  FaGlobe
} from 'react-icons/fa';

export default function DayMedical() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    dataNascita: '',
    codiceFiscale: '',
    indirizzo: '',
    citta: '',
    cap: '',
    note: '',
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implementare invio email/backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const benefits = [
    {
      icon: FaHospital,
      title: 'Accesso Immediato',
      description: 'Ricoveri ospedalieri senza attese e in strutture convenzionate'
    },
    {
      icon: FaUserMd,
      title: 'Visite Specialistiche',
      description: 'Accesso a specialisti qualificati per consulti e diagnosi'
    },
    {
      icon: FaAmbulance,
      title: 'Assistenza 24/7',
      description: 'Supporto medico disponibile in qualsiasi momento'
    },
    {
      icon: FaHeartbeat,
      title: 'Check-up Completi',
      description: 'Pacchetti di prevenzione e controlli periodici'
    }
  ];

  const services = [
    {
      category: 'Visite e Consulti',
      items: [
        'Visite mediche specialistiche',
        'Consulti diagnostici',
        'Second opinion medico',
        'Medicina preventiva'
      ]
    },
    {
      category: 'Diagnostica',
      items: [
        'Analisi di laboratorio',
        'Diagnostica per immagini (TAC, RMN, ECO)',
        'Esami strumentali',
        'Screening oncologici'
      ]
    },
    {
      category: 'Ricoveri e Interventi',
      items: [
        'Ricoveri ospedalieri programmati',
        'Day hospital',
        'Interventi chirurgici',
        'Degenza post-operatoria'
      ]
    },
    {
      category: 'Servizi Aggiuntivi',
      items: [
        'Assistenza domiciliare',
        'Fisioterapia e riabilitazione',
        'Cure termali',
        'Trasporti sanitari'
      ]
    }
  ];

  if (submitted) {
    return (
      <Layout
        title="Richiesta Inviata - Day Medical Card"
        description="Richiesta carta sanitaria inviata con successo"
      >
        <div className="section-padding bg-gradient-to-b from-secondary-50 to-white">
          <div className="container-custom max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Richiesta Inviata!
              </h1>
              <p className="text-lg text-secondary-600 mb-8">
                La tua richiesta per la Day Medical Card è stata ricevuta. Ti contatteremo entro 48 ore con tutte le informazioni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Torna alla Homepage
                </a>
                <a href="/servizi" className="btn-secondary">
                  Scopri Altri Servizi
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Day Medical Card - Carta Sanitaria e Assicurativa | General Brokers"
      description="La tua carta sanitaria per accedere a servizi medici di qualità. Visite specialistiche, ricoveri, diagnostica e molto altro."
    >
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/duomo-milano.jpg"
            alt="Milano Duomo - Day Medical Card General Brokers"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <FaIdCard className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Day Medical Card
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-8 leading-relaxed">
              La tua carta sanitaria per accedere a servizi medici di qualità senza attese
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-accent-300" />
                <span>Accesso Immediato</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-accent-300" />
                <span>Strutture Convenzionate</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-accent-300" />
                <span>Assistenza 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Vantaggi della <span className="text-gradient">Day Medical Card</span>
            </h2>
            <p className="section-subtitle mt-4">
              Una soluzione completa per la tua salute e quella della tua famiglia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Coverage */}
      <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Servizi Inclusi</h2>
            <p className="section-subtitle mt-4">
              Copertura completa per tutte le tue esigenze sanitarie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary-600 mb-6">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Come Funziona</h2>
            <p className="section-subtitle mt-4">
              Semplice, veloce ed efficace
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Richiedi la Carta',
                description: 'Compila il modulo di richiesta qui sotto o contattaci telefonicamente'
              },
              {
                step: '2',
                title: 'Ricevi la Tua Card',
                description: 'Ti invieremo la carta sanitaria direttamente a casa entro 7 giorni lavorativi'
              },
              {
                step: '3',
                title: 'Prenota i Servizi',
                description: 'Contatta il numero verde sulla carta per prenotare visite, esami o ricoveri'
              },
              {
                step: '4',
                title: 'Utilizza i Servizi',
                description: 'Presenta la carta presso le strutture convenzionate e accedi ai servizi'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Richiedi la Tua Day Medical Card</h2>
            <p className="section-subtitle mt-4">
              Compila il modulo e ti contatteremo per completare l'attivazione
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Mario"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Cognome *
                </label>
                <input
                  type="text"
                  name="cognome"
                  value={formData.cognome}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Rossi"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="mario.rossi@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="+39 333 1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Data di Nascita *
                </label>
                <input
                  type="date"
                  name="dataNascita"
                  value={formData.dataNascita}
                  onChange={handleChange}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Codice Fiscale *
                </label>
                <input
                  type="text"
                  name="codiceFiscale"
                  value={formData.codiceFiscale}
                  onChange={handleChange}
                  required
                  maxLength={16}
                  className="input-field"
                  placeholder="RSSMRA80A01F205X"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Indirizzo *
                </label>
                <input
                  type="text"
                  name="indirizzo"
                  value={formData.indirizzo}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Via/Piazza, Numero Civico"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Città *
                </label>
                <input
                  type="text"
                  name="citta"
                  value={formData.citta}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Milano"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  CAP *
                </label>
                <input
                  type="text"
                  name="cap"
                  value={formData.cap}
                  onChange={handleChange}
                  required
                  maxLength={5}
                  className="input-field"
                  placeholder="20125"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-secondary-700 mb-2">
                Note o Richieste Particolari
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
                className="input-field"
                placeholder="Eventuali informazioni aggiuntive..."
              />
            </div>

            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 mt-0.5"
                />
                <span className="text-sm text-secondary-700">
                  Acconsento al trattamento dei dati personali ai sensi del GDPR.
                  <a href="/privacy-policy" className="text-primary-600 hover:underline ml-1">
                    Leggi l'informativa
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Invio in corso...' : 'Richiedi Day Medical Card'}
            </button>
          </form>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection
        variant="custom"
        title="Hai Bisogno di Maggiori Informazioni?"
        description="Il nostro team è a disposizione per rispondere a tutte le tue domande sulla Day Medical Card"
      />
    </Layout>
  );
}
