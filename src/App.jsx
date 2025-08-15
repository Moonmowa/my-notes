import { useState } from "react";
import Tabs from "./components/Tabs";
import topicsData from "./data/topics.json";
import Modal from "./Components/Modal";
import TopicList from "./Components/TopicList";
import './index.css'
import FileManager from "./Practice/FileManager";
export default function App() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My Learning Notes</h1>
      {/* <FileManager /> */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopicList topics={topicsData[activeTab]} onSelect={setSelectedTopic} />
      <Modal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
    </div>
  );
}
