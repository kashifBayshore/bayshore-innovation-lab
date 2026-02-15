
"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { figmaColors, figmaSpacing } from "@/tokens/figma-design";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Use createPortal to mount modal at document body level
  // Note: Standard Next.js/React usage. 
  // If "document" is not available (SSR), this returns null naturally in useEffect/client comp, 
  // but simpler to just return null if !isOpen.
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
      style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000 // Ensure it's on top
      }}
    >
      <div
        className="relative w-full max-w-lg mx-4 bg-white rounded-lg shadow-xl"
        ref={modalRef}
        style={{
          boxShadow: figmaColors.cardShadow,
          borderRadius: figmaSpacing.borderRadius.lg,
          backgroundColor: figmaColors.backgroundWhite,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          {title && (
            <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100"
            style={{ color: figmaColors.textSecondary }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
