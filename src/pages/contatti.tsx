import Layout from '@/components/Layout';
import Link from 'next/link';
import GenericHero from '@/components/GenericHero';
import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaCertificate
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
          return 'Inserisci un numero di telefono valido';
        }
        break;
      case 'nome':
      case 'cognome':
        if (value.length < 2) {
          return 'Minimo 2 caratteri';
        }
        break;
      case 'messaggio':
        if (value.length < 10) {
          return 'Il messaggio deve contenere almeno 10 caratteri';
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
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuova richiesta da ${formData.nome} ${formData.cognome} - ${formData.tipoRichiesta}`,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          nome: '', cognome: '', email: '', telefono: '',
          azienda: '', tipoRichiesta: '', messaggio: '', privacy: false
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

  return (
    <Layout
      title="Contatti - General Brokers Milano | Richiedi Consulenza Gratuita"
      description="Contatta General Brokers per una consulenza assicurativa gratuita. Siamo a Milano in Via Tonale 20. Tel: 02 6698.4847 - Email: info@generalbrokers.it"
      keywords="contatti General Brokers, broker assicurativo Milano, consulenza gratuita, Via Tonale Milano"
    >
      <GenericHero
        title="Contattaci"
        description="Consulenza gratuita e personalizzata. Rispondiamo entro 24 ore."
      />

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-secondary-900">I Nostri Recapiti</h2>

                <div className="flex gap-4 items-start">
                  <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary-900">Telefono</div>
                    <a href="tel:026698.4847" className="text-primary-600 hover:text-primary-700 font-medium">
                      02 6698.4847
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaEnvelope className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary-900">Email</div>
                    <a href="mailto:info@generalbrokers.it" className="text-primary-600 hover:text-primary-700 font-medium">
                      info@generalbrokers.it
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaCertificate className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary-900">PEC</div>
                    <a href="mailto:info@pec.generalbrokers.it" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      info@pec.generalbrokers.it
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary-900">Sede</div>
                    <p className="text-secondary-700 text-sm">
                      Via Tonale, 20<br />
                      20125 Milano (MI)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaClock className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary-900">Orari</div>
                    <p className="text-secondary-700 text-sm">
                      Lun - Ven: 9:00 - 18:00<br />
                      Sab - Dom: Chiuso
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-56 border border-secondary-200">
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
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold mb-2">
                Scrivici
              </h2>
              <p className="text-secondary-600 mb-6">
                Compila il modulo e ti risponderemo entro 24 ore. I campi con * sono obbligatori.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Nome *
                    </label>
                    <input
                      type="text" id="nome" name="nome"
                      value={formData.nome} onChange={handleChange} onBlur={handleBlur}
                      required
                      className={`input-field ${errors.nome && touched.nome ? 'border-red-500' : ''}`}
                      placeholder="Mario"
                    />
                    {errors.nome && touched.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                  </div>
                  <div>
                    <label htmlFor="cognome" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Cognome *
                    </label>
                    <input
                      type="text" id="cognome" name="cognome"
                      value={formData.cognome} onChange={handleChange} onBlur={handleBlur}
                      required
                      className={`input-field ${errors.cognome && touched.cognome ? 'border-red-500' : ''}`}
                      placeholder="Rossi"
                    />
                    {errors.cognome && touched.cognome && <p className="text-red-500 text-xs mt-1">{errors.cognome}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Email *
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} onBlur={handleBlur}
                      required
                      className={`input-field ${errors.email && touched.email ? 'border-red-500' : ''}`}
                      placeholder="mario.rossi@email.it"
                    />
                    {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold mb-2 text-secondary-800">
                      Telefono *
                    </label>
                    <input
                      type="tel" id="telefono" name="telefono"
                      value={formData.telefono} onChange={handleChange} onBlur={handleBlur}
                      required
                      className={`input-field ${errors.telefono && touched.telefono ? 'border-red-500' : ''}`}
                      placeholder="333 123 4567"
                    />
                    {errors.telefono && touched.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="azienda" className="block text-sm font-semibold mb-2 text-secondary-800">
                    Azienda <span className="text-secondary-500 font-normal">(opzionale)</span>
                  </label>
                  <input
                    type="text" id="azienda" name="azienda"
                    value={formData.azienda} onChange={handleChange}
                    className="input-field" placeholder="Nome azienda"
                  />
                </div>

                <div>
                  <label htmlFor="tipoRichiesta" className="block text-sm font-semibold mb-2 text-secondary-800">
                    Tipo di Richiesta *
                  </label>
                  <select
                    id="tipoRichiesta" name="tipoRichiesta"
                    value={formData.tipoRichiesta} onChange={handleChange}
                    required className="input-field"
                  >
                    <option value="">Seleziona...</option>
                    <option value="preventivo">Richiesta Preventivo</option>
                    <option value="assicurazioni-privati">Assicurazione Privati</option>
                    <option value="assicurazioni-aziendali">Assicurazione Aziende</option>
                    <option value="gestione-sinistri">Gestione Sinistro</option>
                    <option value="consulenza-rischi">Consulenza e Analisi Rischi</option>
                    <option value="gestione-polizze">Gestione Polizze Esistenti</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-semibold mb-2 text-secondary-800">
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio" name="messaggio"
                    value={formData.messaggio} onChange={handleChange} onBlur={handleBlur}
                    required rows={5} maxLength={1000}
                    className={`input-field resize-none ${errors.messaggio && touched.messaggio ? 'border-red-500' : ''}`}
                    placeholder="Descrivi brevemente la tua richiesta..."
                  ></textarea>
                  {errors.messaggio && touched.messaggio && <p className="text-red-500 text-xs mt-1">{errors.messaggio}</p>}
                </div>

                <div className="flex items-start gap-3 bg-secondary-50 p-4 rounded-lg">
                  <input
                    type="checkbox" id="privacy" name="privacy"
                    checked={formData.privacy} onChange={handleChange}
                    required className="mt-1 w-5 h-5"
                  />
                  <label htmlFor="privacy" className="text-sm text-secondary-700">
                    Ho letto e accetto la{' '}
                    <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                      Privacy Policy
                    </Link>{' '}
                    e acconsento al trattamento dei miei dati personali *
                  </label>
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-lg flex items-start gap-3">
                    <FaCheckCircle className="text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Richiesta inviata con successo!</p>
                      <p className="text-sm">Ti risponderemo entro 24 ore.</p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-lg">
                    <p className="font-bold">Errore nell&apos;invio</p>
                    <p className="text-sm">
                      Riprova o contattaci al{' '}
                      <a href="tel:026698.4847" className="underline font-semibold">02 6698.4847</a>
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Invia Richiesta
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
