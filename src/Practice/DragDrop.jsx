import { useState } from "react";

function DragDropExample() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index) => {
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedItemIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggedItemIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "8px",
            margin: "4px",
            border: "1px solid gray",
            cursor: "move",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragDropExample;
