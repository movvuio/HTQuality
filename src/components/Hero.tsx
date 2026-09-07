"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const HERO_VIDEOS = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
];

export function Hero() {
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playCurrent = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }, []);

  useEffect(() => {
    playCurrent();
  }, [currentIndex, playCurrent]);

  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const handleVideoError = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
      <video
        ref={videoRef}
        src={HERO_VIDEOS[currentIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-navy/60" aria-hidden />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/50 via-transparent to-navy/75 pointer-events-none" aria-hidden />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-[1.1] text-white tracking-tight">
            {t.heroTitleLine1}{" "}
            <span className="text-sky">{t.heroTitleAccent}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#servicios" className="btn-primary">
              {t.ctaExploreServices}
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              {t.ctaContactNow}
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label={t.heroScrollLabel}
      >
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
