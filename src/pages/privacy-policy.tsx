import Layout from '@/components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy - General Brokers Srl"
      description="Informativa sulla privacy di General Brokers Srl. Scopri come trattiamo i tuoi dati personali in conformità al GDPR."
      keywords="privacy policy, trattamento dati personali, GDPR, General Brokers"
    >
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700">
            <p className="text-sm text-secondary-500">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è <strong>General Brokers Srl</strong>, con sede legale in Via Tonale, 20 - 20125 Milano, P.IVA/CF: 03740950153.
              </p>
              <p>
                Per qualsiasi informazione relativa al trattamento dei dati personali, è possibile contattare il Titolare ai seguenti recapiti:
              </p>
              <ul className="list-disc pl-6">
                <li>Email: info@generalbrokers.it</li>
                <li>Telefono: 02 6698.4847</li>
                <li>Indirizzo: Via Tonale, 20 - 20125 Milano</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Tipologie di Dati Raccolti</h2>
              <p>
                I dati personali che possono essere raccolti includono:
              </p>
              <ul className="list-disc pl-6">
                <li>Dati identificativi (nome, cognome, codice fiscale)</li>
                <li>Dati di contatto (indirizzo email, numero di telefono, indirizzo postale)</li>
                <li>Dati relativi alle polizze assicurative</li>
                <li>Dati di navigazione (cookie, indirizzo IP, tipo di browser)</li>
                <li>Dati necessari per la gestione di sinistri e pratiche assicurative</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-6">
                <li><strong>Esecuzione del contratto:</strong> gestione delle polizze assicurative, consulenza e assistenza</li>
                <li><strong>Obblighi di legge:</strong> adempimenti fiscali, contabili e normativi</li>
                <li><strong>Gestione sinistri:</strong> liquidazione e gestione delle pratiche</li>
                <li><strong>Comunicazioni commerciali:</strong> previo consenso specifico dell'interessato</li>
                <li><strong>Miglioramento dei servizi:</strong> analisi statistiche anonimizzate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Base Giuridica del Trattamento</h2>
              <p>Il trattamento dei dati personali si basa su:</p>
              <ul className="list-disc pl-6">
                <li>Esecuzione di un contratto di cui l'interessato è parte</li>
                <li>Adempimento di obblighi di legge</li>
                <li>Consenso esplicito dell'interessato (per finalità specifiche)</li>
                <li>Legittimo interesse del Titolare</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Modalità del Trattamento</h2>
              <p>
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Comunicazione e Diffusione dei Dati</h2>
              <p>
                I dati personali potranno essere comunicati a:
              </p>
              <ul className="list-disc pl-6">
                <li>Compagnie assicurative per la gestione delle polizze</li>
                <li>IVASS e altri organismi di vigilanza</li>
                <li>Professionisti e consulenti esterni</li>
                <li>Fornitori di servizi informatici</li>
                <li>Autorità giudiziarie o amministrative, quando richiesto dalla legge</li>
              </ul>
              <p>
                I dati non saranno oggetto di diffusione.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Periodo di Conservazione</h2>
              <p>
                I dati personali saranno conservati per il tempo necessario al perseguimento delle finalità per cui sono stati raccolti e, in ogni caso, nel rispetto dei termini di legge (generalmente 10 anni per le pratiche assicurative).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Diritti dell'Interessato</h2>
              <p>
                L'interessato ha il diritto di:
              </p>
              <ul className="list-disc pl-6">
                <li>Accedere ai propri dati personali</li>
                <li>Ottenere la rettifica o la cancellazione degli stessi</li>
                <li>Ottenere la limitazione del trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
              </ul>
              <p>
                Per esercitare tali diritti, è possibile contattare il Titolare ai recapiti indicati al punto 1.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Comunicazione ISVAP</h2>
              <p>
                A norma della circolare ISVAP 393/D del 17/01/2000 si comunica che il Legale Rappresentante
                e gestore preposto alla mediazione tramite internet &egrave;:
              </p>
              <div className="bg-secondary-50 p-6 rounded-lg my-4">
                <p><strong>Luigi Bonardi</strong></p>
                <p>Amministratore Unico - Broker</p>
                <p>RUI: B000186864</p>
              </div>
              <p>
                La Societ&agrave; &egrave; soggetta alla vigilanza dell&apos;IVASS - Registro Unico degli Intermediari
                assicurativi e riassicurativi.
              </p>
              <p className="mt-3">
                &Egrave; possibile verificare la regolare iscrizione al RUI (Sezione B n. B000072481)
                collegandosi al sito{' '}
                <a href="https://www.ivass.it" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                  www.ivass.it
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Modifiche alla Privacy Policy</h2>
              <p>
                La presente Privacy Policy può essere soggetta a modifiche. Si invita pertanto a consultare periodicamente questa pagina per verificare eventuali aggiornamenti.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
