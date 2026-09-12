import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="typewriter-stage">
        <img
          className="typewriter-scene"
          src="/assets/typewriter-valentine-footer-transparent-v2.webp"
          alt=""
          width={1600}
          height={659}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <span className="typewriter-paper-mark" aria-hidden="true" />
        <div className="typewriter-copy">
          <p className="section-code">FILE 05 · CONTACT & DIRECTORY</p>
          <h2>Keep building. Keep a record.</h2>
          <div className="footer-links">
            <a
              href="https://jintaoblog.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/shynloc/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://gallery.jintao.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Gallery <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://x.com/shynloc"
              target="_blank"
              rel="noreferrer"
            >
              X <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://bsky.app/profile/jintaoblog.com"
              target="_blank"
              rel="noreferrer"
            >
              Bluesky <span aria-hidden="true">↗</span>
            </a>
          </div>
          <small>REYNO PERSONAL DOSSIER · 2026</small>
        </div>
      </div>
    </footer>
  );
};
