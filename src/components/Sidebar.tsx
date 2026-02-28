import Link from 'next/link';
import Image from 'next/image';
import {
  FaBook,
  FaFileAlt,
  FaBriefcase,
  FaThumbsUp,
  FaExclamationTriangle,
  FaFileDownload,
  FaHome,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { useRouter } from 'next/router';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const router = useRouter();

  const menuItems = [
    { title: 'Home', href: '/', icon: FaHome },
    { title: 'Che bella Storia!', href: '/chi-siamo', icon: FaBook },
    { title: 'Richiedi Preventivo', href: '/relazione-preventiva', icon: FaFileAlt },
    { title: 'I Nostri Servizi', href: '/servizi', icon: FaThumbsUp },
    {
      title: 'Denuncia Sinistro',
      href: '/denuncia-sinistro',
      icon: FaExclamationTriangle,
      highlight: true,
    },
    { title: 'Modulistica', href: '/modulistica', icon: FaFileDownload },
    { title: 'Contatti', href: '/contatti', icon: FaEnvelope },
    { title: 'Lavora Con Noi', href: '/lavora-con-noi', icon: FaBriefcase },
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
          fixed top-0 left-0 h-screen bg-primary-600
          text-white shadow-2xl z-50 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-64 lg:w-72
        `}
      >
        {/* Logo */}
        <div className="px-4 pt-5 pb-3">
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
          <p className="text-center text-white text-sm italic font-serif mt-3">
            l&apos;assicurezza firmata
          </p>
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
                      flex items-center gap-3 px-4 py-3.5 rounded-lg
                      transition-all duration-200 group text-[15px]
                      ${active
                        ? 'bg-white text-primary-600 font-bold shadow-md'
                        : 'text-white hover:bg-white/15'
                      }
                    `}
                    onClick={onClose}
                  >
                    <Icon
                      className={`
                        flex-shrink-0 text-lg
                        ${active ? 'text-primary-600' : 'text-white group-hover:text-white'}
                      `}
                    />
                    <span>
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Media */}
        <div className="px-6 py-4 border-t border-white/30 mt-auto">
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/general-brokers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/generalbrokers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-6 py-4 border-t border-white/30 text-xs text-white/70 text-center">
          <p className="mb-1">RUI: B000072481</p>
          <p>P.IVA: 03740950153</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
