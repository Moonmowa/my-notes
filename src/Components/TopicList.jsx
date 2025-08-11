export default function TopicList({ topics = [], onSelect }) {
  return (
    <div className="grid" role="list">
      {topics.map((topic, idx) => (
        <div
          role="listitem"
          tabIndex={0}
          key={idx}
          onClick={() => onSelect(topic)}
          onKeyDown={(e) => { if(e.key === 'Enter') onSelect(topic); }}
          className="tile"
        >
          <div className="title">{topic.title}</div>
          <div className="meta">Click to open — concise notes & examples</div>
        </div>
      ))}
    </div>
  );
}
