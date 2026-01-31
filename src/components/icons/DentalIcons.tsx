import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Hero Tooth Illustration
export const HeroToothIllustration: React.FC<IconProps> = ({ className = '', size = 400 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E5A6B" />
        <stop offset="100%" stopColor="#2A7A8C" />
      </linearGradient>
      <linearGradient id="toothGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8F4F6" />
        <stop offset="100%" stopColor="#D0E8EC" />
      </linearGradient>
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8B86D" />
        <stop offset="100%" stopColor="#D4A055" />
      </linearGradient>
    </defs>
    
    {/* Background decorative circles */}
    <circle cx="200" cy="200" r="180" fill="url(#toothGradientLight)" opacity="0.5" />
    <circle cx="200" cy="200" r="150" fill="white" opacity="0.8" />
    
    {/* Main tooth shape */}
    <path
      d="M200 60 
         C240 60, 280 80, 280 140 
         C280 170, 270 190, 265 210 
         C260 240, 270 280, 270 320 
         C270 360, 250 380, 230 380 
         C215 380, 205 360, 200 340 
         C195 360, 185 380, 170 380 
         C150 380, 130 360, 130 320 
         C130 280, 140 240, 135 210 
         C130 190, 120 170, 120 140 
         C120 80, 160 60, 200 60Z"
      fill="url(#toothGradient)"
      stroke="#1E5A6B"
      strokeWidth="2"
    />
    
    {/* Tooth highlight */}
    <ellipse cx="175" cy="140" rx="25" ry="35" fill="white" opacity="0.3" />
    
    {/* Sparkle decorations */}
    <g className="animate-pulse-soft">
      <path
        d="M320 100 L325 115 L340 120 L325 125 L320 140 L315 125 L300 120 L315 115 Z"
        fill="url(#accentGradient)"
      />
    </g>
    <g className="animate-pulse-soft" style={{ animationDelay: '1s' }}>
      <path
        d="M80 280 L83 290 L93 293 L83 296 L80 306 L77 296 L67 293 L77 290 Z"
        fill="url(#accentGradient)"
      />
    </g>
    <g className="animate-pulse-soft" style={{ animationDelay: '0.5s' }}>
      <path
        d="M340 250 L343 260 L353 263 L343 266 L340 276 L337 266 L327 263 L337 260 Z"
        fill="#2A7A8C"
      />
    </g>
    
    {/* Small decorative circles */}
    <circle cx="90" cy="150" r="8" fill="#E8B86D" opacity="0.6" />
    <circle cx="310" cy="300" r="6" fill="#1E5A6B" opacity="0.4" />
    <circle cx="70" cy="220" r="5" fill="#2A7A8C" opacity="0.5" />
  </svg>
);

// Team Illustration
export const TeamIllustration: React.FC<IconProps> = ({ className = '', size = 400 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E5A6B" />
        <stop offset="100%" stopColor="#2A7A8C" />
      </linearGradient>
      <linearGradient id="accentGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8B86D" />
        <stop offset="100%" stopColor="#D4A055" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <circle cx="200" cy="200" r="180" fill="#F5F7F8" opacity="0.5" />
    
    {/* Doctor 1 - Left */}
    <g transform="translate(60, 100)">
      {/* Body */}
      <path
        d="M40 120 Q40 100 60 100 L100 100 Q120 100 120 120 L120 200 L40 200 Z"
        fill="url(#teamGradient)"
      />
      {/* Head */}
      <circle cx="80" cy="70" r="35" fill="#F5D0C5" />
      {/* Hair */}
      <path
        d="M45 60 Q45 30 80 30 Q115 30 115 60 Q115 50 105 45 Q80 35 55 45 Q45 50 45 60"
        fill="#2D3748"
      />
      {/* Stethoscope */}
      <path
        d="M60 120 Q60 140 80 140 Q100 140 100 120"
        stroke="#E8B86D"
        strokeWidth="4"
        fill="none"
      />
    </g>
    
    {/* Doctor 2 - Center (slightly forward) */}
    <g transform="translate(140, 80)">
      {/* Body */}
      <path
        d="M40 130 Q40 110 60 110 L100 110 Q120 110 120 130 L120 220 L40 220 Z"
        fill="url(#teamGradient)"
      />
      {/* Head */}
      <circle cx="80" cy="80" r="40" fill="#F5D0C5" />
      {/* Hair */}
      <path
        d="M40 70 Q40 35 80 35 Q120 35 120 70 Q120 60 110 55 Q80 40 50 55 Q40 60 40 70"
        fill="#4A5568"
      />
      {/* Coat collar */}
      <path
        d="M60 110 L80 130 L100 110"
        fill="white"
      />
    </g>
    
    {/* Doctor 3 - Right */}
    <g transform="translate(220, 100)">
      {/* Body */}
      <path
        d="M40 120 Q40 100 60 100 L100 100 Q120 100 120 120 L120 200 L40 200 Z"
        fill="url(#teamGradient)"
      />
      {/* Head */}
      <circle cx="80" cy="70" r="35" fill="#F5D0C5" />
      {/* Hair */}
      <path
        d="M45 60 Q45 30 80 30 Q115 30 115 60 Q115 50 105 45 Q80 35 55 45 Q45 50 45 60"
        fill="#2D3748"
      />
      {/* Glasses */}
      <circle cx="70" cy="70" r="8" stroke="#2D3748" strokeWidth="2" fill="none" />
      <circle cx="90" cy="70" r="8" stroke="#2D3748" strokeWidth="2" fill="none" />
      <line x1="78" y1="70" x2="82" y2="70" stroke="#2D3748" strokeWidth="2" />
    </g>
    
    {/* Decorative elements */}
    <circle cx="50" cy="320" r="15" fill="url(#accentGradient2)" opacity="0.6" />
    <circle cx="350" cy="280" r="10" fill="#1E5A6B" opacity="0.4" />
    <circle cx="30" cy="180" r="8" fill="#2A7A8C" opacity="0.5" />
  </svg>
);

// Dental Tourism Illustration
export const TourismIllustration: React.FC<IconProps> = ({ className = '', size = 400 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="tourismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E5A6B" />
        <stop offset="100%" stopColor="#2A7A8C" />
      </linearGradient>
      <linearGradient id="tourismAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8B86D" />
        <stop offset="100%" stopColor="#D4A055" />
      </linearGradient>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E8F4F6" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <circle cx="200" cy="200" r="180" fill="url(#skyGradient)" />
    
    {/* Airplane */}
    <g transform="translate(200, 180) rotate(-15)">
      {/* Body */}
      <ellipse cx="0" cy="0" rx="80" ry="25" fill="white" stroke="#1E5A6B" strokeWidth="2" />
      {/* Wings */}
      <path
        d="M-20 0 L-40 -40 L20 0 Z"
        fill="url(#tourismGradient)"
      />
      <path
        d="M-10 5 L-30 35 L10 5 Z"
        fill="#1E5A6B"
      />
      {/* Tail */}
      <path
        d="M60 -5 L80 -30 L70 0 Z"
        fill="url(#tourismGradient)"
      />
      {/* Windows */}
      <circle cx="-40" cy="-5" r="5" fill="#2A7A8C" />
      <circle cx="-20" cy="-5" r="5" fill="#2A7A8C" />
      <circle cx="0" cy="-5" r="5" fill="#2A7A8C" />
      <circle cx="20" cy="-5" r="5" fill="#2A7A8C" />
      <circle cx="40" cy="-5" r="5" fill="#2A7A8C" />
    </g>
    
    {/* Tooth in center */}
    <g transform="translate(200, 280)">
      <path
        d="M0 -40 
           C20 -40, 35 -30, 35 0 
           C35 15, 30 25, 28 35 
           C26 50, 32 65, 32 80 
           C32 95, 22 105, 12 105 
           C5 105, 0 95, 0 85 
           C0 95, -5 105, -12 105 
           C-22 105, -32 95, -32 80 
           C-32 65, -26 50, -28 35 
           C-30 25, -35 15, -35 0 
           C-35 -30, -20 -40, 0 -40Z"
        fill="url(#tourismGradient)"
        stroke="#1E5A6B"
        strokeWidth="2"
      />
      {/* Highlight */}
      <ellipse cx="-10" cy="-5" rx="8" ry="12" fill="white" opacity="0.3" />
    </g>
    
    {/* World map outline (simplified) */}
    <g opacity="0.15">
      <path
        d="M50 320 Q100 300 150 320 Q200 340 250 320 Q300 300 350 320"
        stroke="#1E5A6B"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M70 340 Q120 320 170 340 Q220 360 270 340 Q320 320 370 340"
        stroke="#1E5A6B"
        strokeWidth="2"
        fill="none"
      />
    </g>
    
    {/* Location pins */}
    <g className="animate-pulse-soft">
      <path
        d="M80 300 Q80 285 95 285 Q110 285 110 300 Q110 310 95 325 Q80 310 80 300"
        fill="url(#tourismAccent)"
      />
      <circle cx="95" cy="300" r="8" fill="white" />
    </g>
    <g className="animate-pulse-soft" style={{ animationDelay: '0.7s' }}>
      <path
        d="M290 300 Q290 285 305 285 Q320 285 320 300 Q320 310 305 325 Q290 310 290 300"
        fill="url(#tourismAccent)"
      />
      <circle cx="305" cy="300" r="8" fill="white" />
    </g>
    
    {/* Decorative elements */}
    <circle cx="60" cy="100" r="12" fill="#E8B86D" opacity="0.5" />
    <circle cx="340" cy="120" r="8" fill="#2A7A8C" opacity="0.4" />
    <circle cx="320" cy="350" r="10" fill="#1E5A6B" opacity="0.3" />
  </svg>
);

// Service Icons
export const ServiceCheckupIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#F5F7F8" stroke="#1E5A6B" strokeWidth="2" />
    <path
      d="M32 16 C38 16, 44 20, 44 30 C44 35, 42 38, 40 42 C38 48, 40 54, 40 58 C40 62, 36 64, 34 64 C32 64, 30 62, 30 58 C30 62, 28 64, 26 64 C24 64, 20 62, 20 58 C20 54, 22 48, 20 42 C18 38, 16 35, 16 30 C16 20, 22 16, 28 16"
      fill="#1E5A6B"
    />
    <circle cx="26" cy="28" r="4" fill="white" opacity="0.5" />
  </svg>
);

export const ServiceCosmeticIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#F5F7F8" stroke="#1E5A6B" strokeWidth="2" />
    <path
      d="M20 36 Q20 28 32 28 Q44 28 44 36 Q44 44 32 48 Q20 44 20 36"
      fill="#1E5A6B"
    />
    <path
      d="M28 38 Q28 34 32 34 Q36 34 36 38"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="48" cy="16" r="6" fill="#E8B86D" />
    <path d="M46 14 L50 18 M50 14 L46 18" stroke="white" strokeWidth="2" />
  </svg>
);

export const ServiceOrthoIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#F5F7F8" stroke="#1E5A6B" strokeWidth="2" />
    <path
      d="M20 36 Q20 28 32 28 Q44 28 44 36 Q44 44 32 48 Q20 44 20 36"
      fill="#1E5A6B"
    />
    <rect x="22" y="34" width="4" height="4" fill="#E8B86D" rx="1" />
    <rect x="28" y="34" width="4" height="4" fill="#E8B86D" rx="1" />
    <rect x="34" y="34" width="4" height="4" fill="#E8B86D" rx="1" />
    <rect x="40" y="34" width="4" height="4" fill="#E8B86D" rx="1" />
  </svg>
);

export const ServiceSurgeryIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#F5F7F8" stroke="#1E5A6B" strokeWidth="2" />
    <path
      d="M32 12 L32 28 M24 20 L40 20"
      stroke="#1E5A6B"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="42" r="12" fill="#1E5A6B" />
    <path
      d="M28 42 L32 46 L38 38"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ServiceEndoIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#F5F7F8" stroke="#1E5A6B" strokeWidth="2" />
    <path
      d="M32 12 C38 12, 44 16, 44 26 C44 31, 42 34, 40 38 C38 44, 40 50, 40 56 C40 60, 36 62, 34 62 C32 62, 30 60, 30 56 C30 60, 28 62, 26 62 C24 62, 20 60, 20 56 C20 50, 22 44, 20 38 C18 34, 16 31, 16 26 C16 16, 22 12, 28 12"
      fill="#1E5A6B"
    />
    <path
      d="M32 20 L32 50"
      stroke="#E8B86D"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="50" r="3" fill="#E8B86D" />
  </svg>
);

export const ServiceProstheticsIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#F5F7F8" stroke="#1E5A6B" strokeWidth="2" />
    <path
      d="M20 32 L26 26 L32 32 L38 26 L44 32"
      stroke="#1E5A6B"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect x="18" y="36" width="28" height="12" rx="2" fill="#E8B86D" />
    <rect x="22" y="40" width="6" height="4" fill="white" />
    <rect x="30" y="40" width="6" height="4" fill="white" />
    <rect x="38" y="40" width="4" height="4" fill="white" />
  </svg>
);

// Social Icons
export const FacebookIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// Checkmark Icon
export const CheckmarkIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="#1E5A6B" />
    <path
      d="M8 12 L11 15 L16 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Phone Icon
export const PhoneIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Email Icon
export const EmailIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Location Icon
export const LocationIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Clock Icon
export const ClockIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

// Menu Icon
export const MenuIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Close Icon
export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
