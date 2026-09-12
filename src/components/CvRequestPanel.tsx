import React, { useState, useEffect, useRef, useId } from 'react';

export const CvRequestPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const titleId = useId();
  const descId = useId();
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(() => firstInputRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  const closeModal = () => {
    if (status !== 'sending') {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Simulate sending network request
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : '发送失败，请稍后重试。');
    }
  };

  return (
    <>
      <aside className="cv-request-card">
        <span className="cv-card-screw cv-card-screw-top" aria-hidden="true" />
        <span className="cv-card-screw cv-card-screw-bottom" aria-hidden="true" />
        <div className="cv-private-label">PRIVATE INSERT · 02/P</div>
        <p className="cv-card-code">FULL CV / PROFESSIONAL ENQUIRY</p>
        <h2>A fuller professional record.</h2>
        <p>
          如你的来意与职业机会、项目合作或正式交流有关，可以留下必要信息。我会亲自阅读，并根据具体沟通场景提供合适版本的 CV。
        </p>
        <dl className="cv-access-list">
          <div>
            <dt>ACCESS</dt>
            <dd>BY REQUEST</dd>
          </div>
          <div>
            <dt>DELIVERY</dt>
            <dd>PERSONAL REPLY</dd>
          </div>
          <div>
            <dt>PUBLIC DOWNLOAD</dt>
            <dd>DISABLED</dd>
          </div>
        </dl>
        <button
          className="cv-request-button"
          type="button"
          onClick={() => {
            setStatus('idle');
            setErrorMessage('');
            setIsOpen(true);
          }}
        >
          REQUEST CV
          <span aria-hidden="true">↗</span>
        </button>
        <small>NO AUTOMATIC DOWNLOAD · REQUESTS REVIEWED PERSONALLY</small>
      </aside>

      {isOpen && (
        <div
          className="cv-dialog-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <section
            className="cv-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
          >
            <button
              className="cv-dialog-close"
              type="button"
              aria-label="关闭 CV 请求窗口"
              onClick={closeModal}
              disabled={status === 'sending'}
            >
              ×
            </button>

            {status === 'success' ? (
              <div className="cv-success" role="status">
                <span aria-hidden="true">✓</span>
                <p className="section-code">REQUEST / RECEIVED</p>
                <h2 id={titleId}>Request received.</h2>
                <p id={descId}>
                  感谢你的联系。我会亲自阅读这份请求，并在合适时通过邮件回复。
                </p>
                <button type="button" onClick={closeModal}>
                  CLOSE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="section-code">PROFESSIONAL ENQUIRY · PRIVATE</p>
                <h2 id={titleId}>Request a fuller CV</h2>
                <p className="cv-dialog-description" id={descId}>
                  请简单说明你的身份与联系事由。提交后不会自动下载或发送固定简历；我会亲自阅读，并根据具体沟通场景决定后续回复。
                </p>
                <div className="cv-form-grid">
                  <label>
                    <span>YOUR NAME / 姓名</span>
                    <input
                      ref={firstInputRef}
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </label>
                  <label>
                    <span>EMAIL / 邮箱</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={200}
                      required
                    />
                  </label>
                  <label>
                    <span>ORGANISATION / 机构（选填）</span>
                    <input
                      name="organization"
                      autoComplete="organization"
                      maxLength={160}
                    />
                  </label>
                  <label>
                    <span>ENQUIRY / 联系事由</span>
                    <select name="reason" defaultValue="Request full CV">
                      <option value="Request full CV">Request full CV</option>
                      <option value="Professional opportunity">Professional opportunity</option>
                      <option value="Project collaboration">Project collaboration</option>
                      <option value="Interview or media">Interview or media</option>
                      <option value="Speaking or event">Speaking or event</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label className="cv-message-field">
                    <span>MESSAGE / 正文</span>
                    <textarea
                      name="message"
                      maxLength={3000}
                      placeholder="请补充与你的来意相关的必要背景……"
                      required
                    />
                  </label>
                  <label className="cv-honeypot" aria-hidden="true">
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                {status === 'error' && (
                  <p className="cv-form-error" role="alert">
                    {errorMessage}
                  </p>
                )}

                <div className="cv-dialog-footer">
                  <p>
                    <strong>PRIVACY NOTE</strong>
                    仅用于回复本次专业联系，不会加入邮件列表。
                  </p>
                  <div>
                    <button type="button" onClick={closeModal}>
                      CANCEL
                    </button>
                    <button
                      className="cv-dialog-submit"
                      type="submit"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'SENDING…' : 'SEND REQUEST'}
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  );
};
