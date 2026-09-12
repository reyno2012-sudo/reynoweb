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
              href="https://qjr6h2amuu.feishu.cn/wiki/W41nwmUtoiMDtpkOFMdckS0jnQd?fromScene=spaceOverview"
              target="_blank"
              rel="noreferrer"
            >
              Podcast <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/reyno2012-sudo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://x.com/reyno2"
              target="_blank"
              rel="noreferrer"
            >
              X <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://t.me/reyno007"
              target="_blank"
              rel="noreferrer"
            >
              Telegram <span aria-hidden="true">↗</span>
            </a>
          </div>
          <small>REYNO PERSONAL DOSSIER · 2026</small>
        </div>
      </div>
    </footer>
  );
};
