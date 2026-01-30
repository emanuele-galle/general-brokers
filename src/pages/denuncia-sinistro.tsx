import { useState } from 'react';
import Layout from '@/components/Layout';
import {
  FaExclamationTriangle,
  FaFileUpload,
  FaCheckCircle,
  FaInfoCircle,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

export default function DenunciaSinistro() {
  const [formData, setFormData] = useState({
    // Dati personali
    nome: '',
    cognome: '',
    email: '',
    telefono: '',

    // Dati polizza
    numeroPolizza: '',
    compagnia: '',
    tipoPolizza: '',

    // Dati sinistro
    dataSinistro: '',
    luogoSinistro: '',
    tipoSinistro: '',
    dinamica: '',

    // Danni
    danniPersone: false,
    danniCose: false,
    descrizioneDanni: '',

    // Altri coinvolti
    altriCoinvolti: false,
    datiCoinvolti: '',

    // Note
    note: '',

    // Privacy
    privacy: false
  });

  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implementare invio email/backend
    // Per ora simulo invio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (submitted) {
    return (
      <Layout
        title="Denuncia Inviata - General Brokers"
        description="La tua denuncia sinistro è stata inviata con successo"
      >
        <div className="section-padding bg-gradient-to-b from-secondary-50 to-white">
          <div className="container-custom max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Denuncia Inviata con Successo!
              </h1>
              <p className="text-lg text-secondary-600 mb-6">
                Abbiamo ricevuto la tua segnalazione. Un nostro operatore ti contatterà entro 24 ore lavorative.
              </p>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <p className="text-sm text-secondary-700 mb-2">
                  <strong>Numero pratica:</strong> SIN-{new Date().getTime()}
                </p>
                <p className="text-sm text-secondary-600">
                  Conserva questo numero per future comunicazioni
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Torna alla Homepage
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nome: '', cognome: '', email: '', telefono: '',
                      numeroPolizza: '', compagnia: '', tipoPolizza: '',
                      dataSinistro: '', luogoSinistro: '', tipoSinistro: '', dinamica: '',
                      danniPersone: false, danniCose: false, descrizioneDanni: '',
                      altriCoinvolti: false, datiCoinvolti: '',
                      note: '', privacy: false
                    });
                    setFiles(null);
                  }}
                  className="btn-secondary"
                >
                  Nuova Denuncia
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Denuncia Sinistro - General Brokers"
      description="Segnala un sinistro in modo rapido e sicuro. Il nostro team ti assisterà nella gestione della pratica."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-4xl text-accent-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Denuncia Sinistro</h1>
            </div>
            <p className="text-xl text-gray-100">
              Compila il modulo per segnalare un sinistro. Ti assisteremo in ogni fase della pratica.
            </p>
          </div>
        </div>
      </section>

      {/* Alert Info */}
      <section className="bg-accent-50 border-l-4 border-accent-600 py-6">
        <div className="container-custom">
          <div className="flex gap-4 items-start">
            <FaInfoCircle className="text-2xl text-accent-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-secondary-900 mb-2">Hai bisogno di assistenza immediata?</h3>
              <p className="text-secondary-700 mb-3">
                Per sinistri urgenti, contattaci telefonicamente. Siamo a tua disposizione.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="tel:026698.4847" className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
                  <FaPhone />
                  02 6698.4847
                </a>
                <a href="mailto:sinistri@generalbrokers.it" className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
                  <FaEnvelope />
                  sinistri@generalbrokers.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary-50">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Dati Personali */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                1. Dati Personali
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* Dati Polizza */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                2. Dati Polizza Assicurativa
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Numero Polizza *
                  </label>
                  <input
                    type="text"
                    name="numeroPolizza"
                    value={formData.numeroPolizza}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="POL123456789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Compagnia Assicurativa *
                  </label>
                  <input
                    type="text"
                    name="compagnia"
                    value={formData.compagnia}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Nome Compagnia"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Tipo di Polizza *
                  </label>
                  <select
                    name="tipoPolizza"
                    value={formData.tipoPolizza}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Seleziona tipo polizza</option>
                    <option value="rc-auto">RC Auto/Moto</option>
                    <option value="kasko">Kasko</option>
                    <option value="infortuni">Infortuni</option>
                    <option value="rc-professionale">RC Professionale</option>
                    <option value="casa">Casa</option>
                    <option value="responsabilita-civile">Responsabilità Civile</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Dati Sinistro */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                3. Dettagli del Sinistro
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Data del Sinistro *
                  </label>
                  <input
                    type="date"
                    name="dataSinistro"
                    value={formData.dataSinistro}
                    onChange={handleChange}
                    required
                    max={new Date().toISOString().split('T')[0]}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Tipo di Sinistro *
                  </label>
                  <select
                    name="tipoSinistro"
                    value={formData.tipoSinistro}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Seleziona tipo</option>
                    <option value="incidente-stradale">Incidente Stradale</option>
                    <option value="furto">Furto</option>
                    <option value="incendio">Incendio</option>
                    <option value="danni-acqua">Danni da Acqua</option>
                    <option value="infortunio">Infortunio</option>
                    <option value="danno-terzi">Danno a Terzi</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Luogo del Sinistro *
                </label>
                <input
                  type="text"
                  name="luogoSinistro"
                  value={formData.luogoSinistro}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Via/Piazza, Città, Provincia"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Dinamica del Sinistro *
                </label>
                <textarea
                  name="dinamica"
                  value={formData.dinamica}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field"
                  placeholder="Descrivi dettagliatamente come si è verificato il sinistro..."
                />
              </div>
            </div>

            {/* Danni */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                4. Danni Riportati
              </h2>
              <div className="space-y-4 mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="danniPersone"
                    checked={formData.danniPersone}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="text-secondary-700">Ci sono stati danni alle persone</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="danniCose"
                    checked={formData.danniCose}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="text-secondary-700">Ci sono stati danni alle cose</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Descrizione Danni *
                </label>
                <textarea
                  name="descrizioneDanni"
                  value={formData.descrizioneDanni}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field"
                  placeholder="Descrivi in dettaglio i danni riportati..."
                />
              </div>
            </div>

            {/* Altri Coinvolti */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                5. Altri Soggetti Coinvolti
              </h2>
              <label className="flex items-center gap-3 cursor-pointer mb-6">
                <input
                  type="checkbox"
                  name="altriCoinvolti"
                  checked={formData.altriCoinvolti}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-secondary-700">Ci sono altri soggetti coinvolti nel sinistro</span>
              </label>

              {formData.altriCoinvolti && (
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Dati Altri Coinvolti
                  </label>
                  <textarea
                    name="datiCoinvolti"
                    value={formData.datiCoinvolti}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    placeholder="Nome, cognome, recapiti, targa veicolo (se applicabile)..."
                  />
                </div>
              )}
            </div>

            {/* Upload Documenti */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                6. Documenti e Foto
              </h2>
              <div className="bg-secondary-50 rounded-lg p-6 border-2 border-dashed border-secondary-300 hover:border-primary-600 transition-colors">
                <label className="block cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <FaFileUpload className="text-4xl text-secondary-400 mb-3" />
                    <span className="text-sm font-semibold text-secondary-700 mb-1">
                      Carica foto e documenti
                    </span>
                    <span className="text-xs text-secondary-500">
                      PDF, JPG, PNG (max 10MB per file)
                    </span>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                </label>
                {files && (
                  <div className="mt-4 text-sm text-secondary-600">
                    {Array.from(files).map((file, index) => (
                      <div key={index} className="flex items-center gap-2 py-1">
                        <FaCheckCircle className="text-green-600" />
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Note Aggiuntive */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-3 border-b-2 border-primary-600">
                7. Note Aggiuntive
              </h2>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
                className="input-field"
                placeholder="Eventuali informazioni aggiuntive che ritieni utili..."
              />
            </div>

            {/* Privacy */}
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
                  Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
                  <a href="/privacy-policy" className="text-primary-600 hover:underline ml-1">
                    Leggi l'informativa privacy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Denuncia Sinistro'}
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="btn-secondary"
              >
                Annulla
              </button>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-primary-50 rounded-xl p-6 border-l-4 border-primary-600">
            <h3 className="font-bold text-secondary-900 mb-3">Cosa succede dopo l'invio?</h3>
            <ul className="space-y-2 text-sm text-secondary-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                <span>Riceverai una conferma via email con il numero di pratica</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                <span>Un nostro operatore ti contatterà entro 24 ore lavorative</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                <span>Ti assisteremo in tutte le fasi della gestione del sinistro</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
