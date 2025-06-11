import type React from 'react';

export interface NavLinkItem {
  href: string;
  label: string;
  isButton?: boolean;
  isScrollLink?: boolean;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'accent';
}

export interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void; // Added for actions like opening a modal
  children?: React.ReactNode; // For additional content like price
  className?: string;
  accentBorder?: string; // e.g., 'border-brand-gold'
}

export interface TeamMemberProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  role: string;
  ctaText: string;
  ctaHref: string;
}

export interface ServiceItemProps {
  title: string;
  description: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>; // Can be SVG component
}

export type SectionKey =
  | 'hero'
  | 'porqueElegirnos'
  | 'flota'
  | 'experiencias'
  | 'tripulacion'
  | 'transparencia'
  | 'servicios'
  | 'contacto';

export interface SectionRef {
  current: HTMLElement | null;
}

export type SectionRefs = {
  [key in SectionKey]: React.RefObject<HTMLElement>;
};

// Location type for filtering yachts
export const locations = ['Cancun', 'Puerto Aventuras', 'Los Cabos'] as const;
export type Location = (typeof locations)[number];

// Chat Message Types - REMOVED
// export interface ChatMessagePart {
//   text: string;
// }

// export interface ChatMessage {
//   id: string;
//   role: 'user' | 'model';
//   parts: ChatMessagePart[];
//   timestamp: Date;
//   audioSrc?: string;
//   isPlayingAudio?: boolean;
// }
