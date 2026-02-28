import Layout from '@/components/Layout';
import GenericHero from '@/components/GenericHero';
import { FaExclamationCircle, FaFileAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import { contactInfo, legalInfo } from '@/data/contactInfo';

export default function Reclami() {
  return (
    <Layout
      title="Reclami - General Brokers | Gestione Reclami Assicurativi"
      description="Procedura per la presentazione di reclami a General Brokers. Tempi, modalità e diritti del cliente secondo le normative IVASS."
    >
      <GenericHero
        title="Gestione Reclami"
        description="La tua opinione è importante per noi. Ecco come presentare un reclamo."
      />

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-12">
            <p className="text-lg text-secondary-700">
              <strong>General Brokers Srl</strong> &egrave; impegnata a fornire un servizio di qualit&agrave; eccellente.
              Qualora non fossi soddisfatto del servizio ricevuto, hai il diritto di presentare un reclamo
              secondo la procedura qui descritta, in conformit&agrave; alle normative IVASS.
            </p>
          </div>

          {/* Come Presentare un Reclamo */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Come Presentare un Reclamo</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-secondary-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaFileAlt className="text-xl text-primary-600" />
                  <h3 className="text-xl font-heading font-bold">Per Iscritto</h3>
                </div>
                <p className="text-secondary-700">
                  Invia il tuo reclamo via lettera raccomandata o PEC all&apos;indirizzo indicato sotto.
                  Il reclamo deve contenere nome, cognome, indirizzo, e una chiara descrizione del motivo.
                </p>
              </div>

              <div className="border border-secondary-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaEnvelope className="text-xl text-primary-600" />
                  <h3 className="text-xl font-heading font-bold">Via Email</h3>
                </div>
                <p className="text-secondary-700">
                  Puoi anche inviare il reclamo via email ordinaria all&apos;indirizzo {contactInfo.email.general},
                  includendo tutti i dettagli necessari.
                </p>
              </div>
            </div>

            {/* Contatti per Reclami */}
            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Dove Inviare il Reclamo</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FaEnvelope className="text-primary-600" /> Indirizzo Postale
                  </h4>
                  <p className="text-secondary-700">
                    {legalInfo.companyName}<br />
                    Ufficio Reclami<br />
                    {contactInfo.address.formatted}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FaEnvelope className="text-primary-600" /> Email
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
            <div className="border border-secondary-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <FaClock className="text-xl text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Massimo 45 Giorni</h3>
                  <p className="text-secondary-700">
                    General Brokers si impegna a fornire riscontro al tuo reclamo entro <strong>45 giorni</strong> dalla
                    ricezione, come previsto dalle normative IVASS.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-xl text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Conferma di Ricezione</h3>
                  <p className="text-secondary-700">
                    Riceverai una conferma di ricezione del tuo reclamo entro pochi giorni lavorativi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cosa Deve Contenere */}
          <div className="mb-16">
            <h2 className="section-title mb-8">Informazioni da Includere</h2>
            <div className="space-y-3">
              {[
                'Nome, cognome e indirizzo completo',
                'Numero di telefono e indirizzo email',
                'Numero di polizza (se applicabile)',
                'Descrizione chiara e dettagliata del motivo del reclamo',
                'Documentazione di supporto (se disponibile)',
                'Richieste specifiche o soluzioni attese'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-secondary-200">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
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
            <div className="bg-secondary-50 rounded-xl p-8">
              <p className="text-secondary-700 mb-6">
                Se non sei soddisfatto della risposta ricevuta o se non hai ricevuto riscontro entro i termini previsti,
                puoi rivolgerti a:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-secondary-200">
                  <h3 className="font-heading font-bold mb-2">IVASS - Istituto per la Vigilanza sulle Assicurazioni</h3>
                  <p className="text-sm text-secondary-600 mb-2">Via del Quirinale, 21 - 00187 Roma</p>
                  <a href="https://www.ivass.it" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700">
                    www.ivass.it
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg border border-secondary-200">
                  <h3 className="font-heading font-bold mb-2">Arbitro per le Controversie Finanziarie (ACF)</h3>
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
      <section className="py-16 md:py-20 bg-secondary-700 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Hai Bisogno di Assistenza?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Prima di presentare un reclamo formale, contattaci. Spesso possiamo risolvere
            eventuali problemi attraverso un dialogo diretto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.phone.tel}`} className="btn-primary inline-flex items-center gap-2">
              <FaPhone className="text-sm" /> {contactInfo.phone.display}
            </a>
            <a href={`mailto:${contactInfo.email.general}`} className="btn-outline border-white/30 text-white hover:bg-white hover:text-secondary-900 inline-flex items-center gap-2">
              <FaEnvelope className="text-sm" /> Invia Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
