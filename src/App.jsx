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
import DragDropExample from "./Practice/DragDrop";
import DragDropExample2 from "./Practice/DragDrop2";
import DragDrop3 from "./Practice/DragDrop3";
import Article from "./Components/Articles/Article";
import Counter from "./Practice/counter";
export default function App() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    // <ThemeContextProvider>
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>

      <h1>My Learning Notes</h1>
      {/* <FileManager /> */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopicList topics={topicsData[activeTab]} onSelect={setSelectedTopic} />
      <Modal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
      {/* <Article /> */}
      {/* <DragDropExample /> */}
      {/* <DragDropExample2 /> */}
      {/* <DragDrop3 /> */}
      {/* <PomodoroApp /> */}
        {/* <Carousel /> */}
        {/* <Form /> */}
        {/* <Stopwatch /> */}
        {/* <Timer /> */}
        {/* <Counter /> */}
    </div>
    // </ThemeContextProvider>

  );
}
