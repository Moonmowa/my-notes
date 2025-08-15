import { useRef } from 'react';

export default function Modal({ topic, onClose }) {
  const backdropRef = useRef();

  if (!topic) return null;

  // Close modal if clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const copyToClipboard = (text) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="modal-backdrop"
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="modal">
        <div className="modal-header">
          <h2>{topic.title}</h2>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>{topic?.category || ''}</div>
        </div>

        <div className="modal-body">
          {/* Render content as dangerous HTML */}
          {topic.content && (
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: topic.content }}
              style={{
                lineHeight: 1.6,
                fontSize: '14px',
                color: '#4a5a6a'
              }}
            />
          )}

          {/* Render topic-level code (if no examples) */}
          {topic.code && !topic.examples && (
            <div className="code-block" style={{ marginTop: '12px' }}>
              <pre className="code">
                <code>{topic.code}</code>
              </pre>
              <button
                className="btn primary"
                style={{ marginTop: '6px' }}
                onClick={() => copyToClipboard(topic.code)}
              >
                Copy code
              </button>
            </div>
          )}

          {/* Render examples */}
          {topic.examples && topic.examples.length > 0 && (
            <div className="examples">
              {topic.examples.map((ex, index) => (
                <div key={index} className="example" style={{ marginTop: '20px' }}>
                  <h4>Example {index + 1}</h4>
                  {ex.description && <p dangerouslySetInnerHTML={{ __html: ex.description }} />}
                  {ex.whyItHappens && (
                    <p
                      style={{ fontStyle: 'italic', color: 'var(--muted)' }}
                      dangerouslySetInnerHTML={{ __html: ex.whyItHappens }}
                    />
                  )}
                  <div className="code-block" style={{ marginTop: '8px' }}>
                    <pre className="code">
                      <code>{ex.code}</code>
                    </pre>
                    <button
                      className="btn primary"
                      style={{ marginTop: '6px' }}
                      onClick={() => copyToClipboard(ex.code)}
                    >
                      Copy code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
