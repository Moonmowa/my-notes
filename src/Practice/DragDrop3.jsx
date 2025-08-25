import { useState } from "react"

export default function DragDrop3 () {
    const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const handleDrop = (endIndex) => {
        const newItems = [...items];
        const draggedItem = newItems.splice(draggedIndex, 1)[0];
        newItems.splice(endIndex, 0, draggedItem)
        setItems(newItems)
        setDraggedIndex(null);
    }
    return <>
        <ul>
            {items.map((item, index)=>{
                return <li
                    draggable
                    onDragStart={()=>setDraggedIndex(index)}
                    onDrop={()=>handleDrop(index)}
                    onDragOver={(e)=> e.preventDefault()}
                    style={{border: '1px soild white', padding: '1rem', backgroundColor: 'black', listStyleType: 'none', color: 'white'}}
                >
                    {item}
                </li>
            })}
        </ul>
     </>
}