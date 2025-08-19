import { useState } from "react";
import Tabs from "./components/Tabs";
import topicsData from "./data/topics.json";
import Modal from "./Components/Modal";
import TopicList from "./Components/TopicList";
import './index.css'
import FileManager from "./Practice/FileManager";
import Stopwatch from "./Practice/Timer";
import Timer from "./Practice/stop";
import PomodoroApp from "./Practice/TimersTabs";
import Carousel from "./Practice/Carousel";
import Form from "./Practice/useReducer";
export default function App() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    // <ThemeContextProvider>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        {/* <Stopwatch /> */}
        {/* <Timer /> */}
        <h1>My Learning Notes</h1>
        {/* <FileManager /> */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <TopicList topics={topicsData[activeTab]} onSelect={setSelectedTopic} />
        <Modal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
        {/* <PomodoroApp />
        <Carousel /> */}
        {/* <Form /> */}
      </div>
    // </ThemeContextProvider>

  );
}
