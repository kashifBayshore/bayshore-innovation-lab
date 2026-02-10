import React, { useState } from 'react';
import Image from 'next/image';
import { colors, spacing } from '@/types/design-tokens';
import { figmaColors } from '@/tokens/figma-design';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className="relative w-full z-[100] transition-all duration-300"
      style={{ 
        backgroundColor: 'transparent',
        paddingTop: `calc(${spacing.md} + env(safe-area-inset-top, 0px))`,
        paddingBottom: spacing.md,
      }}
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="relative transition-all duration-300"
            style={{
              width: 'clamp(140px, 15vw, 205px)',
              height: 'clamp(50px, 5.5vw, 72px)',
            }}
          >
            <Image
              src="/bayshore-logo-1.png"
              alt="Bayshore Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[16px] font-medium transition-colors hover:text-[#03c5ce]"
                style={{ 
                  fontFamily: 'Open Sans, sans-serif',
                  color: colors.text.primary,
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 z-50 focus:outline-none"
            style={{ color: colors.text.primary }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        style={{ top: 0, height: '100vh' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[24px] font-bold transition-colors hover:text-[#03c5ce]"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                color: colors.text.primary,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-gray-100 w-full text-center">
            <p className="text-sm text-gray-500">Bayshore Innovation Lab</p>
          </div>
        </div>
      </div>
    </header>
  );
};

