import React from 'react';

export interface TopicVisualSpec {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  treatment: 'phone' | 'browser' | 'device' | 'dashboard' | 'scene';
}

interface TopicProductVisualProps {
  visual: TopicVisualSpec;
  priority?: boolean;
}

export const TopicProductVisual: React.FC<TopicProductVisualProps> = ({ visual, priority = true }) => {
  return (
    <figure
      className={`topic-product-visual treatment-${visual.treatment}`}
      aria-label={visual.alt}
    >
      <div className="topic-visual-frame">
        {visual.treatment === 'browser' && (
          <div className="topic-visual-browser-bar" aria-hidden="true">
            <div className="topic-browser-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="topic-browser-url">zuntra.cards</span>
          </div>
        )}

        <div className="topic-visual-image-wrapper">
          <img
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className="topic-visual-image"
          />
        </div>
      </div>

      {visual.caption && (
        <figcaption className="topic-visual-caption">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 animate-pulse" aria-hidden="true" />
          <span>{visual.caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
