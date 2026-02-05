import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaUniversity, FaCertificate } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="bg-white rounded-lg p-3 inline-flex items-center justify-center mb-4">
              <div className="w-40 h-16 relative">
                <Image
                  src="/images/logo/general-brokers-logo.jpg"
                  alt="General Brokers Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-4">
              Gestioni Assicurative
            </p>
            <p className="text-secondary-300 mb-6 text-sm leading-relaxed">
              Broker assicurativo indipendente dal 1977. Competenza, affidabilit&agrave; e soluzioni personalizzate.
            </p>
            <div className="text-secondary-400 text-xs space-y-2 bg-white/5 p-4 rounded-xl">
              <p><strong className="text-secondary-300">Capitale Sociale:</strong> &euro; 70.000,00 i.v.</p>
              <p><strong className="text-secondary-300">C.F. e P.IVA:</strong> 03740950153</p>
              <p><strong className="text-secondary-300">RUI:</strong> B000072481</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-white">Link Utili</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/chi-siamo" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="/servizi" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Servizi
                </a>
              </li>
              <li>
                <a href="/relazione-preventiva" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Richiedi Preventivo
                </a>
              </li>
              <li>
                <a href="/contatti" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contatti
                </a>
              </li>
              <li>
                <a href="/lavora-con-noi" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Lavora Con Noi
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-white">Servizi</h3>
            <ul className="space-y-3">
              <li>
                <a href="/servizi" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gestione Polizze
                </a>
              </li>
              <li>
                <a href="/servizi" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gestione Sinistri
                </a>
              </li>
              <li>
                <a href="/servizi" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gestioni Specifiche
                </a>
              </li>
              <li>
                <a href="/servizi" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Consulenza e Analisi Rischi
                </a>
              </li>
              <li>
                <a href="/denuncia-sinistro" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Denuncia Sinistro
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-white">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0 text-lg" />
                <span className="text-secondary-300 text-sm">
                  Via Tonale, 20<br />20125 Milano
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary-400 flex-shrink-0 text-lg" />
                <a href="tel:026698.4847" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  02 6698.4847
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0 text-lg" />
                <a href="mailto:info@generalbrokers.it" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  info@generalbrokers.it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaCertificate className="text-primary-400 flex-shrink-0 text-lg" />
                <a href="mailto:info@pec.generalbrokers.it" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  PEC: info@pec.generalbrokers.it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaUniversity className="text-primary-400 flex-shrink-0 text-lg" />
                <span className="text-secondary-300 text-sm">
                  IBAN: IT97 Q 05034 01689 000000001802
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/general-brokers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com/generalbrokers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Loghi Certificazioni */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* IVASS */}
            <a
              href="https://www.ivass.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center"
            >
              <p className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-3 group-hover:text-secondary-300 transition-colors">
                Vigilati da
              </p>
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/images/logo/ivass-logo.jpg"
                  alt="IVASS - Istituto per la Vigilanza sulle Assicurazioni"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            {/* AIBA */}
            <a
              href="https://aiba.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center"
            >
              <p className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-3 group-hover:text-secondary-300 transition-colors">
                Associati con
              </p>
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/images/logo/aiba-logo.png"
                  alt="AIBA - Associazione Italiana Brokers di Assicurazioni"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            {/* CONSAP - a lato, piu piccolo */}
            <a
              href="https://www.consap.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center md:ml-8 md:pl-8 md:border-l md:border-white/10"
            >
              <div className="relative w-24 h-14 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                <Image
                  src="/images/logo/consap_logo.jpg"
                  alt="CONSAP - Concessionaria Servizi Assicurativi Pubblici"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs text-secondary-500 mt-1 group-hover:text-secondary-400 transition-colors">
                CONSAP
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary-400 text-sm text-center md:text-left">
              &copy; {currentYear} General Brokers Srl. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy-policy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/20">&bull;</span>
              <a href="/cookie-policy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
              <span className="text-white/20">&bull;</span>
              <a href="/note-legali" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Note Legali
              </a>
            </div>
          </div>
          <div className="text-secondary-500 text-xs text-center mt-6 leading-relaxed space-y-3">
            <p>
              A norma della circolare ISVAP 393/D del 17/01/2000 si comunica che il Legale Rappresentante
              e gestore preposto alla mediazione tramite internet &egrave;:<br />
              <strong className="text-secondary-400">Luigi Bonardi</strong> (Amministratore Unico - Broker - RUI: B000186864)
            </p>
            <p>
              La Societ&agrave; &egrave; soggetta alla vigilanza dell&apos;IVASS - Registro Unico degli Intermediari assicurativi e riassicurativi.<br />
              &Egrave; possibile verificare la regolare iscrizione al RUI (Sezione B n. B000072481) collegandosi al sito{' '}
              <a href="https://www.ivass.it" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                www.ivass.it
              </a>
            </p>
          </div>
          <p className="text-secondary-600 text-xs mt-4">
            Realizzato da{" "}
            <a href="https://www.fodisrl.it" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-primary-400 transition-colors">
              Fodi S.r.l.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
