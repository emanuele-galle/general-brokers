import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-secondary-800 to-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="w-40 h-16 relative mb-6">
              <Image
                src="/images/logo/general-brokers-logo.jpg"
                alt="General Brokers Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-secondary-300 mb-6 text-sm leading-relaxed">
              Broker assicurativo indipendente dal 1977. Competenza, affidabilità e soluzioni personalizzate.
            </p>
            <div className="text-secondary-400 text-xs space-y-2 bg-white/5 p-4 rounded-xl">
              <p><strong className="text-secondary-300">P.IVA/CF:</strong> 03740950153</p>
              <p><strong className="text-secondary-300">Capitale Sociale:</strong> € 70.000,00</p>
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
                  Relazione Preventiva
                </a>
              </li>
              <li>
                <a href="/contatti" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contatti
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
                  Consulenza e Analisi Rischi
                </a>
              </li>
              <li>
                <a href="/day-medical" className="text-secondary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Day Medical Card
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
                <FaFax className="text-primary-400 flex-shrink-0 text-lg" />
                <span className="text-secondary-300 text-sm">02 6707.2163</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0 text-lg" />
                <a href="mailto:info@generalbrokers.it" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  info@generalbrokers.it
                </a>
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
        <div className="mt-12 pt-12 border-t border-secondary-800">
          <div className="text-center mb-8">
            <h4 className="text-sm font-semibold text-secondary-400 uppercase tracking-wider mb-6">
              Certificati e Vigilati da
            </h4>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto items-center">
            {/* IVASS */}
            <a
              href="https://www.ivass.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/images/logo/ivass-logo.jpg"
                  alt="IVASS - Istituto per la Vigilanza sulle Assicurazioni"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs text-secondary-500 mt-2 group-hover:text-secondary-400 transition-colors">
                IVASS
              </p>
            </a>

            {/* AIBA */}
            <a
              href="https://aiba.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/images/logo/aiba-logo.png"
                  alt="AIBA - Associazione Italiana Brokers di Assicurazioni"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs text-secondary-500 mt-2 group-hover:text-secondary-400 transition-colors">
                AIBA
              </p>
            </a>

            {/* CONSAP */}
            <a
              href="https://www.consap.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/images/logo/consap_logo.jpg"
                  alt="CONSAP - Concessionaria Servizi Assicurativi Pubblici"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs text-secondary-500 mt-2 group-hover:text-secondary-400 transition-colors">
                CONSAP
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-700 bg-secondary-900">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary-400 text-sm text-center md:text-left">
              © {currentYear} General Brokers Srl. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy-policy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-secondary-700">•</span>
              <a href="/cookie-policy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
              <span className="text-secondary-700">•</span>
              <a href="/note-legali" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Note Legali
              </a>
            </div>
          </div>
          <p className="text-secondary-500 text-xs text-center mt-6 leading-relaxed">
            Vigilanza IVASS - Registro Unico degli Intermediari assicurativi e riassicurativi<br />
            Sezione B n. B000072481
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
