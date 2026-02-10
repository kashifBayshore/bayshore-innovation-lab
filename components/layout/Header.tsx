import React from 'react';
import Image from 'next/image';
import { colors, spacing } from '@/types/design-tokens';

export const Header: React.FC = () => {
  return (
    <header 
      className="relative w-full z-50"
      style={{ 
        backgroundColor: 'transparent',
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="relative"
            style={{
              width: '205px',
              height: '72px',
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-[16px] font-medium transition-colors hover:text-[#03c5ce]"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                color: colors.text.primary,
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-[16px] font-medium transition-colors hover:text-[#03c5ce]"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                color: colors.text.primary,
              }}
            >
              About
            </a>
            <a 
              href="#initiatives" 
              className="text-[16px] font-medium transition-colors hover:text-[#03c5ce]"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                color: colors.text.primary,
              }}
            >
              Initiatives
            </a>
            <a 
              href="#contact" 
              className="text-[16px] font-medium transition-colors hover:text-[#03c5ce]"
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                color: colors.text.primary,
              }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            style={{ color: colors.text.primary }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
