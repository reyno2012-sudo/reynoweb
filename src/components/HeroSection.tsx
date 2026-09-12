import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-file">
      <img
        className="binder-clip"
        src="/hardware/bulldog-document-clip-tight-v2.webp"
        alt=""
        width={630}
        height={348}
        aria-hidden="true"
      />
      <section className="hero sheet" id="top">
        <div className="file-stamp">PUBLIC FILE · 2026</div>
        <div className="hero-copy">
          <p className="eyebrow">REYNO</p>
          <h1>
            Making useful things
            <br />
            <em>between industry & AI.</em>
          </h1>
          <p className="hero-cn">
            汽车行业经营与销售管理实践者、AI 工具与工作流构建者、独立创作者。
            <br />
            把行业经验、产品思考与新工具，转化为可以长期使用的作品与工作方法。
          </p>
          <div className="hero-actions">
            <a className="stamp-button primary" href="#works">
              查看作品 <span aria-hidden="true">↗</span>
            </a>
            <a
              className="stamp-button"
              href="https://qjr6h2amuu.feishu.cn/wiki/W41nwmUtoiMDtpkOFMdckS0jnQd?fromScene=spaceOverview"
              target="_blank"
              rel="noreferrer"
            >
              收听播客 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-macintosh" aria-label="Macintosh 创作工作台与彩色电子相框">
          <img
            className="macintosh-workstation-base"
            src="/hero/macintosh-workstation-transparent-v2.webp"
            alt=""
            width={1448}
            height={1086}
            fetchPriority="high"
            decoding="async"
            aria-hidden="true"
          />
          <div className="macintosh-screen" aria-label="Macintosh 绘图画布">
            <img
              className="macintosh-screen-logo"
              src="/brand/shynloc-mark.webp"
              alt="Reyno"
              decoding="async"
            />
          </div>
          <div className="macintosh-photo-display">
            <img
              className="macintosh-color-portrait"
              src="/uploads/hero/portrait/035cd269022d8c65eac045c25fb17bcbdc54ebcd1aef0f8d93d6f2711b4493d1.webp"
              alt="Reyno 个人肖像"
              decoding="async"
            />
          </div>
        </aside>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>PUBLIC FILE</span>
          <span>CN / GLOBAL WEB</span>
        </div>
      </section>
    </div>
  );
};
