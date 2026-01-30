import Layout from '@/components/Layout';
import { FaExclamationCircle, FaFileAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import { contactInfo, legalInfo } from '@/data/contactInfo';

export default function Reclami() {
  return (
    <Layout
      title="Reclami - General Brokers | Gestione Reclami Assicurativi"
      description="Procedura per la presentazione di reclami a General Brokers. Tempi, modalità e diritti del cliente secondo le normative IVASS."
    >
      {/* Hero Section */}
      <section className="gradient-red text-white section-padding">
        <div className="container-custom max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <FaExclamationCircle className="text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gestione Reclami</h1>
          <p className="text-xl text-primary-50">
            La tua opinione è importante per noi. Ecco come presentare un reclamo.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-12">
            <p className="text-lg text-secondary-700">
              <strong>General Brokers Srl</strong> è impegnata a fornire un servizio di qualità eccellente.
              Qualora non fossi soddisfatto del servizio ricevuto, hai il diritto di presentare un reclamo
              secondo la procedura qui descritta, in conformità alle normative IVASS.
            </p>
          </div>

          {/* Come Presentare un Reclamo */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Come Presentare un Reclamo</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaFileAlt className="text-xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">Per Iscritto</h3>
                </div>
                <p className="text-secondary-700 mb-4">
                  Invia il tuo reclamo via lettera raccomandata o PEC all'indirizzo indicato sotto.
                  Il reclamo deve contenere nome, cognome, indirizzo, e una chiara descrizione del motivo.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">Via Email</h3>
                </div>
                <p className="text-secondary-700 mb-4">
                  Puoi anche inviare il reclamo via email ordinaria all'indirizzo {contactInfo.email.general},
                  includendo tutti i dettagli necessari.
                </p>
              </div>
            </div>

            {/* Contatti per Reclami */}
            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Dove Inviare il Reclamo</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FaEnvelope className="text-primary-600" />
                    Indirizzo Postale
                  </h4>
                  <p className="text-secondary-700">
                    {legalInfo.companyName}<br />
                    Ufficio Reclami<br />
                    {contactInfo.address.formatted}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FaEnvelope className="text-primary-600" />
                    Email
                  </h4>
                  <p className="text-secondary-700">
                    <a href={`mailto:${contactInfo.email.general}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.email.general}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tempi di Risposta */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Tempi di Risposta</h2>
            <div className="bg-white rounded-2xl border-2 border-secondary-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <FaClock className="text-xl text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Massimo 45 Giorni</h3>
                  <p className="text-secondary-700">
                    General Brokers si impegna a fornire riscontro al tuo reclamo entro <strong>45 giorni</strong> dalla
                    ricezione, come previsto dalle normative IVASS.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaCheckCircle className="text-xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Conferma di Ricezione</h3>
                  <p className="text-secondary-700">
                    Riceverai una conferma di ricezione del tuo reclamo entro pochi giorni lavorativi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cosa Deve Contenere il Reclamo */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Informazioni da Includere</h2>
            <div className="space-y-4">
              {[
                'Nome, cognome e indirizzo completo',
                'Numero di telefono e indirizzo email',
                'Numero di polizza (se applicabile)',
                'Descrizione chiara e dettagliata del motivo del reclamo',
                'Documentazione di supporto (se disponibile)',
                'Richieste specifiche o soluzioni attese'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-secondary-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-secondary-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ulteriori Azioni */}
          <div>
            <h2 className="section-title mb-8">Ulteriori Azioni Possibili</h2>
            <div className="bg-secondary-50 rounded-2xl p-8">
              <p className="text-secondary-700 mb-6">
                Se non sei soddisfatto della risposta ricevuta o se non hai ricevuto riscontro entro i termini previsti,
                puoi rivolgerti a:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold mb-2">IVASS - Istituto per la Vigilanza sulle Assicurazioni</h3>
                  <p className="text-sm text-secondary-600 mb-2">Via del Quirinale, 21 - 00187 Roma</p>
                  <p className="text-sm text-secondary-600">
                    <a href="https://www.ivass.it" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      www.ivass.it
                    </a>
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Arbitro per le Controversie Finanziarie (ACF)</h3>
                  <p className="text-sm text-secondary-600">
                    Per controversie relative alla gestione dei contratti assicurativi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-red text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai Bisogno di Assistenza?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Prima di presentare un reclamo formale, contattaci. Spesso possiamo risolvere
            eventuali problemi attraverso un dialogo diretto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.phone.tel}`} className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              <FaPhone className="inline mr-2" />
              {contactInfo.phone.display}
            </a>
            <a href={`mailto:${contactInfo.email.general}`} className="btn-outline">
              <FaEnvelope className="inline mr-2" />
              Invia Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
