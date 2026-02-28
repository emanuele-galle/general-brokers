import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, legalInfo } from '@/data/contactInfo';
import { yearsOfExperience } from '@/data/companyStats';
import {
  FaShieldAlt,
  FaHandshake,
  FaCheckCircle,
  FaPhone,
  FaArrowRight,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function ChiSiamo() {
  return (
    <Layout
      title="Chi Siamo - General Brokers | Broker Assicurativo Milano dal 1977"
      description="General Brokers: broker assicurativo indipendente a Milano dal 1977. Competenza, indipendenza e servizio personalizzato per famiglie e aziende."
    >
      {/* Hero */}
      <section className="relative text-white min-h-[600px] md:min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/office/office-1.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 flex items-center min-h-[600px] md:min-h-[700px]">
          <div className="max-w-3xl py-20 md:py-24">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Chi Siamo
            </h1>
            <div className="w-16 h-[3px] bg-white rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Dal <strong>1977</strong> a Milano, un preciso punto di riferimento per persone e piccole aziende
              che sentono il bisogno di essere seguiti da un consulente assicurativo <strong>indipendente</strong>.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
      </section>

      {/* Testo Introduttivo */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6 text-secondary-600 text-lg leading-relaxed">
            <p>
              La Societ&agrave; Contemporanea, con le sue complessit&agrave;, provoca nelle persone un senso di smarrimento
              e d&apos;isolamento che rende sempre pi&ugrave; difficile fare scelte opportune. Questo stato d&apos;animo
              assale soprattutto chi si affaccia sul mercato assicurativo, sempre in costante evoluzione e modificazione.
            </p>
            <p>
              Per tale ragione, l&apos;analisi delle polizze, la loro gestione e la cura dei tuoi interessi in caso
              di sinistro sono aspetti da tenere costantemente sotto controllo: l&apos;importante &egrave; che venga fatto
              da chi, come noi, possa garantirti una reale indipendenza da tutte le compagnie assicurative.
            </p>

            <div className="quote-block text-xl md:text-2xl my-10">
              <p>
                Con la nostra esperienza, competenza e professionalit&agrave; non ti abbandoneremo.{' '}
                <strong className="text-primary-600 not-italic">Mai!</strong>
              </p>
            </div>

            <p className="text-center font-heading text-2xl text-primary-600 italic">
              &ldquo;l&apos;assicurezza firmata&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Broker vs Agente */}
      <section id="broker" className="py-20 md:py-28 bg-secondary-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Broker vs Agente</h2>
            <p className="section-subtitle">La differenza che fa la differenza</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card Broker */}
            <div className="bg-white rounded-xl p-8 border border-secondary-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <FaShieldAlt className="text-xl text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Il Broker</h3>
              </div>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Il broker &egrave; l&apos;esperto assicurativo che si pone come <strong className="text-primary-600">TUO</strong> consulente nei rapporti con le compagnie.
                </p>
                <p>
                  Rappresenta <strong className="text-primary-600">TE, il Cliente</strong>, ed &egrave; slegato da qualunque vincolo di dipendenza dalle compagnie.
                </p>
                <div className="flex items-start gap-3 bg-primary-50 p-4 rounded-lg mt-4">
                  <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="font-semibold text-secondary-800 text-sm">
                    Unico interlocutore professionista, indipendente da tutte le compagnie
                  </p>
                </div>
              </div>
            </div>

            {/* Card Agente */}
            <div className="bg-white rounded-xl p-8 border border-secondary-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary-400 rounded-xl flex items-center justify-center">
                  <FaHandshake className="text-xl text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold">L&apos;Agente</h3>
              </div>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  L&apos;agente rappresenta <strong>una compagnia di assicurazione</strong> e agisce esclusivamente nell&apos;interesse della stessa.
                </p>
                <div className="flex items-start gap-3 bg-secondary-100 p-4 rounded-lg mt-4">
                  <span className="text-secondary-400 mt-0.5 flex-shrink-0">&#9888;</span>
                  <p className="font-semibold text-secondary-700 text-sm">
                    Vincolato agli interessi della compagnia che rappresenta
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="quote-block text-center py-8 px-8 border-l-0 border-t-[3px] border-primary-600 rounded-t-lg rounded-r-none bg-secondary-50">
            <p className="font-heading text-xl md:text-2xl text-secondary-800 mb-2">
              &ldquo;Standoti vicino e guardandoci in faccia ogni volta che ne sentirai la necessit&agrave;&rdquo;
            </p>
            <p className="text-secondary-500 italic">
              Cos&igrave;, come si usa in quei villaggi non ancora globali
            </p>
          </div>
        </div>
      </section>

      {/* Cosa Facciamo */}
      <section id="societa" className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Cosa Facciamo per Te</h2>
            <p className="section-subtitle">Tre aree di competenza al servizio della tua sicurezza</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gestione Polizze',
                subtitle: 'Check-up assicurativi, analisi costi e amministrazione',
                items: [
                  'Relazione panoramica su polizze in corso',
                  'Consulenza telefonica e a domicilio',
                  'Controllo scadenze e aggiornamenti',
                  'Gestione personalizzata',
                ],
              },
              {
                title: 'Gestione Sinistri',
                subtitle: 'Istruzione pratica, scelta di fiduciari e definizione',
                items: [
                  'Istruisce personalmente le pratiche',
                  'Contatta la Compagnia per tuo conto',
                  'Incarica periti, legali ed esperti',
                  'Responsabile a 360\u00B0',
                ],
              },
              {
                title: 'Consulenza Specialistica',
                subtitle: 'Polizze all-risks, multirischi e rischi speciali',
                items: [
                  'All-risks per pellicciai, orefici, costruttori',
                  'Multirischi per artigiani e piccole industrie',
                  'Rischi speciali per opere complesse',
                  'Rendite differite e immediate',
                ],
              },
            ].map((area) => (
              <div key={area.title} className="border border-secondary-200 rounded-xl p-8">
                <h3 className="font-heading text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-sm text-secondary-500 italic mb-6">{area.subtitle}</p>
                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-secondary-600">
                      <FaCheckCircle className="text-primary-600 mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificazioni */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Certificati e Vigilati</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-3xl mx-auto">
            <a href="https://www.ivass.it/" target="_blank" rel="noopener noreferrer" className="text-center group">
              <div className="relative w-32 h-20 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                <Image src="/images/logo/ivass-logo.jpg" alt="IVASS" fill className="object-contain" />
              </div>
              <p className="text-xs text-secondary-500 mt-2">IVASS</p>
            </a>
            <a href="https://aiba.it/" target="_blank" rel="noopener noreferrer" className="text-center group">
              <div className="relative w-32 h-20 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                <Image src="/images/logo/aiba-logo.png" alt="AIBA" fill className="object-contain" />
              </div>
              <p className="text-xs text-secondary-500 mt-2">AIBA</p>
            </a>
            <a href="https://www.consap.it/" target="_blank" rel="noopener noreferrer" className="text-center group">
              <div className="relative w-24 h-16 grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100">
                <Image src="/images/logo/consap_logo.jpg" alt="CONSAP" fill className="object-contain" />
              </div>
              <p className="text-xs text-secondary-500 mt-2">CONSAP</p>
            </a>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-secondary-500">
              Iscrizione RUI: <strong className="text-secondary-700">{legalInfo.rui.number}</strong> &mdash; Sezione B
            </p>
          </div>
        </div>
      </section>

      {/* Conclusione */}
      <section className="py-20 md:py-28 bg-secondary-700 text-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="font-heading text-2xl md:text-3xl italic text-white/70 mb-6 leading-relaxed">
            &ldquo;Non siamo James Joyce e non siamo a Dublino,
          </p>
          <p className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
            siamo a Milano.&rdquo;
          </p>
          <div className="divider-red mx-auto mb-6"></div>
          <p className="text-lg text-white/50 mb-2">
            E sono quasi <strong className="text-white">cinquant&apos;anni</strong>
          </p>
          <p className="font-heading text-3xl md:text-4xl font-bold text-white mt-8">
            Tutto qua!
          </p>
          <p className="text-sm text-white/30 italic mt-4">
            Forse avresti voluto una conclusione pi&ugrave; ridondante? Noi non lo crediamo!
          </p>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Vuoi Saperne di Pi&ugrave;?</h2>
          <p className="text-secondary-500 mb-8">
            Contattaci per una consulenza gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contatti" className="btn-primary inline-flex items-center gap-2">
              Richiedi Consulenza <FaArrowRight className="text-sm" />
            </Link>
            <a href={`tel:${contactInfo.phone.tel}`} className="btn-secondary inline-flex items-center gap-2">
              <FaPhone className="text-sm" /> {contactInfo.phone.display}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
