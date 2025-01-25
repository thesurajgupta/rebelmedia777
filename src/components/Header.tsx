import React from 'react';
import { NavItem } from '../types';
import { Menu, X, Globe2 } from 'lucide-react';

const navItems: NavItem[] = [
  { title: 'Home', href: 'home' },
  { title: 'Services', href: 'services' },
  { title: 'Pricing', href: 'pricing' },
  { title: 'Case Studies', href: 'case-studies' },
  { title: 'Contact', href: 'contact' }
];

interface HeaderProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Header({ onPageChange, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-[#1A1A1A] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={(e) => handleNavClick('home', e)}
          >
            <Globe2 className="h-8 w-8 text-[#FF3B3B]" />
            <span className="ml-2 text-xl font-bold">RebelMedia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.href
                    ? 'text-[#FF3B3B]'
                    : 'hover:text-[#FF3B3B]'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#1A1A1A] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  currentPage === item.href
                    ? 'text-[#FF3B3B]'
                    : 'hover:text-[#FF3B3B]'
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}