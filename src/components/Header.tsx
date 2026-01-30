import { FaBars, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 lg:left-72">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button - apre la sidebar */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-secondary-700 hover:text-primary-600 transition-colors p-2"
            aria-label="Apri menu"
          >
            <FaBars size={24} />
          </button>

          {/* Logo - visibile solo su mobile (su desktop è nella sidebar) */}
          <a href="/" className="flex items-center lg:hidden">
            <div className="w-32 h-12 relative">
              <Image
                src="/images/logo/general-brokers-logo.jpg"
                alt="General Brokers"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop: solo telefono */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <a
              href="tel:026698.4847"
              className="flex items-center gap-2 btn-primary"
            >
              <FaPhone className="text-sm" />
              <span>02 6698.4847</span>
            </a>
          </div>

          {/* Mobile: solo telefono */}
          <a
            href="tel:026698.4847"
            className="lg:hidden text-primary-600 p-2"
            aria-label="Chiama"
          >
            <FaPhone size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
