import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BlackstoneLogo } from './BlackstoneLogo';
import { BUSINESS_INFO } from '../data/content';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenEstimate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'work', label: 'OUR WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0c]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <BlackstoneLogo
            onClick={() => handleNavClick('home')}
            className="hover:opacity-90 transition-opacity"
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs font-mono-tag font-bold tracking-[0.16em] uppercase transition-colors py-1 ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff5500] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-mono-tag text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>(657) 377-6719</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white text-xs font-semibold tracking-wider font-mono-tag transition-all shadow-md shadow-[#ff5500]/20 active:scale-95"
            >
              <span>GET ESTIMATE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenEstimate}
              className="sm:hidden px-3 py-1.5 rounded bg-[#ff5500] text-[11px] font-mono-tag font-bold text-white tracking-wider"
            >
              ESTIMATE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#090a0c]/98 backdrop-blur-xl pt-28 px-8 pb-12 flex flex-col justify-between lg:hidden">
          <div className="space-y-6">
            <span className="text-[10px] font-mono-tag text-neutral-500 uppercase tracking-widest block">
              PAGE NAVIGATION
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center justify-between text-left py-2 group"
                  >
                    <span
                      className={`text-3xl font-extrabold font-display tracking-tight transition-colors ${
                        isActive ? 'text-[#ff5500]' : 'text-white group-hover:text-neutral-300'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="text-xs font-mono-tag text-neutral-600 group-hover:text-neutral-400">
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-md bg-white/5 border border-white/10 text-white font-mono-tag text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span>CALL {BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-md bg-[#ff5500] text-white font-mono-tag text-sm font-bold tracking-wider"
            >
              <span>GET A FREE ESTIMATE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
