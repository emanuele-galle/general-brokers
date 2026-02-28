import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-secondary-300">
      {/* Red top line */}
      <div className="h-[3px] bg-primary-600"></div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 inline-block">
              <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">GENERAL BROKERS</h3>
              <p className="font-heading font-bold text-primary-400 uppercase text-[0.65rem] w-full" style={{ textAlign: 'justify', textAlignLast: 'justify' }}>
                GESTIONI ASSICURATIVE
              </p>
            </div>
            <p className="text-secondary-300 mb-6 text-sm leading-relaxed">
              Broker assicurativo indipendente dal 1977. Competenza, affidabilit&agrave; e soluzioni personalizzate.
            </p>
            <div className="text-secondary-400 text-xs space-y-1.5">
              <p>Capitale Sociale: &euro; 70.000,00 i.v.</p>
              <p>C.F. e P.IVA: 03740950153</p>
              <p>RUI: B000072481</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white">Link Utili</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Che bella Storia!', href: '/chi-siamo' },
                { label: 'Servizi', href: '/servizi' },
                { label: 'Richiedi Preventivo', href: '/relazione-preventiva' },
                { label: 'Contatti', href: '/contatti' },
                { label: 'Lavora Con Noi', href: '/lavora-con-noi' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-secondary-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">
                  Via Tonale, 20<br />20125 Milano
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <a href="tel:026698.4847" className="text-secondary-300 hover:text-white transition-colors text-sm">
                  02 6698.4847
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@generalbrokers.it" className="text-secondary-300 hover:text-white transition-colors text-sm">
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
                className="w-9 h-9 bg-white/10 hover:bg-primary-600 hover:text-white text-secondary-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/generalbrokers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary-600 hover:text-white text-secondary-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Certificazioni */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <a href="https://www.ivass.it/" target="_blank" rel="noopener noreferrer" className="group text-center">
              <div className="relative w-28 h-14 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image src="/images/logo/ivass-logo.jpg" alt="IVASS" fill className="object-contain" />
              </div>
            </a>
            <a href="https://aiba.it/" target="_blank" rel="noopener noreferrer" className="group text-center">
              <div className="relative w-28 h-14 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image src="/images/logo/aiba-logo.png" alt="AIBA" fill className="object-contain" />
              </div>
            </a>
            <a href="https://www.consap.it/" target="_blank" rel="noopener noreferrer" className="group text-center">
              <div className="relative w-20 h-12 opacity-50 hover:opacity-100 transition-all duration-300">
                <Image src="/images/logo/consap_logo.jpg" alt="CONSAP" fill className="object-contain" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-secondary-900">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary-300 text-sm text-center md:text-left">
              &copy; {currentYear} General Brokers Srl. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-secondary-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-secondary-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/note-legali" className="text-secondary-300 hover:text-white transition-colors">
                Note Legali
              </Link>
            </div>
          </div>
          <div className="text-secondary-400 text-xs text-center mt-6 leading-relaxed space-y-3">
            <p>
              A norma della circolare ISVAP 393/D del 17/01/2000 si comunica che il Legale Rappresentante
              e gestore preposto alla mediazione tramite internet &egrave;:<br />
              <strong className="text-secondary-200">Luigi Bonardi</strong> (Amministratore Unico - Broker - RUI: B000186864)
            </p>
            <p>
              La Societ&agrave; &egrave; soggetta alla vigilanza dell&apos;IVASS - Registro Unico degli Intermediari assicurativi e riassicurativi.<br />
              &Egrave; possibile verificare la regolare iscrizione al RUI (Sezione B n. B000072481) collegandosi al sito{' '}
              <a href="https://www.ivass.it" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                www.ivass.it
              </a>
            </p>
          </div>
          <p className="text-secondary-400 text-xs mt-4">
            Realizzato da{" "}
            <a href="https://www.fodisrl.it" target="_blank" rel="noopener noreferrer" className="text-secondary-200 hover:text-primary-400 transition-colors font-medium">
              Fodi S.r.l.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
