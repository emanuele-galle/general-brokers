import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBook,
  FaFileAlt,
  FaBriefcase,
  FaThumbsUp,
  FaExclamationTriangle,
  FaHandshake,
  FaFileDownload,
  FaLink,
  FaExclamationCircle,
  FaHome,
  FaUsers,
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaEnvelope
} from 'react-icons/fa';
import { useRouter } from 'next/router';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const router = useRouter();

  const menuItems = [
    {
      title: 'Home',
      href: '/',
      icon: FaHome,
      description: 'Torna alla pagina principale'
    },
    {
      title: 'Chi Siamo',
      href: '/chi-siamo',
      icon: FaBook,
      description: 'La nostra storia dal 1977'
    },
    {
      title: 'Richiedi Preventivo',
      href: '/relazione-preventiva',
      icon: FaFileAlt,
      description: 'Modulo guidato gratuito'
    },
    {
      title: 'Che noi consigliamo',
      href: '/servizi',
      icon: FaThumbsUp,
      description: 'I nostri servizi'
    },
    {
      title: 'Denuncia Sinistro',
      href: '/denuncia-sinistro',
      icon: FaExclamationTriangle,
      description: 'Segnala un sinistro',
      highlight: true
    },
    {
      title: 'Modulistica',
      href: '/modulistica',
      icon: FaFileDownload,
      description: 'Download documenti'
    },
    {
      title: 'Contatti',
      href: '/contatti',
      icon: FaEnvelope,
      description: 'Scrivici o vieni a trovarci'
    },
    {
      title: 'Lavora Con Noi',
      href: '/lavora-con-noi',
      icon: FaBriefcase,
      description: 'Unisciti al nostro team'
    }
  ];

  const quickLinks = [
    { title: 'La Società', href: '/chi-siamo#societa', icon: FaBook },
    { title: 'Chi è il Broker', href: '/chi-siamo#broker', icon: FaQuestionCircle },
    { title: 'Dove Siamo', href: '/contatti#mappa', icon: FaMapMarkerAlt },
    { title: 'Reclami', href: '/reclami', icon: FaExclamationCircle }
  ];

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay per mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-gradient-to-b from-primary-600 to-primary-800
          text-white shadow-2xl z-50 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-64 lg:w-72
        `}
      >
        {/* Logo e Header */}
        <div className="px-3 pt-4 pb-2">
          <Link href="/" className="block">
            <div className="bg-white rounded-lg p-4 flex items-center justify-center">
              <div className="w-40 h-16 relative">
                <Image
                  src="/images/logo/general-brokers-logo.jpg"
                  alt="General Brokers Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Menu Principale */}
        <nav className="py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-all duration-200 group
                      ${active
                        ? 'bg-white/20 shadow-md'
                        : 'hover:bg-white/10'
                      }
                      ${item.highlight ? 'ring-2 ring-white/40' : ''}
                    `}
                    onClick={onClose}
                  >
                    <Icon
                      className={`
                        flex-shrink-0 text-lg
                        ${active ? 'text-white' : 'text-white/80 group-hover:text-white'}
                      `}
                    />
                    <div className="flex-1 min-w-0">
                      <div className={`
                        font-medium text-sm leading-tight
                        ${active ? 'text-white' : 'text-white/90'}
                      `}>
                        {item.title}
                      </div>
                      {item.description && (
                        <div className="text-xs text-white/60 mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Access - 4 Pilastri */}
        <div className="px-6 py-4 border-t border-white/20">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-3">
            Accesso Rapido
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    flex flex-col items-center gap-2 p-3 rounded-lg
                    bg-white/10 hover:bg-white/20
                    transition-all duration-200 text-center
                  "
                  onClick={onClose}
                >
                  <Icon className="text-xl" />
                  <span className="text-xs leading-tight">{link.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Social Media */}
        <div className="px-6 py-4 border-t border-white/20">
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/general-brokers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/generalbrokers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-6 py-4 border-t border-white/20 text-xs text-white/60 text-center">
          <p className="mb-1">RUI: B000072481</p>
          <p>P.IVA: 03740950153</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
