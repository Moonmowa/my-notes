import { useState } from "react";

export default function DragDropExample2() {
    const [startIndex, setStartIndex] = useState(null);
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const handleDragStart = (index) => {
        setStartIndex(index);
    }
    const handleDrop = (endIndex) => {
        const newItems = [...items];
        const [draggedItem] = newItems.splice(startIndex, 1);
        newItems.splice(endIndex, 0, draggedItem);
        setItems(newItems);
        startIndex(null);
    }
    return <>
        <ul>
            {
                items.map((item, index) => {
                    return <li
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDrop={() => handleDrop(index)}
                        onDragOver={(e) => e.preventDefault()}
                        style={{ border: '1px solid black', backgroundColor: 'black', color: 'white', padding: '1rem' }}
                    >{item}</li>
                })
            }
        </ul>
    </>
}
