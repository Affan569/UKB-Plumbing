"use client";
import { useState, useEffect, useRef } from 'react';

interface FilloutEmbedProps {
  className?: string;
}

export default function FilloutEmbed({ className = "hero-fillout-embed" }: FilloutEmbedProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (embedRef.current) {
      observerRef.current.observe(embedRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && !isLoaded) {
      // Small delay to ensure the script is loaded
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, isLoaded]);

  return (
    <div ref={embedRef} className={className}>
      {isLoaded && (
        <div
          className="hero-fillout-embed"
          data-fillout-id="s5uwzWcheNus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      )}
    </div>
  );
}