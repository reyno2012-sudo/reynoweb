import React from 'react';
import { NAVIGATION_ITEMS } from './data';
import { NavigationKeybank } from './components/NavigationKeybank';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { GitHubProjectsSection } from './components/GitHubProjectsSection';
import { NotesSection } from './components/NotesSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <main id="main-content">
        <div className="decorative-layer" aria-hidden="true">
          <div className="desk-grid" aria-hidden="true" />
          <div className="coffee-ring coffee-ring-one" aria-hidden="true" />
          <div className="coffee-ring coffee-ring-two" aria-hidden="true" />
        </div>

        <header className="control-drawer-shell">
          <nav className="top-nav" aria-label="主导航">
            <a className="brand-mark" href="#top">
              <span className="brand-emblem">
                <img
                  className="brand-logo"
                  src="/brand/reyno-eye-mark.png"
                  alt="Reyno 眼睛标志"
                  width={1536}
                  height={1024}
                />
              </span>
              <span className="brand-lcd">
                <img
                  className="brand-lcd-layer brand-lcd-day"
                  src="/navigation/dossier-lcd-day.webp"
                  alt=""
                  width={1200}
                  height={284}
                  aria-hidden="true"
                />
                <img
                  className="brand-lcd-layer brand-lcd-night"
                  src="/navigation/dossier-lcd-night.webp"
                  alt=""
                  width={1200}
                  height={284}
                  aria-hidden="true"
                />
                <span className="brand-lcd-copy">
                  <span className="brand-lcd-primary">PERSONAL DOSSIER</span>
                  <span className="brand-lcd-secondary">REYNO / ONLINE</span>
                </span>
              </span>
            </a>

            <NavigationKeybank navigation={NAVIGATION_ITEMS} />
            <ThemeToggle />
          </nav>
        </header>

        <div className="control-drawer-spacer" aria-hidden="true" />

        <HeroSection />
        <ProfileSection />
        <SelectedWorksSection />
        <GitHubProjectsSection />
        <NotesSection />
        <FooterSection />
      </main>
    </>
  );
}
