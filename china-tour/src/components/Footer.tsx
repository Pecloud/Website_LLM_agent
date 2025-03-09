import Link from 'next/link';
import {footerConfig} from '@/config/footer';
import {cn} from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({className}: FooterProps) => {
  return (
    <footer className={cn('w-full bg-[#D14B0D] text-white', className)}>
      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-8">
          {footerConfig.links.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link href={link.href} className="text-white hover:text-gray-200">
                {link.label}
              </Link>
              {index < footerConfig.links.length - 1 && <span className="ml-8 text-white">•</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Copyright and License */}
      <div className="border-t border-[#E86A2C] text-center py-2">
        <p className="text-sm">
          {footerConfig.copyright} {footerConfig.licenseNumber}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
