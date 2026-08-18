import React from 'react';

interface RecruiterLogoProps {
  name: string;
  className?: string;
}

export default function RecruiterLogo({ name, className = "h-8 w-auto" }: RecruiterLogoProps) {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case 'tcs':
    case 'tata consultancy services':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="TCS">
          <g transform="translate(10, 8)">
            <circle cx="12" cy="12" r="12" fill="#005A9C" />
            <path d="M 6 7 C 9 12, 11 15, 12 21 C 13 15, 15 12, 18 7" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 12 7 L 12 21" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="40" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#005A9C" letterSpacing="0.5">TCS</text>
        </svg>
      );
    case 'infosys':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="Infosys">
          <text x="10" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="22" fill="#007CC3" letterSpacing="-0.5">Infosys</text>
        </svg>
      );
    case 'wipro':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="Wipro">
          <g transform="translate(15, 20)">
            <circle cx="0" cy="0" r="3" fill="#005A9C" />
            <circle cx="-8" cy="-8" r="1.8" fill="#E31B23" />
            <circle cx="0" cy="-11" r="1.8" fill="#FFC72C" />
            <circle cx="8" cy="-8" r="1.8" fill="#78BE20" />
            <circle cx="11" cy="0" r="1.8" fill="#00A3E0" />
            <circle cx="8" cy="8" r="1.8" fill="#005A9C" />
            <circle cx="0" cy="11" r="1.8" fill="#7A3E95" />
            <circle cx="-8" cy="8" r="1.8" fill="#E31B23" />
            <circle cx="-11" cy="0" r="1.8" fill="#FF7F00" />
            <circle cx="-5" cy="-5" r="1.5" fill="#00A3E0" />
            <circle cx="5" cy="-5" r="1.5" fill="#78BE20" />
            <circle cx="5" cy="5" r="1.5" fill="#FF7F00" />
            <circle cx="-5" cy="5" r="1.5" fill="#7A3E95" />
          </g>
          <text x="35" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#1E293B">wipro</text>
        </svg>
      );
    case 'bosch':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="Bosch">
          <g transform="translate(8, 10)">
            <circle cx="10" cy="10" r="9" fill="none" stroke="#E30613" strokeWidth="2" />
            <rect x="7" y="5" width="6" height="10" fill="none" stroke="#E30613" strokeWidth="2" />
            <line x1="1" y1="10" x2="19" y2="10" stroke="#E30613" strokeWidth="2" />
          </g>
          <text x="34" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#1E293B" letterSpacing="1">BOSCH</text>
        </svg>
      );
    case 'cognizant':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="Cognizant">
          <g transform="translate(10, 10)">
            <path d="M 16 4 C 8 4, 4 8, 4 14 C 4 20, 9 24, 16 24" fill="none" stroke="#0033A0" strokeWidth="3" strokeLinecap="round" />
            <circle cx="16" cy="4" r="2.5" fill="#39B54A" />
            <circle cx="16" cy="24" r="2.5" fill="#0033A0" />
          </g>
          <text x="32" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" fill="#0033A0">Cognizant</text>
        </svg>
      );
    case 'accenture':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="Accenture">
          <text x="10" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="#1E293B" letterSpacing="-0.5">accenture</text>
          <path d="M70,11 L74,14 L70,17" fill="none" stroke="#A100FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mrf':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="MRF">
          <text x="15" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" fill="#D22630" fontStyle="italic" letterSpacing="1">MRF</text>
        </svg>
      );
    case 'hexaware':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="Hexaware">
          <g transform="translate(8, 10)">
            <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="#F37021" />
            <polygon points="10,3 17,7 17,13 10,17 3,13 3,7" fill="#FFFFFF" />
            <polygon points="10,6 14,8 14,12 10,14 6,12 6,8" fill="#005493" />
          </g>
          <text x="34" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" fill="#005493">Hexaware</text>
        </svg>
      );
    case 'federal bank':
      return (
        <svg viewBox="0 0 140 40" className={className} aria-label="Federal Bank">
          <g transform="translate(5, 8)">
            <rect x="0" y="0" width="24" height="24" rx="4" fill="#00549F" />
            <rect x="5" y="5" width="4" height="14" fill="#FF8200" />
            <rect x="12" y="5" width="4" height="14" fill="#FF8200" />
            <rect x="12" y="5" width="7" height="4" fill="#FF8200" />
          </g>
          <g transform="translate(35, 12)">
            <text x="0" y="8" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="10" fill="#00549F" letterSpacing="0.5">FEDERAL BANK</text>
            <text x="0" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="5.5" fill="#FF8200" letterSpacing="0.5">YOUR PERFECT BANKING PARTNER</text>
          </g>
        </svg>
      );
    case 'ust global':
    case 'ust':
      return (
        <svg viewBox="0 0 120 40" className={className} aria-label="UST Global">
          <circle cx="20" cy="20" r="12" fill="#12A5B2" />
          <text x="20" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="11" fill="#FFFFFF" textAnchor="middle">ust</text>
          <text x="38" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#1E293B">UST</text>
        </svg>
      );
    default:
      return (
        <span className="font-extrabold text-navy-deep text-sm sm:text-base tracking-wider uppercase">
          {name}
        </span>
      );
  }
}
