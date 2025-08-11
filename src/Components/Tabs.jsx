export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "javascript", label: "JavaScript" },
    { key: "typescript", label: "TypeScript" },
    { key: "htmlcss", label: "HTML & CSS" },
    { key: "react", label: "ReactJS" }
  ];

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            backgroundColor: activeTab === tab.key ? "#333" : "#fff",
            color: activeTab === tab.key ? "#fff" : "#000",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
