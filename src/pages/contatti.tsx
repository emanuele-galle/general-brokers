import Layout from '@/components/Layout';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaQuestionCircle,
  FaTimes,
  FaSpinner
} from 'react-icons/fa';

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    tipoRichiesta: '',
    messaggio: '',
    privacy: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formProgress, setFormProgress] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Calculate form completion progress
  useEffect(() => {
    const fields = ['nome', 'cognome', 'email', 'telefono', 'tipoRichiesta', 'messaggio'];
    const completed = fields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return typeof value === 'string' && value.trim().length > 0;
    }).length;
    const progress = Math.round((completed / fields.length) * 100);
    setFormProgress(progress);
  }, [formData]);

  // Show WhatsApp button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateField = (name: string, value: string) => {
    if (!value || value.trim() === '') return '';

    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Inserisci un indirizzo email valido';
        }
        break;
      case 'telefono':
        const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
        if (!/^[\+]?[0-9]{9,15}$/.test(cleanPhone)) {
          return 'Inserisci un numero di telefono valido (es. 333 123 4567)';
        }
        break;
      case 'nome':
      case 'cognome':
        if (value.length < 2) {
          return 'Minimo 2 caratteri';
        }
        if (!/^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s\'-]+$/.test(value)) {
          return 'Solo lettere, spazi e apostrofi';
        }
        break;
      case 'messaggio':
        if (value.length < 10) {
          return 'Il messaggio deve contenere almeno 10 caratteri';
        }
        if (value.length > 1000) {
          return 'Il messaggio è troppo lungo (max 1000 caratteri)';
        }
        break;
    }
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));

      // Real-time validation only after field has been touched
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Usa Formspree (servizio gratuito per form HTML)
      // Registrati su https://formspree.io e sostituisci 'YOUR_FORM_ID' con il tuo ID
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuova richiesta da ${formData.nome} ${formData.cognome} - ${formData.tipoRichiesta}`,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          azienda: '',
          tipoRichiesta: '',
          messaggio: '',
          privacy: false
        });

        setTimeout(() => setFormStatus('idle'), 7000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Telefono',
      value: '02 6698.4847',
      href: 'tel:026698.4847',
      description: 'Lun-Ven: 9:00-18:00',
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+39 333 1234567',
      href: 'https://wa.me/393331234567',
      description: 'Risposta rapida',
      gradient: 'from-green-600 to-green-700'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@generalbrokers.it',
      href: 'mailto:info@generalbrokers.it',
      description: 'Risposta entro 24h',
      gradient: 'from-accent-600 to-accent-700'
    },
  ];

  const faqQuickLinks = [
    {
      icon: FaUser,
      title: 'Assicurazione Auto',
      description: 'RC Auto, Kasko, Furto e Incendio',
      action: () => setFormData(prev => ({ ...prev, tipoRichiesta: 'assicurazioni-privati' }))
    },
    {
      icon: FaBuilding,
      title: 'Assicurazione Azienda',
      description: 'Protezione completa per la tua attività',
      action: () => setFormData(prev => ({ ...prev, tipoRichiesta: 'assicurazioni-aziendali' }))
    },
    {
      icon: FaQuestionCircle,
      title: 'Gestione Sinistro',
      description: 'Assistenza e supporto sinistri',
      action: () => setFormData(prev => ({ ...prev, tipoRichiesta: 'gestione-sinistri' }))
    },
  ];

  return (
    <Layout
      title="Contatti - General Brokers Milano | Richiedi Consulenza Gratuita"
      description="Contatta General Brokers per una consulenza assicurativa gratuita. Siamo a Milano in Via Tonale 20. Tel: 02 6698.4847 - Email: info@generalbrokers.it"
      keywords="contatti General Brokers, broker assicurativo Milano, consulenza gratuita, Via Tonale Milano, preventivo assicurazione"
    >
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/stazione-centrale-milano.jpg"
            alt="Stazione Centrale Milano - Contatti General Brokers"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
              Parliamo delle Tue Esigenze
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-50 mb-6 md:mb-8">
              Consulenza gratuita e personalizzata. Rispondiamo entro 24 ore.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold">24h</div>
                <div className="text-xs md:text-sm text-primary-100">Tempo risposta</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold">100%</div>
                <div className="text-xs md:text-sm text-primary-100">Gratuito</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold">47+</div>
                <div className="text-xs md:text-sm text-primary-100">Anni esperienza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative section-padding overflow-hidden">
        {/* Sfondo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50"></div>

        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
              Contattaci Subito
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Scegli Come <span className="text-gradient">Raggiungerci</span>
            </h2>
            <p className="text-xl text-secondary-600">
              Siamo disponibili attraverso diversi canali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-600"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50"></div>
                  <div className="relative text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-3">{method.title}</h3>
                    <p className="text-primary-600 font-bold text-lg mb-2">{method.value}</p>
                    <p className="text-sm text-secondary-600">{method.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="mappa" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 colonne */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Compila il Form
                </h2>
                <p className="text-secondary-600 mb-4">
                  Tutti i campi contrassegnati con * sono obbligatori
                </p>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-secondary-700">
                      Completamento modulo
                    </span>
                    <span className="text-sm font-bold text-primary-600">
                      {formProgress}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out"
                      style={{ width: `${formProgress}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nome e Cognome */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold mb-2 text-secondary-800">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`input-field transition-all ${errors.nome && touched.nome ? 'border-red-500 focus:ring-red-200' : 'focus:border-primary-500 focus:ring-primary-200'}`}
                        placeholder="Mario"
                      />
                      {errors.nome && touched.nome && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.nome}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cognome" className="block text-sm font-semibold mb-2 text-secondary-800">
                        Cognome *
                      </label>
                      <input
                        type="text"
                        id="cognome"
                        name="cognome"
                        value={formData.cognome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`input-field transition-all ${errors.cognome && touched.cognome ? 'border-red-500 focus:ring-red-200' : 'focus:border-primary-500 focus:ring-primary-200'}`}
                        placeholder="Rossi"
                      />
                      {errors.cognome && touched.cognome && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.cognome}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email e Telefono */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-secondary-800">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`input-field transition-all ${errors.email && touched.email ? 'border-red-500 focus:ring-red-200' : 'focus:border-primary-500 focus:ring-primary-200'}`}
                        placeholder="mario.rossi@email.it"
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold mb-2 text-secondary-800">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`input-field transition-all ${errors.telefono && touched.telefono ? 'border-red-500 focus:ring-red-200' : 'focus:border-primary-500 focus:ring-primary-200'}`}
                        placeholder="333 123 4567"
                      />
                      {errors.telefono && touched.telefono && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.telefono}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Azienda (opzionale) */}
                  <div>
                    <label htmlFor="azienda" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Azienda <span className="text-secondary-500 font-normal">(opzionale)</span>
                    </label>
                    <input
                      type="text"
                      id="azienda"
                      name="azienda"
                      value={formData.azienda}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Nome azienda"
                    />
                  </div>

                  {/* Tipo Richiesta */}
                  <div>
                    <label htmlFor="tipoRichiesta" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Tipo di Richiesta *
                    </label>
                    <select
                      id="tipoRichiesta"
                      name="tipoRichiesta"
                      value={formData.tipoRichiesta}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Seleziona il tipo di richiesta...</option>
                      <option value="preventivo">💰 Richiesta Preventivo</option>
                      <option value="assicurazioni-privati">🚗 Assicurazione Privati (Auto, Casa, Vita)</option>
                      <option value="assicurazioni-aziendali">🏢 Assicurazione Aziende</option>
                      <option value="gestione-sinistri">⚠️ Gestione Sinistro</option>
                      <option value="consulenza-rischi">📊 Consulenza e Analisi Rischi</option>
                      <option value="gestione-polizze">📄 Gestione Polizze Esistenti</option>
                      <option value="altro">❓ Altro</option>
                    </select>
                  </div>

                  {/* Messaggio */}
                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={6}
                      maxLength={1000}
                      className={`input-field resize-none transition-all ${errors.messaggio && touched.messaggio ? 'border-red-500 focus:ring-red-200' : 'focus:border-primary-500 focus:ring-primary-200'}`}
                      placeholder="Descrivi brevemente la tua richiesta. Più dettagli fornisci, meglio potremo aiutarti..."
                    ></textarea>
                    <div className="flex justify-between items-center mt-1">
                      {errors.messaggio && touched.messaggio ? (
                        <p className="text-red-500 text-xs flex items-center gap-1 animate-fade-in">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.messaggio}
                        </p>
                      ) : (
                        <p className="text-xs text-secondary-500">
                          Minimo 10 caratteri
                        </p>
                      )}
                      <p className={`text-xs ${formData.messaggio.length > 900 ? 'text-orange-600 font-semibold' : 'text-secondary-500'}`}>
                        {formData.messaggio.length}/1000
                      </p>
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start gap-3 bg-secondary-50 p-4 rounded-lg">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5"
                    />
                    <label htmlFor="privacy" className="text-sm text-secondary-700">
                      Ho letto e accetto la{' '}
                      <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                        Privacy Policy
                      </a>{' '}
                      e acconsento al trattamento dei miei dati personali *
                    </label>
                  </div>

                  {/* Success/Error Messages */}
                  {formStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-start gap-3">
                      <FaCheckCircle className="text-2xl flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold mb-1">Richiesta inviata con successo!</p>
                        <p className="text-sm">
                          Grazie per averci contattato. Ti risponderemo entro 24 ore.
                        </p>
                      </div>
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl">
                      <p className="font-bold mb-1">Errore nell'invio</p>
                      <p className="text-sm">
                        Si è verificato un errore. Riprova o contattaci telefonicamente al{' '}
                        <a href="tel:026698.4847" className="underline font-semibold">02 6698.4847</a>
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Invia Richiesta Gratuita
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Info Sidebar - 2 colonne */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Links */}
              <div className="card bg-secondary-50">
                <h3 className="font-bold text-lg mb-4">Cosa ti serve?</h3>
                <div className="space-y-3">
                  {faqQuickLinks.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full text-left flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <item.icon className="text-xl text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-secondary-900">{item.title}</div>
                        <div className="text-sm text-secondary-600">{item.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="card">
                <h3 className="font-bold text-lg mb-4">Informazioni</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaMapMarkerAlt className="text-xl text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Sede</div>
                      <div className="text-sm text-secondary-700">
                        Via Tonale, 20<br />
                        20125 Milano (MI)
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FaClock className="text-xl text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Orari</div>
                      <div className="text-sm text-secondary-700">
                        Lun-Ven: 9:00 - 18:00<br />
                        Sab-Dom: Chiuso
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8644876288344!2d9.203828!3d45.4773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6c4b5555555%3A0x6666666666666666!2sVia%20Tonale%2C%2020%2C%2020125%20Milano%20MI!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa General Brokers - Via Tonale 20, Milano"
                ></iframe>
              </div>

              {/* Trust Badge */}
              <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
                <div className="flex items-center gap-3 mb-3">
                  <FaCheckCircle className="text-2xl text-primary-600" />
                  <h4 className="font-bold">Perché sceglierci?</h4>
                </div>
                <ul className="space-y-2 text-sm text-secondary-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Consulenza 100% gratuita</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Risposta entro 24 ore</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>47+ anni di esperienza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">✓</span>
                    <span>Broker indipendente certificato</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Preferisci Parlare di Persona?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Vieni a trovarci nella nostra sede di Milano. Il nostro team è pronto ad accoglierti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#mappa"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center gap-2"
            >
              Vedi la Mappa
              <FaMapMarkerAlt />
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

      {/* Floating WhatsApp Button */}
      {showWhatsApp && (
        <a
          href="https://wa.me/393331234567?text=Ciao,%20vorrei%20informazioni%20sui%20vostri%20servizi%20assicurativi"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 group animate-bounce-gentle"
          aria-label="Contattaci su WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
          <span className="absolute right-full mr-3 bg-secondary-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Scrivici su WhatsApp
          </span>
        </a>
      )}
    </Layout>
  );
}
