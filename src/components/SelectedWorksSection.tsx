import React from 'react';
import { WORKBENCH_TOOLS, SELECTED_PROJECTS } from '../data';

export const SelectedWorksSection: React.FC = () => {
  const totalRecords = String(SELECTED_PROJECTS.length).padStart(2, '0');
  const openRecords = String(
    SELECTED_PROJECTS.filter((p) => p.status === 'OPEN').length
  ).padStart(2, '0');
  const privateRecords = String(
    SELECTED_PROJECTS.filter((p) => p.status === 'PRIVATE').length
  ).padStart(2, '0');

  return (
    <section className="works-section" id="works">
      <header className="section-heading">
        <div>
          <p className="section-code">FILE 03 · SELECTED WORKS</p>
          <h2>一些已经运行起来的东西</h2>
        </div>
        <p>
          它们不仅是我常用的网站，也是我理解需求、组织信息并用 AI Coding 完成交付的过程记录。
        </p>
      </header>

      <aside className="workbench-index" aria-label="常用工具与工作环境">
        <div className="workbench-index-heading">
          <span>WORKBENCH INDEX</span>
          <p>多模型、多工具与自建 Agent 的持续使用经验</p>
        </div>
        <div className="workbench-tool-list">
          {WORKBENCH_TOOLS.map((tool) => (
            <span key={tool.name}>
              <i>{tool.index}</i>
              {tool.name}
            </span>
          ))}
        </div>
        <small>TOOLS CHANGE. THE ABILITY TO BUILD STAYS.</small>
      </aside>

      <div className="project-console">
        <div className="console-top" aria-hidden="true">
          <span>WORKBENCH LAUNCH CONSOLE</span>
        </div>

        <div className="project-grid">
          {SELECTED_PROJECTS.map((project) => (
            <a
              key={project.id}
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-plate">
                <span className="project-light" />
                <strong>{project.number}</strong>
              </div>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.name} 页面预览`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="project-copy">
                <h3>{project.name}</h3>
                <span className="project-label">{project.label}</span>
                <p>{project.description}</p>
                <div className="project-status">
                  <span
                    className={`access-light access-${project.status.toLowerCase()}`}
                    aria-hidden="true"
                  />
                  <strong>{project.status}</strong>
                </div>
                <small>{project.tags}</small>
                <span className="project-launch">
                  LAUNCH <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="console-footer" aria-label="作品档案统计">
          <strong>PROJECT ARCHIVE</strong>
          <span>{totalRecords} RECORDS</span>
          <span>{openRecords} OPEN</span>
          <span>{privateRecords} PRIVATE</span>
          <span>BUILT WITH AI CODING</span>
        </div>
      </div>
    </section>
  );
};
