import React from 'react';

export const BrandWordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`zuntra-wordmark ${className}`.trim()} aria-hidden="true">
    <span>Heyheyy</span>
    <svg viewBox="0 0 16 16" focusable="false">
      <path d="M3 13 13 3M6 3h7v7" />
    </svg>
  </span>
);
