export default function Modal({ topic, onClose }) {
  if (!topic) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <h2>{topic.title}</h2>
          <div style={{color: 'var(--muted)', fontSize: 13}}>{topic?.category || ''}</div>
        </div>

        <div className="modal-body">
          <div dangerouslySetInnerHTML={{__html: topic.content}} />
          <pre className="code"><code>{topic.code}</code></pre>
        </div>

        <div className="modal-footer">
          <button className="btn secondary" onClick={onClose}>Close</button>
          {/* optional "Copy code" placeholder */}
          <button
            className="btn primary"
            onClick={() => {
              try { navigator.clipboard.writeText(topic.code); }
              catch(e) { /* ignore */ }
            }}
          >
            Copy code
          </button>
        </div>
      </div>
    </div>
  );
}
