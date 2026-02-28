import Layout from '@/components/Layout';

export default function CookiePolicy() {
  return (
    <Layout
      title="Cookie Policy - General Brokers Srl"
      description="Informativa sui cookie utilizzati dal sito di General Brokers Srl. Scopri quali cookie utilizziamo e come gestirli."
      keywords="cookie policy, cookie tecnici, cookie analytics, General Brokers"
    >
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-heading font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700">
            <p className="text-sm text-secondary-500">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell&apos;utente quando visita un sito web. I cookie permettono al sito di riconoscere il dispositivo dell&apos;utente e memorizzare alcune informazioni sulle sue preferenze o azioni passate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Tipologie di Cookie Utilizzati</h2>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">2.1 Cookie Tecnici</h3>
              <p>
                Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati. Sono generalmente impostati solo in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi, come l&apos;impostazione delle tue preferenze di privacy, l&apos;accesso o la compilazione di moduli.
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3 mt-4">2.2 Cookie Analitici</h3>
              <p>
                Questi cookie ci permettono di contare le visite e le fonti di traffico, in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a capire quali sono le pagine pi&ugrave; e meno popolari e come i visitatori si muovono all&apos;interno del sito.
              </p>
              <p>
                Utilizziamo Google Analytics per analizzare l&apos;utilizzo del sito. Le informazioni generate dal cookie sull&apos;utilizzo del sito web vengono trasmesse a Google e archiviate sui suoi server.
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3 mt-4">2.3 Cookie di Profilazione</h3>
              <p>
                Al momento non utilizziamo cookie di profilazione per finalità di marketing diretto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Cookie di Terze Parti</h2>
              <p>
                Il nostro sito potrebbe contenere collegamenti a siti web di terze parti. Non abbiamo alcun controllo sui cookie utilizzati da questi siti web e, per ulteriori informazioni sull&apos;utilizzo dei cookie da parte loro, si consiglia di consultare le rispettive policy.
              </p>
              <p className="mt-3">Servizi di terze parti utilizzati:</p>
              <ul className="list-disc pl-6">
                <li><strong>Google Analytics:</strong> per l&apos;analisi del traffico web</li>
                <li><strong>Google Maps:</strong> per la visualizzazione delle mappe nella pagina contatti</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Gestione dei Cookie</h2>
              <p>
                Puoi gestire le tue preferenze sui cookie in qualsiasi momento attraverso le impostazioni del tuo browser. La maggior parte dei browser permette di:
              </p>
              <ul className="list-disc pl-6">
                <li>Visualizzare quali cookie sono memorizzati e cancellarli singolarmente</li>
                <li>Bloccare i cookie di terze parti</li>
                <li>Bloccare i cookie di determinati siti</li>
                <li>Bloccare tutti i cookie</li>
                <li>Cancellare tutti i cookie quando chiudi il browser</li>
              </ul>
              <p className="mt-3">
                Si prega di notare che la disabilitazione dei cookie potrebbe influire sulla funzionalità di questo e di molti altri siti web che visiti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Come Disabilitare i Cookie nei Browser Principali</h2>
              <ul className="list-disc pl-6">
                <li><strong>Google Chrome:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti</li>
                <li><strong>Mozilla Firefox:</strong> Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti web</li>
                <li><strong>Safari:</strong> Preferenze &gt; Privacy &gt; Cookie e dati dei siti web</li>
                <li><strong>Microsoft Edge:</strong> Impostazioni &gt; Cookie e autorizzazioni sito &gt; Cookie e dati del sito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Aggiornamenti alla Cookie Policy</h2>
              <p>
                Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultare regolarmente questa pagina per rimanere informato su come utilizziamo i cookie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa a questa Cookie Policy, puoi contattarci a:
              </p>
              <ul className="list-disc pl-6">
                <li>Email: info@generalbrokers.it</li>
                <li>Telefono: 02 6698.4847</li>
                <li>Indirizzo: Via Tonale, 20 - 20125 Milano</li>
              </ul>
            </section>
          </div>
        </div>
      
            {/* Sviluppo e Gestione Tecnica */}
            <div className="mt-12 pt-8 border-t border-secondary-800">
              <h2 className="text-xl font-bold text-white mb-3">Sviluppo e Gestione Tecnica del Sito</h2>
              <p className="text-secondary-400">Questo sito web è stato realizzato e viene gestito da:</p>
              <p className="text-secondary-400 mt-2">
                <strong className="text-white">FODI S.r.l. – Startup Innovativa</strong><br/>
                Via Santicelli 18/A, 88068 Soverato (CZ)<br/>
                P.IVA: 03856160793<br/>
                Email: <a href="mailto:info@fodisrl.it" className="text-primary-400 hover:underline">info@fodisrl.it</a><br/>
                Tel: +39 0963 576433<br/>
                Web: <a href="https://www.fodisrl.it" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">www.fodisrl.it</a>
              </p>
            </div>
        </section>
    </Layout>
  );
}
