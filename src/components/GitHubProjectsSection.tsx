import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FLOPPY_PROJECTS } from '../data';

// Simple inline GitHub icon SVG matching the phosphor style
const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
  </svg>
);

const CaretLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
  </svg>
);

const CaretRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
  </svg>
);

export const GitHubProjectsSection: React.FC = () => {
  const visibleProjects = FLOPPY_PROJECTS.filter((p) => p.visible);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex >= visibleProjects.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, visibleProjects.length]);

  const step = useCallback(
    (direction: number) => {
      if (visibleProjects.length < 2) return;
      setActiveIndex((curr) => (curr + direction + visibleProjects.length) % visibleProjects.length);
    },
    [visibleProjects.length]
  );

  if (visibleProjects.length === 0) return null;

  const currentProject = visibleProjects[activeIndex] || visibleProjects[0];

  return (
    <section className="github-projects-section" id="github-projects">
      <header className="section-heading github-projects-heading">
        <div>
          <p className="section-code">FILE 04 · OPEN CODE & REPOSITORIES</p>
          <h2>软盘里的公开代码</h2>
        </div>
        <div className="github-projects-intro">
          <p>一些独立发布、自托管或面向 AI Agent 与工具链的公开代码仓库。</p>
          <span>ARCHIVE / GITHUB PUBLIC REPOSITORIES</span>
        </div>
      </header>

      <div
        className="github-archive-stage"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            step(-1);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            step(1);
          }
        }}
        onTouchStart={(e) => {
          touchStartRef.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStartRef.current === null) return;
          const diff = (e.changedTouches[0]?.clientX ?? touchStartRef.current) - touchStartRef.current;
          touchStartRef.current = null;
          if (Math.abs(diff) > 42) {
            step(diff > 0 ? -1 : 1);
          }
        }}
        aria-label="GitHub 公开项目软盘浏览器，使用左右方向键切换"
      >
        <div className="portable-computer" aria-label="复古便携电脑上的双终端">
          <img
            src="/github-projects/portable-computer-frontal.webp"
            alt="一台正面打开的八十年代便携电脑"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
          <div className="portable-terminal-screen" aria-hidden="true">
            <div className="terminal-pane terminal-codex">
              <span className="terminal-title">CODEX</span>
              <p>$ codex</p>
              <p>workspace ready</p>
              <p className="terminal-type terminal-type-codex">Hello, world!</p>
            </div>
            <div className="terminal-pane terminal-claude">
              <span className="terminal-title">CLAUDE</span>
              <p>$ claude</p>
              <p>ready to build</p>
              <p className="terminal-type terminal-type-claude">Hello, human.</p>
            </div>
          </div>
        </div>

        <div className="floppy-coverflow" role="group" aria-roledescription="carousel" aria-label="GitHub 项目">
          <div className="floppy-stack">
            {visibleProjects.map((project, idx) => {
              const total = visibleProjects.length;
              let offset = (idx - activeIndex + total) % total;
              if (offset > total / 2) offset -= total;

              const absOffset = Math.abs(offset);
              const isActive = idx === activeIndex;

              const diskStyle: React.CSSProperties = {
                '--disk-x': `${44 * offset}px`,
                '--disk-y': `${8 * absOffset}px`,
                '--disk-z': `${-58 * absOffset}px`,
                '--disk-rotate-y': `${-3.5 * offset}deg`,
                '--disk-rotate-z': `${isActive ? -5 : 1.45 * offset - 5}deg`,
                '--disk-scale': Math.max(0.78, 1 - 0.055 * absOffset),
                '--disk-opacity': Math.max(0.7, 1 - 0.08 * absOffset),
                '--disk-blur': `${0.3 * Math.max(0, absOffset - 2)}px`,
                zIndex: total - absOffset,
              } as React.CSSProperties;

              return (
                <article
                  key={project.id}
                  className={`floppy-disk floppy-${project.color}${isActive ? ' is-active' : ''}`}
                  style={diskStyle}
                  aria-hidden={!isActive}
                  onClick={() => !isActive && setActiveIndex(idx)}
                >
                  <img
                    src="/github-projects/floppy-disk.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="floppy-label">
                    <span className="floppy-kicker">PUBLIC REPOSITORY</span>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <dl>
                      <div>
                        <dt>STACK</dt>
                        <dd>{project.stack}</dd>
                      </div>
                      <div>
                        <dt>PLATFORM</dt>
                        <dd>{project.platform}</dd>
                      </div>
                      <div>
                        <dt>VERSION</dt>
                        <dd>{project.version}</dd>
                      </div>
                    </dl>
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={isActive ? 0 : -1}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon />
                      View on GitHub
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="coverflow-control coverflow-previous"
          onClick={() => step(-1)}
          aria-label="上一个 GitHub 项目"
        >
          <CaretLeftIcon />
        </button>
        <button
          type="button"
          className="coverflow-control coverflow-next"
          onClick={() => step(1)}
          aria-label="下一个 GitHub 项目"
        >
          <CaretRightIcon />
        </button>

        <div className="coverflow-status">
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            当前 GitHub 项目 {activeIndex + 1} / {visibleProjects.length}：{currentProject.name}
          </span>
          <span>
            {String(activeIndex + 1).padStart(2, '0')} / {String(visibleProjects.length).padStart(2, '0')}
          </span>
          <div aria-label={`当前项目：${currentProject.name}`}>
            {visibleProjects.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                className={idx === activeIndex ? 'is-current' : ''}
                onClick={() => setActiveIndex(idx)}
                aria-label={`查看 ${proj.name}`}
                aria-current={idx === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
