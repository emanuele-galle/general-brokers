import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NoteLegali() {
  return (
    <Layout
      title="Note Legali - General Brokers Srl"
      description="Note legali e termini di utilizzo del sito web di General Brokers Srl, broker assicurativo a Milano."
      keywords="note legali, termini di utilizzo, disclaimer, General Brokers"
    >
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-heading font-bold mb-8">Note Legali</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700">
            <p className="text-sm text-secondary-500">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Informazioni sul Titolare del Sito</h2>
              <p>Il presente sito web è di proprietà di:</p>
              <div className="bg-secondary-50 p-6 rounded-lg my-4">
                <p><strong>Ragione Sociale:</strong> General Brokers Srl</p>
                <p><strong>Sede Legale:</strong> Via Tonale, 20 - 20125 Milano (MI)</p>
                <p><strong>Partita IVA / Codice Fiscale:</strong> 03740950153</p>
                <p><strong>Capitale Sociale:</strong> € 70.000,00 i.v.</p>
                <p><strong>Telefono:</strong> 02 6698.4847</p>
                <p><strong>Email:</strong> info@generalbrokers.it</p>
                <p><strong>PEC:</strong> info@pec.generalbrokers.it</p>
                <p><strong>Codice ATECO:</strong> 66.22.00 - Attività di agenti e intermediari delle assicurazioni</p>
                <p><strong>Iscrizione RUI:</strong> Sezione B n. B000072481</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Registro Unico Intermediari (RUI)</h2>
              <p>
                General Brokers Srl &egrave; iscritta al <strong>Registro Unico degli Intermediari assicurativi e riassicurativi</strong> (RUI) tenuto dall&apos;IVASS (Istituto per la Vigilanza sulle Assicurazioni) alla <strong>Sezione B - Broker</strong> con il numero di iscrizione <strong>B000072481</strong>.
              </p>
              <p>
                L&apos;attivit&agrave; di intermediazione assicurativa &egrave; soggetta alla vigilanza dell&apos;IVASS ai sensi del D.Lgs. 209/2005 (Codice delle Assicurazioni Private).
              </p>
              <p className="mt-3">
                &Egrave; possibile verificare l&apos;iscrizione al RUI consultando il registro pubblico sul sito dell&apos;IVASS:{' '}
                <a href="https://servizi.ivass.it/RuirPubblica/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                  https://servizi.ivass.it/RuirPubblica/
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Oggetto del Sito</h2>
              <p>
                Il presente sito ha lo scopo di fornire informazioni sui servizi di intermediazione assicurativa offerti da General Brokers Srl e permettere agli utenti di richiedere informazioni o preventivi.
              </p>
              <p>
                Le informazioni contenute in questo sito sono di carattere generale e non costituiscono consulenza professionale specifica. Per ottenere una consulenza personalizzata, si prega di contattare direttamente i nostri uffici.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Diritti d&apos;Autore e Propriet&agrave; Intellettuale</h2>
              <p>
                Tutti i contenuti presenti sul sito (testi, immagini, loghi, grafica, struttura) sono di propriet&agrave; di General Brokers Srl o concessi in licenza e sono protetti dalle leggi italiane ed internazionali sulla propriet&agrave; intellettuale.
              </p>
              <p>
                È vietata la riproduzione, anche parziale, dei contenuti del sito senza autorizzazione scritta da parte di General Brokers Srl.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Limitazione di Responsabilità</h2>
              <p>
                General Brokers Srl si impegna a mantenere le informazioni del sito aggiornate e accurate, tuttavia non pu&ograve; garantire l&apos;assenza di errori o imprecisioni.
              </p>
              <p>
                L&apos;utilizzo delle informazioni contenute nel sito &egrave; a rischio e responsabilit&agrave; dell&apos;utente. General Brokers Srl non pu&ograve; essere ritenuta responsabile per eventuali danni diretti o indiretti derivanti dall&apos;uso o dall&apos;impossibilit&agrave; di utilizzare il sito.
              </p>
              <p>
                Il sito può contenere collegamenti a siti web di terze parti. General Brokers Srl non ha alcun controllo su tali siti e non può essere ritenuta responsabile per i loro contenuti o le loro policy sulla privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Informativa sulle Compagnie Assicurative</h2>
              <p>
                In qualit&agrave; di broker assicurativo indipendente, General Brokers Srl non rappresenta alcuna compagnia assicurativa ma agisce nell&apos;esclusivo interesse dei propri clienti.
              </p>
              <p>
                General Brokers Srl collabora con diverse compagnie assicurative autorizzate e vigilate da IVASS o da autorit&agrave; di vigilanza di altri Paesi dell&apos;Unione Europea.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Trattamento dei Dati Personali</h2>
              <p>
                Per informazioni sul trattamento dei dati personali, si rimanda alla sezione{' '}
                <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Modifiche alle Note Legali</h2>
              <p>
                General Brokers Srl si riserva il diritto di modificare in qualsiasi momento il contenuto delle presenti Note Legali. Le modifiche saranno effettive dalla data di pubblicazione sul sito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Legge Applicabile e Foro Competente</h2>
              <p>
                Le presenti Note Legali sono regolate dalla legge italiana. Per qualsiasi controversia relativa all&apos;interpretazione o all&apos;esecuzione delle presenti Note Legali, sar&agrave; competente in via esclusiva il Foro di Milano.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Comunicazione ISVAP</h2>
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
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">11. Contatti</h2>
              <p>
                Per qualsiasi informazione o chiarimento relativo alle presenti Note Legali, è possibile contattare:
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
