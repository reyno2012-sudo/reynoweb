import React from 'react';
import { NOTE_ARTICLES } from '../data';

export const NotesSection: React.FC = () => {
  return (
    <section className="notes-section" id="notes">
      <header className="section-heading notes-heading">
        <div>
          <p className="section-code">FILE 05 · LATEST NOTES</p>
          <h2>正在思考，也正在记录</h2>
        </div>
        <div className="notes-intro">
          <p>
            进入朝夕见闻志，阅读我在思考、实验与记录的过程。
            <br />
            所有想法，都是通往更好作品的路径。
          </p>
          <a
            className="text-link"
            href="https://jintaoblog.com/"
            target="_blank"
            rel="noreferrer"
          >
            进入朝夕见闻志 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <ol className="notes-chronicle" aria-label="最新文章">
        {NOTE_ARTICLES.map((note) => {
          const isFeatured = !!note.featured;

          return (
            <li
              key={note.id}
              className={`note-row${isFeatured ? ' note-row-featured' : ''}`}
            >
              <div className="note-date">
                {note.year && note.month && (
                  <span className="note-month" aria-hidden="true">
                    <small>{note.year}</small>
                    <strong>{note.month}</strong>
                  </span>
                )}
                <time dateTime={note.date}>
                  {note.month || '07'}-{note.day || '30'}
                </time>
              </div>

              <a
                href={note.url}
                target="_blank"
                rel="noreferrer"
                className="note-entry"
              >
                <div className="note-body">
                  <div className="note-meta">
                    <span>{note.category}</span>
                    <span>{note.readTime} MIN READ</span>
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.summary}</p>
                  {note.tag && (
                    <div className="note-tags" aria-label="文章标签">
                      <span>{note.tag}</span>
                    </div>
                  )}
                </div>

                <span className="note-arrow">
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <div className="notes-continuation" aria-hidden="true">
        <span>CONTINUES</span>
        <p>记录持续生长中 · NEW NOTES WILL CONTINUE ↓</p>
      </div>
    </section>
  );
};
